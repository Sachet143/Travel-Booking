import BookingTable from "@/components/client/profile/BookingTable";
import moment from "moment";
import React from "react";
import useSWR from "swr";

const Dashboard = () => {
  const { data } = useSWR("/user/booking");

  function cancleHandler() {}

  return (
    <>
      <div className="dashboard_main_top">
        <div className="row">
          <div className="col-lg-6">
            <div className="dashboard_top_boxed">
              <div className="dashboard_top_icon">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="dashboard_top_text">
                <h3>Total bookings</h3>
                <h1>231</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dashboard_top_boxed">
              <div className="dashboard_top_icon">
                <i className="fas fa-sync"></i>
              </div>
              <div className="dashboard_top_text">
                <h3>Pending bookings</h3>
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
