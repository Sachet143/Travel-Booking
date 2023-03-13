import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";
import React from "react";

const InsideTable = ({ bookingDetail }: any) => {
  const columns: ColumnsType<any> = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Payment Status",
      dataIndex: "payment_status",
      key: "payment_status",
      render: (_, record) => {
        console.log(record);
        return <p>{record.payment_status + "  Rs. " + record.total_amount}</p>;
      },
    },
    { title: "Booked Seats", dataIndex: "booked_seats", key: "booked_seats" },
    {
      title: "Board",
      dataIndex: "",
      key: "x",
      render: (value) => (
        <p>
          {value.board_location} (
          {moment(value.board_time, "HH:mm:ss").format("hh:mm A")})
        </p>
      ),
    },
    {
      title: "Drop",
      dataIndex: "",
      key: "x",
      render: (value) => (
        <p>
          {value.drop_location} (
          {moment(value.drop_time, "HH:mm:ss").format("hh:mm A")})
        </p>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={bookingDetail} pagination={false} />
    </div>
  );
};

export default InsideTable;
