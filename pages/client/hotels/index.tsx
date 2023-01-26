import HotelListDetail from "@/components/client/hotels/Hotel";
import ClientLayout from "@/components/layout/client/ClientLayout";
import axiosClient from "@/services/axios/clientfetch";
import { capitalizeFirstLetter, cleanUrlParams } from "@/services/helper";
import states from "@/states.json";
import { Divider, Pagination, Select, Skeleton, Slider, Tag } from "antd";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
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
    getValues,
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<any>({
    defaultValues: {
      search: null,
      price: [500, 50000],
      country: "Nepal",
      state: null,
      city: null,
      hotelFeatures: [],
      categories: [],
      roomFeatures: [],
      hotelActivities: [],
      order: null,
    },
  });

  const { dirtyFields } = useFormState({
    control,
  });

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
    const hasPrice = router.query.min_price && router.query.max_price;
    const order =
      router.query.orderBy && router.query.order
        ? router.query.orderBy + "-" + router.query.order
        : null;

    reset({
      ...router.query,
      order,
      price: hasPrice
        ? [Number(router.query.min_price), Number(router.query.max_price)]
        : [500, 500000],
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
    // PRICE to MIN and MAX
    const { price, order, ...restFilters } = value;
    const hasPriceApplied = dirtyFields.price;
    const priceFilter = hasPriceApplied
      ? { min_price: value.price[0], max_price: value.price[1] }
      : {};

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        ...restFilters,
        ...priceFilter,
        page: 1,
      })
    );
  };

  function handleOrder() {
    const order = getValues("order");
    // ORDER
    const orderBy = order ? order.split("-")[0] : null;
    const orderPosition = order ? order.split("-")[1] : null;

    router.push(
      cleanUrlParams("/hotels", {
        ...router.query,
        orderBy,
        order: orderPosition,
        page: 1,
      })
    );
  }

  return (
    <ClientLayout>
      <>
        <section id="explore_area" className="section_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section_heading_center"></div>
              </div>
            </div>
            <div className="row">
              {/* filter section */}
              <div className="col-lg-3">
                {/* applied filter */}
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
                {/* filter inputs */}
                <form onSubmit={handleSubmit(customFilter)}>
                  <div className="left_side_search_area">
                    <input
                      {...register("search")}
                      className="form-control border mb-4"
                      placeholder="Search Hotel by Name"
                      onChange={(e: any) => debounceName(e.target.value)}
                    />
                  </div>
                  <div className="left_side_search_area">
                    {/* filter by price */}
                    <div className="left_side_search_boxed">
                      <div>
                        {/* minimum price */}
                        <label>Price</label>
                        <Controller
                          name="price"
                          control={control}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <>
                                <div className="row">
                                  <div className="col-md-12">
                                    <Slider
                                      marks={{
                                        500: 500,
                                        10000: "10K",
                                        20000: "20K",
                                        35000: "35K",
                                        50000: "50K",
                                      }}
                                      range
                                      step={100}
                                      max={50000}
                                      onChange={onChange}
                                      value={value}
                                    />
                                  </div>
                                </div>
                                <>
                                  {errors?.min_price && (
                                    <p>{errors.min_price.message + ""}</p>
                                  )}
                                </>
                              </>
                            );
                          }}
                        />
                      </div>
                      <Divider className="my-2" />
                      {/*Hotel Features */}
                      <div className="left_side_search_heading">
                        <label>Hotel Features</label>
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
                                      placeholder="Select hotel features"
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
                      <Divider className="my-2" />
                      {/* Room Features */}
                      <div className="left_side_search_heading">
                        <label>Room Features</label>
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
                                      placeholder="Select room features"
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
                      <Divider className="my-2" />
                      {/* Hotel Activities */}
                      <div className="left_side_search_heading">
                        <label>Hotel Activities</label>
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
                      <Divider className="my-2" />
                      {/* property type */}
                      <div className="left_side_search_heading">
                        <label>Property Type</label>
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
                                      placeholder="Select property"
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
                      <Divider className="my-2" />
                      {/* filter by location */}
                      <div className="mb-5">
                        <div className="left_side_search_heading">
                          <label>Filter by Location</label>
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
                {hotelLoading ? (
                  <div className="w-25 mx-auto">
                    <Skeleton active paragraph={false} />
                  </div>
                ) : (
                  <h2 className="number_heading">
                    {router.query.state
                      ? `${capitalizeFirstLetter(router.query.state)}- `
                      : null}
                    {hotels?.total} Properties found
                  </h2>
                )}

                <div className="border-radius-20">
                  <Controller
                    name="order"
                    control={control}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <Select
                          allowClear
                          placeholder="Sort Filter"
                          className="rounded mb-3"
                          size="large"
                          style={{
                            width: "220px",
                            marginLeft: "-10px",
                          }}
                          value={value}
                          onChange={(e) => {
                            onChange(e);
                            handleOrder();
                          }}
                        >
                          <Option value="rating_count-DESC">
                            Top Reviewed
                          </Option>
                          <Option value="price-ASC">
                            Price (lowest to highest)
                          </Option>
                          <Option value="price-DESC">
                            Price (highest to lowest)
                          </Option>
                          <Option value="stars-ASC">
                            Stars (lowest to highest)
                          </Option>
                          <Option value="stars-DESC">
                            Stars (highest to lowest)
                          </Option>
                        </Select>
                      );
                    }}
                  />
                </div>

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
