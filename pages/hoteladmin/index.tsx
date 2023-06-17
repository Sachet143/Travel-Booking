import HotelDashboardCard from "@/components/hoteladmin/dashboard/Card";
import HoteladminLayout from "@/components/layout/hoteladmin";
import axiosClient from "@/services/axios/clientfetch";
import axiosServer from "@/services/axios/serverfetch";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import {
  appDecrypt,
  cleanUrlParams,
  responseErrorHandler,
} from "@/services/helper";
import { Divider, Popover, Skeleton, DatePicker } from "antd";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { deleteCookie, getCookie } from "cookies-next";
import moment from "moment";
import { NextPageContext } from "next";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import useSWR from "swr";
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
      text: "Room Booking Count",
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
      text: "Room Revenue Cost",
    },
  },
};

function HoteladminIndex() {
  const [filterResponse, setFilterResponse] = useState<any>({
    TotalRevenue: null,
    RoomRevenue: null,
    RoomBookingCount: null,
    TotalBookingCount: null,
  });
  const [filter, setFilter] = useState<any>({
    name: "",
    start_date: null,
    end_date: null,
  });

  const { data: dashboard } = useSWR("/hotel/dashboard");

  async function fetchFilter(name: string) {
    filter.name
      ? await axiosClient(cleanUrlParams("/hotel/reports", filter))
          .then(({ data }: any) => {
            setFilterResponse({
              ...filterResponse,
              [name]:
                name === "RoomBookingCount" || name === "RoomRevenue"
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
    <HoteladminLayout title="Dashboard">
      <>
        {!dashboard ? (
          <Skeleton active />
        ) : (
          <>
            {/* Card */}
            <div className="d-flex gap-3">
              {/* total booking count */}
              <HotelDashboardCard
                title="Total Booking Count"
                data={
                  filterResponse.TotalBookingCount !== null
                    ? filterResponse.TotalBookingCount
                    : dashboard?.data?.total_bookings_count
                }
                icon={<i className="fas fa-hotel"></i>}
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
              <HotelDashboardCard
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
              <HotelDashboardCard
                title={"Revenue " + moment().format("(MMMM)")}
                data={"Rs. " + dashboard?.data?.current_month_revenue}
                icon={
                  <h1 style={{ fontWeight: 800 }}>{moment().format("MMM")}</h1>
                }
                color="l-bg-orange-dark"
              />
              {/* current_month_booking_count */}
              <HotelDashboardCard
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
                    trigger="click"
                    title="Choose a Date"
                    content={
                      <RangePicker
                        onChange={(val: any) =>
                          val
                            ? setFilter({
                                name: "RoomBookingCount",
                                start_date: moment(val[0].$d).format(
                                  "YYYY-MM-DD"
                                ),
                                end_date: moment(val[1].$d).format(
                                  "YYYY-MM-DD"
                                ),
                              })
                            : setFilterResponse({
                                ...filterResponse,
                                RoomBookingCount: null,
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
                        label: "Room Bookings Count",
                        backgroundColor: "#8b3eea",
                        data:
                          filterResponse.RoomBookingCount !== null
                            ? filterResponse.RoomBookingCount?.map(
                                (room: any) => room.room_bookings_count
                              )?.slice(0, 10)
                            : dashboard?.data?.room_bookings_count
                                ?.map((room: any) => room.room_bookings_count)
                                ?.slice(0, 10),
                      },
                    ],
                    labels:
                      filterResponse.RoomBookingCount !== null
                        ? filterResponse.RoomBookingCount?.map(
                            (room: any) => room.title
                          )?.slice(0, 10)
                        : dashboard?.data?.room_bookings_count
                            ?.map((room: any) => room.title)
                            ?.slice(0, 10),
                  }}
                />
              </div>
              <div className="col-sm-6">
                <div className="w-100" style={{ textAlign: "right" }}>
                  <Popover
                    trigger="click"
                    title="Choose a Date"
                    content={
                      <RangePicker
                        onChange={(val: any) =>
                          val
                            ? setFilter({
                                name: "RoomRevenue",
                                start_date: moment(val[0].$d).format(
                                  "YYYY-MM-DD"
                                ),
                                end_date: moment(val[1].$d).format(
                                  "YYYY-MM-DD"
                                ),
                              })
                            : setFilterResponse({
                                ...filterResponse,
                                RoomRevenue: null,
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
                        label: "Room Revenue",
                        backgroundColor: "#3bad3d",
                        data:
                          filterResponse.RoomRevenue !== null
                            ? filterResponse.RoomRevenue?.map(
                                (room: any) => room.room_revenue
                              )?.slice(0, 10)
                            : dashboard?.data?.room_revenue
                                ?.map((room: any) => room.room_revenue)
                                ?.slice(0, 10),
                      },
                    ],
                    labels:
                      filterResponse.RoomRevenue !== null
                        ? filterResponse.RoomRevenue?.map(
                            (room: any) => room.title
                          )?.slice(0, 10)
                        : dashboard?.data?.room_revenue
                            ?.map((room: any) => room.title)
                            ?.slice(0, 10),
                  }}
                />
              </div>
            </div>
          </>
        )}
      </>
    </HoteladminLayout>
  );
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { req, res } = ctx;
  const token = appDecrypt(getCookie(TOKEN_KEY, ctx) + "");

  const { data: hotelUser } = await axiosServer(token)
    .get("/hotel/user")
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

  if (!hotelUser.hotel_id) {
    return {
      redirect: {
        destination: "/hoteladmin/hotel/create",
      },
    };
  }

  return {
    props: {},
  };
};

export default HoteladminIndex;
