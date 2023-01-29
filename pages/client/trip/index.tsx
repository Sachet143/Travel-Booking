import React, { useState } from "react";
import BusTable from "@/components/client/bus/BusTable";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { Empty, Modal, Select, Skeleton, Slider } from "antd";
import { Controller, useForm } from "react-hook-form";
import useSWR from "swr";
import axiosClient from "@/services/axios/clientfetch";
import { useRouter } from "next/router";
import { cleanUrlParams } from "@/services/helper";
import ConfirmationModal from "@/components/client/bus/ConfirmationModal";
const { Option } = Select;
const customFetcher = (url: string) => axiosClient(url).then((res: any) => res);
const Trip = () => {
  const { data: hotelFeatureList, error: featureError } = useSWR(
    `/features`,
    customFetcher
  );

  const [tripInfo, setTripInfo] = useState(null);
  const [reserveSeats, setReserveSeats] = useState([]);

  const router = useRouter();

  const { data: tripsData, error } = useSWR(
    router.query ? cleanUrlParams(`/trips`, router.query) : null
  );

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

  return (
    <ClientLayout>
      <div className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="left_side_search_area">
                {/* filter by price */}
                <div className="left_side_search_boxed">
                  {/*Hotel Features */}
                  <div className="left_side_search_heading">
                    <h5>Travel Type </h5>
                  </div>
                  <div className="tour_search_type">
                    <div className="custom-select">
                      {!hotelFeatureList && !featureError ? (
                        <Skeleton className="mt-3" active paragraph={false} />
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
                                    errors?.hotelFeatures?.message && "error"
                                  }
                                  size="large"
                                  className="form-control mb-3"
                                  placeholder="Select Travel Type"
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

                  <div className="left_side_search_heading">
                    <h5>Bus Type</h5>
                  </div>
                  <div className="tour_search_type">
                    <div className="custom-select">
                      {!hotelFeatureList && !featureError ? (
                        <Skeleton className="mt-3" active paragraph={false} />
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
                                    errors?.hotelFeatures?.message && "error"
                                  }
                                  size="large"
                                  className="form-control mb-3"
                                  placeholder="Select Bus Type"
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

                  {/* filter by location */}
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
            </div>
            <div className="col-md-9">
              {" "}
              <div>
                <div className="room_select_area">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="room_booking_area">
                      {tripsData?.data?.data?.length <= 0 ? (
                        <Empty
                          className="mt-4"
                          description="No Bus found ! ☹️"
                        />
                      ) : (
                        <>
                          {tripsData?.data?.data?.map(
                            (item: any, index: any) => {
                              return (
                                <BusTable
                                  setTripInfo={setTripInfo}
                                  key={index}
                                  trip={item}
                                  setReserveSeats={setReserveSeats}
                                />
                              );
                            }
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ConfirmationModal
            reserveSeats={reserveSeats}
            tripInfo={tripInfo}
            setReserveSeats={setReserveSeats}
            setTripInfo={setTripInfo}
          />
        </div>
      </div>
    </ClientLayout>
  );
};

export default Trip;
