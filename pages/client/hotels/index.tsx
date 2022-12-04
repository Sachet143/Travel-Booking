/* eslint-disable @next/next/no-img-element */
import HotelListDetail from "@/components/client/hotels/Hotel";
import ClientLayout from "@/components/layout/client/ClientLayout";
import axiosClient from "@/services/axios/clientfetch";
import {
  cleanUrlParams,
  imageFullPath,
  renderLocation
} from "@/services/helper";
import states from "@/states.json";
import {
  Col,
  InputNumber,
  Pagination,
  Row,
  Select,
  Skeleton,
  Slider,
  Tag
} from "antd";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import useSWR from "swr";
const { Option } = Select;
const customFetcher = (url: string) => axiosClient(url).then((res: any) => res);

const HotelListing = () => {
  const router = useRouter();

  const { data: hotelFeatureList, error: featureError } = useSWR(
    `/features`,
    customFetcher
  );

  const { data: hotelActivitiesList, error: hotelActivitiesError } = useSWR(
    `/activities`,
    customFetcher
  );

  const { data: roomFeatureList, error: roomFeatureError } = useSWR(
    `/room-features`,
    customFetcher
  );

  const { data: catList, error: catError } = useSWR(
    `/categories`,
    customFetcher
  );

  const { data: hotels, error } = useSWR(
    cleanUrlParams(`/hotels`, router.query)
  );
  const hotelLoading = !hotels && !error;

  const {
    register,
    control,
    formState: { errors, touchedFields, dirtyFields },
    getValues,
    reset,
    handleSubmit,
    watch,
  } = useForm<any>({
    defaultValues: {
      search: null,
      min_price: 500,
      max_price: 50000,
      country: "Nepal",
      state: null,
      city: null,
      hotelFeatures: [],
      categories: [],
      roomFeatures: [],
      hotelActivities: [],
    },
  });

  const applyPriceFilter = (e: any) => {
    e.preventDefault();

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        min_price: getValues("min_price"),
        max_price: getValues("max_price"),
        page: 1,
      })
    );
  };

  const applyLocationFilter = () => {
    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        country: getValues("country"),
        state: getValues("state"),
        city: getValues("city"),
        page: 1,
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

  const applyFeaturesFilter = (value: any) => {
    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        features: value.join(","),
        page: 1,
      })
    );
  };
  const clearFeaturesFilter = (e: any) => {
    e.preventDefault();

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        features: [],
      })
    );
  };

  const applyCategoriesFilter = () => {
    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        categories: getValues("categories").join(","),
        page: 1,
      })
    );
  };
  const clearCategoriesFilter = (e: any) => {
    e.preventDefault();

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        categories: [],
      })
    );
  };

  const debounceName = useMemo(() => {
    const searchHotel = (value: any) => {
      router.push(
        cleanUrlParams("/hotels", {
          ...router.query,
          search: value,
          page: 1,
        })
      );
    };
    return debounce(searchHotel, 1000);
  }, []);

  const clearFilter = (value: any) => {
    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        [value]: null,
      })
    );
  };

  useEffect(() => {
    reset({
      ...router.query,
      categories: router.query.categories
        ? router.query.categories.toString().split(",").map(Number)
        : [],
      hotelFeatures: router.query.hotelFeatures
        ? router.query.hotelFeatures.toString().split(",").map(Number)
        : [],
      roomFeatures: router.query.roomFeatures
        ? router.query.roomFeatures.toString().split(",").map(Number)
        : [],
      hotelActivities: router.query.hotelActivities
        ? router.query.hotelActivities.toString().split(",").map(Number)
        : [],
    });
  }, [router.query]);

  const customFilter = (value: any) => {
    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        ...value,
        page: 1,
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
                    <h2>{hotels?.total} Hotel found</h2>
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

                <form onSubmit={handleSubmit(customFilter)}>
                  <div className="left_side_search_area">
                    <input
                      {...register("search")}
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
                                  <Col span={4}>
                                    <InputNumber
                                      min={500}
                                      max={1500}
                                      style={{ margin: "0 16px" }}
                                      value={Number(value)}
                                      onChange={onChange}
                                    />
                                  </Col>
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
                      {/*Hotel Features */}
                      <div className="left_side_search_heading">
                        <h5>Hotel Features</h5>
                      </div>
                      <div className="tour_search_type">
                        <div className="custom-select">
                          {!hotelFeatureList && !featureError ? (
                            <Skeleton
                              className="mt-3"
                              active
                              paragraph={false}
                            />
                          ) : (
                            <>
                              {" "}
                              <Controller
                                control={control}
                                name="hotelFeatures"
                                // rules={{ required: "Feature is required!" }}
                                render={({ field: { onChange, value } }) => (
                                  <>
                                    <Select
                                      mode="multiple"
                                      value={value}
                                      onChange={onChange}
                                      allowClear
                                      status={
                                        errors?.hotelFeatures?.message &&
                                        "error"
                                      }
                                      size="large"
                                      className="form-control mb-3"
                                      placeholder="Select features"
                                    >
                                      {hotelFeatureList?.map((feat: any) => (
                                        <Option key={feat.id} value={feat.id}>
                                          {feat.title}
                                        </Option>
                                      ))}
                                    </Select>
                                    {errors?.features?.message && (
                                      <div className="text-danger">
                                        {errors?.hotelFeatures?.message + ""}
                                      </div>
                                    )}
                                  </>
                                )}
                              />
                            </>
                          )}
                        </div>
                      </div>
                      {/* Room Features */}
                      <div className="left_side_search_heading">
                        <h5>Room Features</h5>
                      </div>
                      <div className="tour_search_type">
                        <div className="custom-select">
                          {!roomFeatureList && !roomFeatureError ? (
                            <Skeleton
                              className="mt-3"
                              active
                              paragraph={false}
                            />
                          ) : (
                            <>
                              {" "}
                              <Controller
                                control={control}
                                name="roomFeatures"
                                // rules={{ required: "Feature is required!" }}
                                render={({ field: { onChange, value } }) => (
                                  <>
                                    <Select
                                      mode="multiple"
                                      value={value}
                                      onChange={onChange}
                                      allowClear
                                      status={
                                        errors?.roomFeatures?.message && "error"
                                      }
                                      size="large"
                                      className="form-control mb-3"
                                      placeholder="Select features"
                                    >
                                      {roomFeatureList?.map((feat: any) => (
                                        <Option key={feat.id} value={feat.id}>
                                          {feat.title}
                                        </Option>
                                      ))}
                                    </Select>
                                    {errors?.roomFeatures?.message && (
                                      <div className="text-danger">
                                        {errors?.roomFeatures?.message + ""}
                                      </div>
                                    )}
                                  </>
                                )}
                              />
                            </>
                          )}
                        </div>
                      </div>
                      {/* Room features */}
                      {/* Hotel Activities */}
                      <div className="left_side_search_heading">
                        <h5>Hotel Activities</h5>
                      </div>
                      <div className="tour_search_type">
                        <div className="custom-select">
                          {!hotelActivitiesList && !hotelActivitiesError ? (
                            <Skeleton
                              className="mt-3"
                              active
                              paragraph={false}
                            />
                          ) : (
                            <>
                              {" "}
                              <Controller
                                control={control}
                                name="hotelActivities"
                                // rules={{ required: "Feature is required!" }}
                                render={({ field: { onChange, value } }) => (
                                  <>
                                    <Select
                                      mode="multiple"
                                      value={value}
                                      onChange={onChange}
                                      allowClear
                                      status={
                                        errors?.hotelActivities?.message &&
                                        "error"
                                      }
                                      size="large"
                                      className="form-control mb-3"
                                      placeholder="Select features"
                                    >
                                      {hotelActivitiesList?.map((feat: any) => (
                                        <Option key={feat.id} value={feat.id}>
                                          {feat.title}
                                        </Option>
                                      ))}
                                    </Select>
                                    {errors?.hotelActivities?.message && (
                                      <div className="text-danger">
                                        {errors?.hotelActivities?.message + ""}
                                      </div>
                                    )}
                                  </>
                                )}
                              />
                            </>
                          )}
                        </div>
                      </div>
                      {/* Hotel Activities */}
                      {/* Categories */}
                      <div className="left_side_search_heading">
                        <h5>Categories</h5>
                      </div>
                      <div className="tour_search_type">
                        <div className="custom-select">
                          {!catList && !catError ? (
                            <Skeleton
                              className="mt-3"
                              active
                              paragraph={false}
                            />
                          ) : (
                            <>
                              {" "}
                              <Controller
                                control={control}
                                name="categories"
                                // rules={{
                                //   required: "Category is required!",
                                // }}
                                render={({ field: { onChange, value } }) => (
                                  <>
                                    <Select
                                      mode="multiple"
                                      value={value}
                                      onChange={onChange}
                                      allowClear
                                      status={
                                        errors?.categories?.message && "error"
                                      }
                                      size="large"
                                      className="form-control mb-3"
                                      placeholder="Select Categories"
                                    >
                                      {catList?.map((cat: any) => (
                                        <Option key={cat.id} value={cat.id}>
                                          {cat.title}
                                        </Option>
                                      ))}
                                    </Select>
                                    {errors?.categories?.message && (
                                      <div className="text-danger">
                                        {errors?.categories?.message + ""}
                                      </div>
                                    )}
                                  </>
                                )}
                              />
                            </>
                          )}
                        </div>
                      </div>
                      {/* filter by location */}
                      <div className="mb-3">
                        <div className="left_side_search_heading">
                          <h5>Filter by Location</h5>
                        </div>
                        <div className="filter_review">
                          <input
                            className="mt-2 form-control"
                            type="text"
                            disabled
                            {...register("country")}
                          />
                          <div className="custom-select">
                            <Controller
                              control={control}
                              name="state"
                              //   rules={{ required: "State is required!" }}
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
                            {...register(
                              "city"
                              // {required: "City is required!",}
                            )}
                            aria-invalid={!!errors?.city?.message}
                            className="form-control border"
                            placeholder="Enter City"
                          />
                        </div>
                      </div>

                      <button className="btn btn-admin-dark" type="submit">
                        Apply
                      </button>
                      <button
                        className="btn btn-admin-dark-outlined mx-3"
                        type="button"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* hotels */}
              <div className="col-lg-9">
                <div className="row">
                  {hotelLoading ? (
                    <Skeleton active />
                  ) : (
                    hotels?.data?.map((hotel: any) => (
                      <HotelListDetail key={hotel.id} hotel={hotel} />
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
