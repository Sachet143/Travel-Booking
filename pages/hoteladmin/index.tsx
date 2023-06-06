import HoteladminLayout from "@/components/layout/hoteladmin";
import axiosServer from "@/services/axios/serverfetch";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import { appDecrypt } from "@/services/helper";
import { Skeleton, Statistic } from "antd";
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

export const options = {
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

function HoteladminIndex() {
  const { data: dashboard } = useSWR("/hotel/dashboard");

  const data = {
    datasets: [
      {
        label: "Room Bookings Count",
        backgroundColor: "#8b3eea",
        data: dashboard?.data?.room_bookings_count
          ?.map((room: any) => room.room_bookings_count)
          .slice(0, 10),
      },
    ],
    labels: dashboard?.data?.room_bookings_count
      ?.map((room: any) => room.title)
      .slice(0, 10),
  };

  return (
    <HoteladminLayout title="Dashboard">
      <>
        {!data ? (
          <Skeleton active />
        ) : (
          <>
            {/* Card */}
            <div className="d-flex gap-1">
              <div
                className="d-flex col-sm-6 card p-4"
                style={{
                  border: "1px solid #8b3eea",
                }}
              >
                <Statistic
                  title="Total Booking Count"
                  value={dashboard?.data?.total_bookings_count}
                />
              </div>
              <div
                className="d-flex col-sm-6 card p-4"
                style={{
                  border: "1px solid #8b3eea",
                }}
              >
                <Statistic
                  title="Total Revenue"
                  value={dashboard?.data?.total_revenue}
                />
              </div>
            </div>
            {/* Charts */}
            <Bar className="mt-4" height={60} options={options} data={data} />
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
