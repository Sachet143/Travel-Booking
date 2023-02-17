import { Table } from "antd";
import moment from "moment";
import React from "react";
import useSWR from "swr";

const BusProfile = () => {
  const { data } = useSWR("user/dashboard/bus-bookings");

  const columns = [
    {
      title: "SN.no",
      dataIndex: "sn",
      render: (index: any) => {
        return <>{1}</>;
      },
    },
    {
      title: "Recipt No.",
      dataIndex: "transaction",
      render: (value: any) => {
        return <>{value?.invoice_no}</>;
      },
    },
    {
      title: "Number of Seats",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Board location",
      dataIndex: "board_location",
      key: "board_location",
    },
    {
      title: "Drop location",
      dataIndex: "drop_location",
      key: "drop_location",
    },
    {
      title: "Total Cost",
      dataIndex: "total_amount",
      key: "total_amount",
    },
  ];

  return (
    <>
      <div className="dashboard_common_table">
        <h3>My bookings</h3>
        <div className="table-responsive-lg table_common_area">
          <Table dataSource={data?.data?.data} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default BusProfile;
