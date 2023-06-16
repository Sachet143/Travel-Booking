import { Table, TableColumnsType } from "antd";
import React from "react";

interface ExpandedDataType {
  name: React.Key;
  price: string;
}

function ExpandedTable({ rooms }: any) {
  const columns: TableColumnsType<ExpandedDataType> = [
    { title: "Room", dataIndex: "name", key: "room" },
    { title: "Price", dataIndex: "price", key: "price" },
  ];

  return <Table columns={columns} dataSource={rooms} pagination={false} />;
}

export default ExpandedTable;
