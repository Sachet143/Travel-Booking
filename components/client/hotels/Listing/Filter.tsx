import axiosClient from "@/services/axios/clientfetch";
import { cleanUrlParams } from "@/services/helper";
import { Divider, Select, Skeleton, Slider, Tag } from "antd";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { Controller } from "react-hook-form";
import useSWR from "swr";
import states from "@/states.json";

const { Option } = Select;
const customFetcher = (url: string) => axiosClient(url).then((res: any) => res);

function HotelListingFilter({ clearFilter, onSubmit, formHooks }: any) {
  const router = useRouter();
  const {} = router.query;

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

  const {
    register,
    control,
    formState: { errors },
  } = formHooks;

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-lg-3">
      {/* applied filter */}
      {Object.keys(router.query).length > 0 && (
        <>
          <div className="h5">
            <h5>Applied Filter:</h5>
          </div>
          <div className="mb-3 left_side_search_heading">
            {Object.keys(router.query).map((keyName: any, index: any) => {
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
            })}
          </div>
        </>
      )}
      {/* filter inputs */}
      <form onSubmit={onSubmit}>
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
          <div className="left_side_search_boxed pt-0">
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
              {!hotelFeatureList && !featureError ? (
                <Skeleton className="mt-3" active paragraph={false} />
              ) : (
                <>
                  {" "}
                  <Controller
                    control={control}
                    name="hotelFeatures"
                    render={({ field: { onChange, value } }) => (
                      <>
                        <Select
                          mode="multiple"
                          value={value}
                          onChange={onChange}
                          allowClear
                          status={errors?.hotelFeatures?.message && "error"}
                          size="large"
                          className="w-100 mb-3"
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
            <Divider className="my-2" />
            {/* Room Features */}
            <div className="left_side_search_heading">
              <label>Room Features</label>
            </div>
            <div className="tour_search_type">
              {!roomFeatureList && !roomFeatureError ? (
                <Skeleton className="mt-3" active paragraph={false} />
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
                          status={errors?.roomFeatures?.message && "error"}
                          size="large"
                          className="w-100 mb-3"
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
            <Divider className="my-2" />
            {/* Hotel Activities */}
            <div className="left_side_search_heading">
              <label>Hotel Activities</label>
            </div>
            <div className="tour_search_type">
              {!hotelActivitiesList && !hotelActivitiesError ? (
                <Skeleton className="mt-3" active paragraph={false} />
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
                          status={errors?.hotelActivities?.message && "error"}
                          size="large"
                          className="w-100 mb-3"
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
            <Divider className="my-2" />
            {/* property type */}
            <div className="left_side_search_heading">
              <label>Property Type</label>
            </div>
            <div className="tour_search_type">
              {!catList && !catError ? (
                <Skeleton className="mt-3" active paragraph={false} />
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
                          status={errors?.categories?.message && "error"}
                          size="large"
                          className="w-100 mb-3"
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
                        className="w-100 my-4"
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
            <button className="btn btn-admin-dark-outlined mx-3" type="button">
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HotelListingFilter;
