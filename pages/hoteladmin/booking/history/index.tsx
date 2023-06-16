import HoteladminLayout from "@/components/layout/hoteladmin";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import {
  Pagination,
  Skeleton,
  Table,
  DatePicker,
  TableColumnsType,
  Badge,
  Space,
  Dropdown,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { cleanUrlParams } from "@/services/helper";
import moment from "moment";
import { DownOutlined } from "@ant-design/icons";
import ExpandedTable from "./ExpandedTable";

const { RangePicker } = DatePicker;
interface DataType {
  id: number;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Total Price",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Total People",
    dataIndex: "totalpeople",
    key: "totalpeople",
  },
  {
    title: "Checkin, Checkout",
    dataIndex: "checkinCheckout",
    key: "checkinCheckout",
  },
];

function BookingHistory() {
  const [date, setDate] = useState<any>([]);
  const [page, setPage] = useState(1);

  const { data, error } = useSWR(
    cleanUrlParams("/hotel/hotel-bookings-history", {
      page,
      start_date: date[0],
      end_date: date[1],
    })
  );

  console.log(1, data?.data?.data);

  const expandedRowRender = (record: any) => {
    return (
      <ExpandedTable
        rooms={record.rooms.map((room: any) => ({
          name: room.hotel_room.title,
          price: "NRs. " + room.price,
        }))}
      />
    );
  };
  return (
    <HoteladminLayout title="Booking History">
      {!data && !error ? (
        <Skeleton active />
      ) : (
        <>
          <div className="mb-2">
            <RangePicker
              format={"YYYY-MM-DD"}
              size="large"
              onChange={(_: any, val2) =>
                val2 ? setDate(val2) : setDate([null, null])
              }
            />
          </div>
          <Table
            expandable={{
              expandedRowRender,
            }}
            pagination={false}
            columns={columns}
            dataSource={data?.data?.data?.map((booking: any) => ({
              key: booking.id,
              id: booking.id,
              rooms: booking?.room_selected_bookings,
              title: booking?.room_selected_bookings
                ?.map((room: any) => room.hotel_room.title)
                .join(),
              price: booking?.room_selected_bookings
                ?.map((room: any) => room.price)
                .join(" + "),
              total: "NRs.  " + booking.total_amount,
              totalpeople: booking.no_of_adult + booking.no_of_children,
              checkinCheckout:
                booking.checkin_date + ", " + booking.Checkout_date,
            }))}
          />
          <div className="pagination_area">
            <Pagination
              style={{
                visibility: data?.data?.last_page > 1 ? "visible" : "hidden",
              }}
              onChange={setPage}
              className="pagination"
              defaultCurrent={data?.data?.current_page}
              pageSize={data?.data?.per_page}
              total={data?.data?.total}
            />
          </div>
        </>
      )}
    </HoteladminLayout>
  );
}

export default BookingHistory;
