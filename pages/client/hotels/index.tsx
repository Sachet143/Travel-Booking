/* eslint-disable @next/next/no-img-element */
import ClientLayout from "@/components/layout/client/ClientLayout";
import {
  cleanUrlParams,
  imageFullPath,
  renderLocation,
} from "@/services/helper";
import {
  Col,
  InputNumber,
  Pagination,
  Row,
  Select,
  Skeleton,
  Slider,
  Tag,
} from "antd";
import Router, { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import _debounce from "lodash/debounce";
import { Controller, useForm } from "react-hook-form";
import states from "@/states.json";
import axiosClient from "@/services/axios/clientfetch";
import { debounce } from "lodash";
const { Option } = Select;
const customFetcher = (url: string) => axiosClient(url).then((res: any) => res);

const HotelListing = () => {
  const router = useRouter();

  const { data: featureList, error: featureError } = useSWR(
    `/features`,
    customFetcher
  );

  const { data: hotels, error } = useSWR(
    cleanUrlParams(`/hotels`, router.query)
  );
  const hotelLoading = !hotels && !error;

  const {
    register,
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm<any>({
    defaultValues: {
      search: null,
      min_price: 0,
      max_price: 0,
      country: null,
      state: null,
      city: null,
      features: [],
    },
  });

  const applyPriceFilter = (e: any) => {
    e.preventDefault();

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        min_price: getValues("min_price"),
        max_price: getValues("max_price"),
        page: 1
      })
    );
  };

  const applyLocationFilter = (e: any) => {
    e.preventDefault();

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        country: getValues("country"),
        state: getValues("state"),
        city: getValues("city"),
        page: 1
      })
    );
  };

  const clearPriceFilter = (e: any) => {
    e.preventDefault();

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        min_price: null,
        max_price: null,
      })
    );
  };

  const clearLocationFilter = (e: any) => {
    e.preventDefault();

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        country: null,
        state: null,
        city: null,
      })
    );
  };

  const applyFeaturesFilter = (e: any) => {
    e.preventDefault();
    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        features: getValues("features").join(","),
        page: 1
      })
    );
  };

  const debounceName = useMemo(() => {
    const searchHotel = (value: any) => {
      router.push(
        cleanUrlParams("/hotels", {
          ...router.query,
          search: value,
          page: 1
        })
      );
    };
    return debounce(searchHotel, 1000);
  }, []);

  useEffect(() => {
    reset({
      ...router.query,
      features: router.query.features
        ? router.query.features
            .toString()
            .split(",")
            .map((i) => Number(i))
        : [],
    });
  }, [router.query]);

  const clearFilter = (value: any) => {
    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        [value]: null,
      })
    );
  };

  return (
    <ClientLayout>
      <>
        <section id="explore_area" className="section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section_heading_center">
                  {hotelLoading ? (
                    <div className="w-25 mx-auto">
                      <Skeleton active paragraph={false} />
                    </div>
                  ) : (
                    <h2>{hotels.total} hotel found</h2>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              {/* filters */}
              <div className="col-lg-3">
                {Object.keys(router.query).length > 0 && (
                  <>
                    <div className="h5">
                      <h5>Applied Filter:</h5>
                    </div>
                    <div className="mb-3 left_side_search_heading">
                      {Object.keys(router.query).map(
                        (keyName: any, index: any) => {
                          return (
                            <Tag
                              key={index}
                              closable
                              onClose={() => clearFilter(keyName)}
                              className={"text-capitalize"}
                            >
                              {keyName}
                            </Tag>
                          );
                        }
                      )}
                    </div>
                  </>
                )}

                <div className="left_side_search_area">
                  <input
                    {...register("search", {
                      required: "Please enter the hotel name",
                    })}
                    className="form-control border mb-4"
                    placeholder="Search Hotel"
                    onChange={(e: any) => debounceName(e.target.value)}
                  />
                </div>
                <div className="left_side_search_area">
                  {/* filter by price */}
                  <div className="left_side_search_boxed">
                    <div className="left_side_search_heading">
                      <h5>Filter by Price</h5>
                    </div>
                    <div className="filter-price">
                      {/* minimum price */}
                      <label>Minimum price</label>
                      <Controller
                        name="min_price"
                        control={control}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <>
                              <Row>
                                <Col span={12}>
                                  <Slider
                                    step={5}
                                    min={500}
                                    max={1500}
                                    onChange={onChange}
                                    value={Number(value)}
                                  />
                                </Col>
                                {/* <Col span={4}>
                                  <InputNumber
                                    min={500}
                                    max={1500}
                                    style={{ margin: "0 16px" }}
                                    value={Number(value)}
                                    onChange={onChange}
                                  />
                                </Col> */}
                              </Row>
                              {errors?.min_price && (
                                <p>{errors.min_price.message + ""}</p>
                              )}
                            </>
                          );
                        }}
                      />
                      {/* minimum price */}
                      <label>MaxPrice price</label>
                      <Controller
                        name="max_price"
                        control={control}
                        rules={{
                          validate: (val) =>
                            (val && val >= 100 && val <= 50000) ||
                            "Lowest Price should be in range",
                        }}
                        render={({ field: { onChange, value } }) => {
                          return (
                            <>
                              <Row>
                                <Col span={12}>
                                  <Slider
                                    step={5}
                                    min={1500}
                                    max={50000}
                                    onChange={onChange}
                                    value={Number(value)}
                                  />
                                </Col>
                                <Col span={4}>
                                  <InputNumber
                                    min={1500}
                                    max={50000}
                                    style={{ margin: "0 16px" }}
                                    value={Number(value)}
                                    onChange={onChange}
                                  />
                                </Col>
                              </Row>
                              {errors?.max_price && (
                                <p>{errors.max_price.message + ""}</p>
                              )}
                            </>
                          );
                        }}
                      />
                    </div>
                    <button
                      className="btn btn-admin-dark"
                      type="button"
                      onClick={applyPriceFilter}
                    >
                      Apply
                    </button>
                    <button
                      className="btn btn-admin-dark-outlined mx-3"
                      type="button"
                      onClick={clearPriceFilter}
                    >
                      Clear
                    </button>
                  </div>
                  {/* filter by location */}
                  <div className="left_side_search_boxed">
                    <div className="left_side_search_heading">
                      <h5>Filter by Location</h5>
                    </div>
                    <div className="filter_review">
                      <form className="review_star">
                        <input
                          className="mt-2 form-control"
                          type="text"
                          value="Nepal"
                          disabled
                        />
                        <div className="custom-select">
                          <Controller
                            control={control}
                            name="state"
                            rules={{ required: "State is required!" }}
                            render={({ field: { onChange, value } }) => (
                              <>
                                <Select
                                  status={errors?.state?.message && "error"}
                                  value={value}
                                  onChange={onChange}
                                  showSearch
                                  allowClear
                                  size="large"
                                  className="form-control my-4"
                                  placeholder="Select State"
                                >
                                  {states.map((state) => (
                                    <Option key={state} value={state}>
                                      {state}
                                    </Option>
                                  ))}
                                </Select>
                                {errors?.state?.message && (
                                  <div className="text-danger">
                                    {errors?.state?.message + ""}
                                  </div>
                                )}
                              </>
                            )}
                          />
                        </div>
                        <input
                          {...register("city", {
                            required: "City is required!",
                          })}
                          aria-invalid={!!errors?.city?.message}
                          className="form-control border"
                          placeholder="Enter City"
                        />
                        <button
                          className="mt-4 btn btn-admin-dark"
                          type="button"
                          onClick={applyLocationFilter}
                        >
                          Apply
                        </button>
                        <button
                          className="mt-4 btn btn-admin-dark-outlined mx-3"
                          type="button"
                          onClick={clearLocationFilter}
                        >
                          Clear
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* Features */}
                  <div className="left_side_search_boxed">
                    <div className="left_side_search_heading">
                      <h5>Features</h5>
                    </div>
                    <div className="tour_search_type">
                      <div className="custom-select">
                        {!featureList && !featureError ? (
                          <Skeleton className="mt-3" active paragraph={false} />
                        ) : (
                          <>
                            {" "}
                            <Controller
                              control={control}
                              name="features"
                              rules={{ required: "Feature is required!" }}
                              render={({ field: { onChange, value } }) => (
                                <>
                                  <Select
                                    mode="multiple"
                                    value={value}
                                    onChange={onChange}
                                    allowClear
                                    status={
                                      errors?.features?.message && "error"
                                    }
                                    size="large"
                                    className="form-control mb-3"
                                    placeholder="Select features"
                                  >
                                    {featureList?.map((feat: any) => (
                                      <Option key={feat.id} value={feat.id}>
                                        {feat.title}
                                      </Option>
                                    ))}
                                  </Select>
                                  {errors?.features?.message && (
                                    <div className="text-danger">
                                      {errors?.features?.message + ""}
                                    </div>
                                  )}
                                </>
                              )}
                            />
                            <button
                              className="btn btn-admin-dark"
                              type="button"
                              onClick={applyFeaturesFilter}
                            >
                              Apply
                            </button>
                            <button
                              className="btn btn-admin-dark-outlined mx-3"
                              type="button"
                              onClick={clearPriceFilter}
                            >
                              Clear
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hotels */}
              <div className="col-lg-9">
                <div className="row">
                  {hotelLoading ? (
                    <Skeleton active />
                  ) : (
                    hotels?.data?.map((hotel: any) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        key={hotel.id}
                      >
                        <div
                          className="theme_common_box_two cursor-pointer"
                          // onClick={() => Router.push(`/hotels/${hotel.uuid}`, {router.query})}
                          onClick={() =>
                            Router.push(
                              cleanUrlParams(`/hotels/${hotel.uuid}`, {
                                min_price: router.query.min_price,
                                max_price: router.query.max_price,
                                features: router.query.features,
                              })
                            )
                          }
                        >
                          <div className="theme_two_box_img">
                            <img
                              style={{ height: "200px", objectFit: "cover" }}
                              src={
                                hotel.cover_image
                                  ? imageFullPath(hotel.cover_image)
                                  : "/imageplaceholder.jpg"
                              }
                              // src={'/imageplaceholder.jpg'}
                              alt="img"
                            />
                            <p>
                              <i className="fas fa-map-marker-alt"></i>
                              {renderLocation(hotel.location)}
                            </p>
                          </div>
                          <div className="theme_two_box_content">
                            <h4>{hotel.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))
                  )}

                  <div className="pagination_area">
                    <Pagination
                      style={{
                        visibility:
                          hotels?.last_page > 1 ? "visible" : "hidden",
                      }}
                      onChange={(page) =>
                        router.push(
                          cleanUrlParams("/hotels", { ...router.query, page })
                        )
                      }
                      className="pagination"
                      current={hotels?.current_page}
                      pageSize={hotels?.per_page || 1}
                      total={hotels?.total}
                    />
                  </div>

                  {/* <div className="col-lg-12">
                    <div className="pagination_area">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </ClientLayout>
  );
};

export default HotelListing;
