import HoteladminLayout from "@/components/layout/hoteladmin";
import React, { useState } from "react";
import useSWR from "swr";
import { Pagination, Skeleton, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  id: number;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

function BookingHistory() {
  const [page, setPage] = useState(1);

  const { data, error, mutate } = useSWR(
    `/hotel/hotel-bookings-history?page=${page}`
  );

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
    // {
    //   title: "Discount Price",
    //   dataIndex: "discount",
    //   key: "discount",
    // },
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

  return (
    <HoteladminLayout title="Booking History">
      {!data && !error ? (
        <Skeleton active />
      ) : (
        <>
          <Table
            pagination={false}
            columns={columns}
            dataSource={data?.data?.data?.map((booking: any) => ({
              key: booking.id,
              id: booking.id,
              title: booking?.room_selected_bookings
                ?.map((room: any) => room.hotel_room.title)
                .join(),
              price: booking?.room_selected_bookings
                ?.map((room: any) => room.price)
                .join(" + "),
              total: "NRs.  " + booking.total_amount,
              totalpeople: booking.no_of_adult + booking.no_of_children,
              checkinCheckout: booking.from + ", " + booking.to,
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
