import BusadminLayout from "@/components/layout/busadmin";
import { Skeleton, Table } from "antd";
import { CollapseType } from "antd/es/layout/Sider";
import React, { useState } from "react";
import useSWR from "swr";
import type { ColumnsType } from "antd/es/table";
import InsideTable from "./InsideTable";

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
//   description: string;
// }

const Current = () => {
  const [page, setPage] = useState(1);
  const { data, error, mutate } = useSWR("bus/trip-bookings");

  const columns: ColumnsType<any> = [
    {
      title: "Start Destination",
      dataIndex: "start_destination",
      key: "start_destination",
    },
    {
      title: "Final Destination",
      dataIndex: "final_destination",
      key: "final_destination",
    },
    {
      title: "Departure Date",
      dataIndex: "departure_date",
      key: "departure_date",
    },
    {
      title: "Bus Number",
      dataIndex: "bus",
      key: "bus",
      render: (value, record, index) => {
        return <>{value.plate_number}</>;
      },
    },
    {
      title: "Available Seats",
      dataIndex: "available_seats",
      key: "available_seats",
      render: (value, record, index) => {
        return <>{!!value}</>;
      },
    },
  ];

  return (
    <BusadminLayout title="Current Bookings">
      {!data && !error ? (
        <Skeleton active />
      ) : (
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => {
              return <InsideTable bookingDetail={record.bus_bookings} />;
            },
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={data?.data.data}
        />
      )}
    </BusadminLayout>
  );
};

export default Current;
