import moment from "moment";
import React from "react";
import useSWR from "swr";

const Dashboard = () => {
  const { data } = useSWR("/user/booking");

  function cancleHandler() {

  }

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
        <h3>My bookings</h3>
        <div className="table-responsive-lg table_common_area">
          <table className="table">
            <thead>
              <tr>
                <th>SL no.</th>
                <th>Receipt No.</th>
                <th>Number of People</th>
                <th>Total Amount</th>
                <th>Booking Date</th>
                <th>Stay Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item: any, index: any) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item?.receipt_no}</td>
                    <td>{item?.hotel?.name}</td>
                    <td>Rs.{item.total}.00</td>
                    <td>{moment(item.date).format("MMM Do YYYY")}</td>
                    <td>
                      {moment(item.from).format("L")} -&nbsp;
                      {moment(item.to).format("L")}
                    </td>
                    <td><button className="btn btn-sm text-danger" onClick={cancleHandler}>Cancel</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
