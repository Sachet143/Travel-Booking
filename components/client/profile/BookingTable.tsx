import { Skeleton, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
interface DataType {
  id: string;
  receipt_no: string;
  hotel: any;
  total: number;
  date: string;
  from: string;
  to: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "S.N.",
    dataIndex: "sn",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Hotel Name",
    dataIndex: "hotel",
    key: "hotel",
    render: (hotel) => {
      return (
        <Link href={`/hotels/${hotel.uuid}`} legacyBehavior>
          <span className="purp cursor-pointer">{hotel.name}</span>
        </Link>
      );
    },
  },
  {
    title: "Total Amount",
    dataIndex: "total",
    key: "total",
    render: (total) => "NPR " + total,
  },
  {
    title: "Booking Date",
    dataIndex: "date",
    key: "date",
    render: (date) => <td>{moment(date).format("MMM Do YYYY")}</td>,
  },
  {
    title: "Stay Date",
    dataIndex: "stayDate",
    key: "stayDate",
    render: (book) => (
      <>
        {" "}
        {moment(book.from).format("L")} -&nbsp;
        {moment(book.to).format("L")}
      </>
    ),
  },
  {
    title: "Status",
    dataIndex: "bookingStatus",
    key: "bookingStatus",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <span className="text-danger">Cancel</span>
      </Space>
    ),
  },
];

function BookingTable() {
  const [page, setPage] = useState(1);
  const { data } = useSWR(`/user/booking?page=${page}`);

  return (
    <>
      {!data ? (
        <Skeleton active />
      ) : (
        <Table
          pagination={{
            hideOnSinglePage: true,
            current: data?.current_page,
            pageSize: data?.per_page,
            total: data?.total,
            onChange: setPage,
          }}
          dataSource={data.data.map((book: any, i: any) => ({
            sn: i + 1,
            stayDate: book,
            ...book,
          }))}
          columns={columns}
        />
      )}
    </>
  );
}

export default BookingTable;
