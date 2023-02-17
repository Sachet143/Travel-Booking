import moment from "moment";
import React from "react";
import useSWR from "swr";

const HotelProfile = () => {
  const { data } = useSWR("/user/booking");
  return (
    <>
      <div className="dashboard_common_table">
        <h3>My bookings</h3>
        <div className="table-responsive-lg table_common_area">
          <table className="table">
            <thead>
              <tr>
                <th>SL no.</th>
                <th>Receipt No.</th>
                <th>Number of People</th>
                <th>Total Amounting</th>
                <th>Booking Date</th>
                <th>Stay Date</th>
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

export default HotelProfile;
