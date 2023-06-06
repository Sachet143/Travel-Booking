import HoteladminLayout from "@/components/layout/hoteladmin";
import axiosServer from "@/services/axios/serverfetch";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import { appDecrypt } from "@/services/helper";
import { Divider, Skeleton, Statistic } from "antd";
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
import { Bar } from "react-chartjs-2";
import useSWR from "swr";

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
  const { data: dashboard } = useSWR("/hotel/dashboard");

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
              <div className="col-xl-3 col-lg-6">
                <div className="d-card l-bg-blue-dark">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-hotel"></i>
                    </div>
                    <div className="mb-4">
                      <h4 className="card-title mb-0 text-white">
                        Total Booking Count
                      </h4>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0 text-white">
                          {dashboard?.data?.total_bookings_count}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* total revenue */}
              <div className="col-xl-3 col-lg-6">
                <div className="d-card l-bg-green-dark">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className="mb-4">
                      <h4 className="card-title mb-0 text-white">
                        Total Revenue
                      </h4>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0 text-white">
                          Rs. {dashboard?.data?.total_revenue}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* current month revenue */}
              <div className="col-xl-3 col-lg-6">
                <div className="d-card l-bg-orange-dark">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <h1 style={{ fontWeight: 800 }}>
                        {moment().format("MMM")}
                      </h1>
                    </div>
                    <div className="mb-4">
                      <h4 className="card-title mb-0 text-white">
                        Current Month Revenue
                      </h4>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0 text-white">
                          Rs. {dashboard?.data?.current_month_revenue}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Divider className="mt-5" />
            {/* Charts */}
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <Bar
                  height={170}
                  options={options1}
                  data={{
                    datasets: [
                      {
                        label: "Room Bookings Count",
                        backgroundColor: "#8b3eea",
                        data: dashboard?.data?.room_bookings_count
                          ?.map((room: any) => room.room_bookings_count)
                          ?.slice(0, 10),
                      },
                    ],
                    labels: dashboard?.data?.room_bookings_count
                      ?.map((room: any) => room.title)
                      ?.slice(0, 10),
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Bar
                  height={170}
                  options={options2}
                  data={{
                    datasets: [
                      {
                        label: "Room Revenue",
                        backgroundColor: "#3bad3d",
                        data: dashboard?.data?.room_revenue
                          ?.map((room: any) => room.room_revenue)
                          ?.slice(0, 10),
                      },
                    ],
                    labels: dashboard?.data?.room_revenue
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
