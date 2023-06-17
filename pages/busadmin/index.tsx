import BusDashboardCard from "@/components/busadmin/dashboard/Card";
import BusadminLayout from "@/components/layout/busadmin";
import axiosClient from "@/services/axios/clientfetch";
import axiosServer from "@/services/axios/serverfetch";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import {
  appDecrypt,
  cleanUrlParams,
  responseErrorHandler,
} from "@/services/helper";
import { DatePicker, Divider, Popover, Skeleton } from "antd";
import { deleteCookie, getCookie } from "cookies-next";
import moment from "moment";
import { NextPageContext } from "next";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
const { RangePicker } = DatePicker;
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options1 = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total Seat Booking Count",
    },
  },
};
const options2 = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total Trip Count",
    },
  },
};

function BusadminIndex() {
  const [filterResponse, setFilterResponse] = useState<any>({
    TotalBookingCount: null,
    TotalRevenue: null,
    TotalRouteSeatBookingCount: null,
    TotalRouteTripCount: null,
  });
  const [filter, setFilter] = useState<any>({
    name: "",
    start_date: null,
    end_date: null,
  });

  const { data: dashboard } = useSWR("/bus/dashboard");

  async function fetchFilter(name: string) {
    filter.name
      ? await axiosClient(cleanUrlParams("/bus/reports", filter))
          .then(({ data }: any) => {
            setFilterResponse({
              ...filterResponse,
              [name]:
                name === "TotalRouteSeatBookingCount" ||
                name === "TotalRouteTripCount"
                  ? data
                  : Object.values(data)[0],
            });
          })
          .catch(responseErrorHandler)
      : null;
  }

  useEffect(() => {
    fetchFilter(filter.name);
  }, [filter]);

  return (
    <BusadminLayout title="Dashboard">
      <>
        {!dashboard ? (
          <Skeleton active />
        ) : (
          <>
            {/* Card */}
            <div className="d-flex gap-3">
              {/* total booking count */}
              <BusDashboardCard
                title="Total Booking Count"
                data={
                  filterResponse.TotalBookingCount !== null
                    ? filterResponse.TotalBookingCount
                    : dashboard?.data?.total_bookings_count
                }
                icon={<i className="fas fa-bus"></i>}
                color="l-bg-blue-dark"
                filterName="TotalBookingCount"
                onChangeDate={(name: string, val: Array<any> | null) =>
                  val
                    ? setFilter({
                        name,
                        start_date: moment(val[0].$d).format("YYYY-MM-DD"),
                        end_date: moment(val[1].$d).format("YYYY-MM-DD"),
                      })
                    : setFilterResponse({
                        ...filterResponse,
                        TotalBookingCount: null,
                      })
                }
              />
              {/* total revenue */}
              <BusDashboardCard
                title="Total Revenue"
                data={
                  filterResponse.TotalRevenue !== null
                    ? "Rs. " + filterResponse.TotalRevenue
                    : "Rs. " + dashboard?.data?.total_revenue
                }
                icon={<i className="fas fa-dollar-sign"></i>}
                color="l-bg-green-dark"
                filterName="TotalRevenue"
                onChangeDate={(name: string, val: Array<any> | null) =>
                  val
                    ? setFilter({
                        name,
                        start_date: moment(val[0].$d).format("YYYY-MM-DD"),
                        end_date: moment(val[1].$d).format("YYYY-MM-DD"),
                      })
                    : setFilterResponse({
                        ...filterResponse,
                        TotalRevenue: null,
                      })
                }
              />
              {/* current month revenue */}
              <BusDashboardCard
                title={"Revenue " + moment().format("(MMMM)")}
                data={"Rs. " + dashboard?.data?.current_month_revenue}
                icon={
                  <h1 style={{ fontWeight: 800 }}>{moment().format("MMM")}</h1>
                }
                color="l-bg-orange-dark"
              />
              {/* current_month_booking_count */}
              <BusDashboardCard
                title={"Booking Count " + moment().format("(MMMM)")}
                data={dashboard?.data?.current_month_booking_count}
                color="l-bg-cherry"
              />
            </div>
            <Divider className="mt-5" />
            {/* Charts */}
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <div className="w-100" style={{ textAlign: "right" }}>
                  <Popover
                    onOpenChange={(val) =>
                      !val &&
                      setFilterResponse({
                        ...filterResponse,
                        TotalRouteSeatBookingCount: null,
                      })
                    }
                    trigger="click"
                    title="Choose a Date"
                    content={
                      <RangePicker
                        onChange={(val: any) =>
                          val
                            ? setFilter({
                                name: "TotalRouteSeatBookingCount",
                                start_date: moment(val[0].$d).format(
                                  "YYYY-MM-DD"
                                ),
                                end_date: moment(val[1].$d).format(
                                  "YYYY-MM-DD"
                                ),
                              })
                            : setFilterResponse({
                                ...filterResponse,
                                TotalRouteSeatBookingCount: null,
                              })
                        }
                      />
                    }
                  >
                    <i
                      className="fa fa-ellipsis-v cursor-pointer"
                      style={{ zIndex: 100 }}
                    />
                  </Popover>
                </div>
                <Bar
                  height={170}
                  options={options1}
                  data={{
                    datasets: [
                      {
                        label: "Seat Booking Count",
                        backgroundColor: "#8b3eea",
                        data:
                          filterResponse.TotalRouteSeatBookingCount !== null
                            ? filterResponse.TotalRouteSeatBookingCount?.map(
                                (trip: any) =>
                                  trip.total_route_seat_booking_count
                              )?.slice(0, 10)
                            : dashboard?.data?.total_route_seat_booking_count
                                ?.map(
                                  (trip: any) =>
                                    trip.total_route_seat_booking_count
                                )
                                ?.slice(0, 10),
                      },
                    ],
                    labels:
                      filterResponse.TotalRouteSeatBookingCount !== null
                        ? filterResponse.TotalRouteSeatBookingCount?.map(
                            (trip: any) =>
                              trip.start_destination +
                              " - " +
                              trip.final_destination
                          )?.slice(0, 10)
                        : dashboard?.data?.total_route_seat_booking_count
                            ?.map(
                              (trip: any) =>
                                trip.start_destination +
                                " - " +
                                trip.final_destination
                            )
                            ?.slice(0, 10),
                  }}
                />
              </div>
              <div className="col-sm-6">
                <div className="w-100" style={{ textAlign: "right" }}>
                  <Popover
                    onOpenChange={(val) =>
                      !val &&
                      setFilterResponse({
                        ...filterResponse,
                        TotalRouteTripCount: null,
                      })
                    }
                    trigger="click"
                    title="Choose a Date"
                    content={
                      <RangePicker
                        onChange={(val: any) =>
                          val
                            ? setFilter({
                                name: "TotalRouteTripCount",
                                start_date: moment(val[0].$d).format(
                                  "YYYY-MM-DD"
                                ),
                                end_date: moment(val[1].$d).format(
                                  "YYYY-MM-DD"
                                ),
                              })
                            : setFilterResponse({
                                ...filterResponse,
                                TotalRouteTripCount: null,
                              })
                        }
                      />
                    }
                  >
                    <i
                      className="fa fa-ellipsis-v cursor-pointer"
                      style={{ zIndex: 100 }}
                    />
                  </Popover>
                </div>
                <Bar
                  height={170}
                  options={options2}
                  data={{
                    datasets: [
                      {
                        label: "Seat Revenue Cost",
                        backgroundColor: "#3bad3d",
                        data:
                          filterResponse.TotalRouteTripCount !== null
                            ? filterResponse.TotalRouteTripCount?.map(
                                (trip: any) => trip.total_route_trip_count
                              )?.slice(0, 10)
                            : dashboard?.data?.total_route_trip_count
                                ?.map(
                                  (trip: any) => trip.total_route_trip_count
                                )
                                ?.slice(0, 10),
                      },
                    ],
                    labels:
                      filterResponse.TotalRouteTripCount !== null
                        ? filterResponse.TotalRouteTripCount?.map(
                            (trip: any) =>
                              trip.start_destination +
                              " - " +
                              trip.final_destination
                          )?.slice(0, 10)
                        : dashboard?.data?.total_route_trip_count
                            ?.map(
                              (trip: any) =>
                                trip.start_destination +
                                " - " +
                                trip.final_destination
                            )
                            ?.slice(0, 10),
                  }}
                />
              </div>
            </div>
          </>
        )}
      </>
    </BusadminLayout>
  );
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { req, res } = ctx;
  const token = appDecrypt(getCookie(TOKEN_KEY, ctx) + "");

  const { data: busUser } = await axiosServer(token)
    .get("/bus-operator/user")
    .catch((err: any) => {
      console.log({ err });

      deleteCookie(USER_TYPE_KEY, { req, res });
      deleteCookie(TOKEN_KEY, { req, res });

      return {
        redirect: {
          destination: "/client",
        },
      };
    });

  if (!busUser.bus_operator_id) {
    return {
      redirect: {
        destination: "/busadmin/bus/create",
      },
    };
  }

  return {
    props: {},
  };
};

export default BusadminIndex;
