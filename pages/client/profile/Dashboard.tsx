import BookingTable from "@/components/client/profile/BookingTable";
import moment from "moment";
import React from "react";
import useSWR from "swr";
import Medal from "../../../public/client/assets/img/medal.png";
import Check from "../../../public/client/assets/img/check.png";
import Upcoming from "../../../public/client/assets/img/upcoming.png";

const Dashboard = () => {
  const { data } = useSWR("/user/booking");

  function cancleHandler() {}

  return (
    <>
      <div className="dashboard_main_top">
        <div className="custom_detail_card">
          <div>
            <div className="dashboard_top_boxed">
              <div className="dashboard_top_icon">
                <img src={Medal.src} />
              </div>
              <div className="dashboard_top_text">
                <h3>Reward points</h3>
                <h1>70.62</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="dashboard_top_boxed">
              <div className="dashboard_top_icon">
                <img src={Check.src} />
              </div>
              <div className="dashboard_top_text text-right">
                <h3>Bookings Completed</h3>
                <h1>10</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="dashboard_top_boxed">
              <div className="dashboard_top_icon">
                <img src={Upcoming.src} />
              </div>
              <div className="dashboard_top_text">
                <h3>Upcoming bookings</h3>
                <h1>23</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_common_table">
        <h3 className="mb-4">My bookings</h3>
        <BookingTable />
      </div>
    </>
  );
};

export default Dashboard;
