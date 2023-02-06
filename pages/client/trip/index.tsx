import BusTable from "@/components/client/bus/BusTable";
import ConfirmationModal from "@/components/client/bus/ConfirmationModal";
import ClientLayout from "@/components/layout/client/ClientLayout";
import { cleanUrlParams } from "@/services/helper";
import { Empty, Input, Segmented, Select } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useSWR from "swr";
const { Option } = Select;

const Trip = () => {
  const [tripInfo, setTripInfo] = useState(null);
  const [bookedSeat, setBookedSeat] = useState([]);

  const router = useRouter();

  const { data: tripsData } = useSWR(
    router.query ? cleanUrlParams(`/trips`, router.query) : null
  );
  const [price, setPrice] = useState();

  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
    watch,
  } = useForm<any>({
    defaultValues: {
      start_destination: "",
      final_destination: "",
      shift: "",
    },
  });

  const searchBus = (data: any) => {
    router.push(cleanUrlParams("/trip", { ...router.query, ...data }));
  };

  useEffect(() => {
    setValue("start_destination", router.query.start_destination);
    setValue("final_destination", router.query.final_destination);
    setValue("shift", router.query.shift);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  function get7DaysDates() {
    var dates = [];
    var currentDate = moment();

    for (var i = 0; i < 7; i++) {
      if (i == 0) {
        dates.push({
          label: "Today",
          value: moment(currentDate).add(i, "days").format("YYYY-MM-DD"),
        });
      } else if (i == 1) {
        dates.push({
          label: "Tomorrow",
          value: moment(currentDate).add(i, "days").format("YYYY-MM-DD"),
        });
      } else {
        dates.push({
          label: moment(currentDate).add(i, "days").format("ll"),
          value: moment(currentDate).add(i, "days").format("YYYY-MM-DD"),
        });
      }
    }

    return dates;
  }

  return (
    <ClientLayout>
      <div className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="left_side_search_area">
                {/* filter by price */}
                <form onSubmit={handleSubmit(searchBus)}>
                  <div className="left_side_search_boxed overflow-hidden">
                    {/*Hotel Features */}
                    <div className="left_side_search_heading">
                      <h5>Start Destination</h5>
                    </div>
                    <div className="tour_search_type mb-3">
                      <div className="custom-select">
                        <Controller
                          control={control}
                          name="start_destination"
                          render={({ field: { onChange, value } }) => {
                            return (
                              <>
                                <Input
                                  value={value}
                                  onChange={onChange}
                                  placeholder="Basic usage"
                                  className="mb-0 form-control"
                                />
                                {errors?.start_destination?.message && (
                                  <div className="text-danger">
                                    {errors?.start_destination?.message + ""}
                                  </div>
                                )}
                              </>
                            );
                          }}
                        />
                      </div>
                    </div>

                    <div className="left_side_search_heading">
                      <h5>Final Destination</h5>
                    </div>
                    <div className="tour_search_type mb-3">
                      <div className="custom-select">
                        <Controller
                          control={control}
                          name="final_destination"
                          render={({ field: { onChange, value } }) => {
                            return (
                              <>
                                <Input
                                  value={value}
                                  onChange={onChange}
                                  placeholder="Basic usage"
                                  className="mb-0 form-control"
                                />
                                {errors?.final_destination?.message && (
                                  <div className="text-danger">
                                    {errors?.final_destination?.message + ""}
                                  </div>
                                )}
                              </>
                            );
                          }}
                        />
                      </div>
                    </div>
                    {/* Room Features */}
                    <div className="left_side_search_heading">
                      <h5>Shift</h5>
                    </div>
                    <div className="tour_search_type">
                      <div className="shift custom-select">
                        <Controller
                          control={control}
                          name="shift"
                          rules={{ required: "Shift is required!" }}
                          render={({ field: { onChange, value } }) => (
                            <>
                              <Select
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
                                <Option key={1} value={"day"}>
                                  Day
                                </Option>
                                <Option key={2} value={"night"}>
                                  Night
                                </Option>
                                <Option key={3} value={"both"}>
                                  Both
                                </Option>
                              </Select>
                              {errors?.features?.message && (
                                <div className="text-danger">
                                  {errors?.shift?.message + ""}
                                </div>
                              )}
                            </>
                          )}
                        />
                      </div>
                    </div>
                    {/* filter by location */}
                    <button
                      className="btn btn-admin-dark float-right"
                      type="submit"
                    >
                      Apply
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-9">
              {" "}
              <Segmented
                block
                options={get7DaysDates()}
                value={
                  router.query.date
                    ? router.query.date.toString()
                    : moment().format("YYYY-MM-DD").toString()
                }
                onChange={(value) =>
                  router.push(
                    cleanUrlParams("/trip", {
                      ...router.query,
                      date: value,
                    })
                  )
                }
              />
              <div>
                <div className="room_select_area">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="room_booking_area">
                      {tripsData?.data?.length <= 0 ? (
                        <Empty
                          className="mt-4"
                          description="No Bus found ! ☹️"
                        />
                      ) : (
                        <>
                          {tripsData?.data?.map((item: any, index: any) => {
                            return (
                              <BusTable
                                price={price}
                                setPrice={setPrice}
                                setTripInfo={setTripInfo}
                                key={index}
                                trip={item}
                                setBookedSeat={setBookedSeat}
                                bookedSeat={bookedSeat}
                              />
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Trip;
