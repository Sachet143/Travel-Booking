import HoteladminLayout from "@/components/layout/hoteladmin";
import { cleanUrlParams } from "@/services/helper";
import { DatePicker, Pagination, Skeleton, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import useSWR from "swr";
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
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  // {
  //   title: "Phone",
  //   dataIndex: "phone",
  //   key: "phone",
  // },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
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
    title: "Checkin",
    dataIndex: "checkin",
    key: "checkin",
  },
  {
    title: "Checkout",
    dataIndex: "checkout",
    key: "checkout",
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
      <div className="mb-4">
        <RangePicker
          format={"YYYY-MM-DD"}
          size="large"
          onChange={(_: any, val2) => {
            val2 ? setDate(val2) : setDate([null, null]);
          }}
        />
      </div>
      {!data && !error ? (
        <Skeleton active />
      ) : (
        <>
          <Table
            expandable={{
              expandedRowRender,
            }}
            pagination={false}
            columns={columns}
            dataSource={data?.data?.data?.map((booking: any) => ({
              key: booking.id,
              id: booking.id,
              name: booking.user.name,
              // phone: booking.user.phone,
              email: booking.user.email,
              rooms: booking?.room_selected_bookings,
              title: booking?.room_selected_bookings
                ?.map((room: any) => room.hotel_room.title)
                .join(),
              price: booking?.room_selected_bookings
                ?.map((room: any) => room.price)
                .join(" + "),
              total: "NRs.  " + booking.total_amount,
              totalpeople: booking.no_of_adult + booking.no_of_children,
              checkin: booking.checkin_date,
              checkout: booking.Checkout_date,
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
