import { checkoutBooking } from '@/api/hoteladmin/booking';
import { deleteHotelRoom } from '@/api/hoteladmin/hotelRoom';
import HoteladminLayout from '@/components/layout/hoteladmin';
import { responseErrorHandler } from '@/services/helper';
import { Pagination, Popconfirm, Skeleton, Space, Switch, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Router from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import useSWR from 'swr';

interface DataType {
  id: number;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}


function CurrentBooking() {
  const [page, setPage] = useState(1);

  const { data: data, error, mutate } = useSWR(`/hotel/hotel-bookings?page=${page}`);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Discount Price',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Total People',
      dataIndex: 'totalpeople',
      key: 'totalpeople',
    },
    {
      title: 'Checkin, Checkout',
      dataIndex: 'checkinCheckout',
      key: 'checkinCheckout',
    },
    {
      title: 'Checkout',
      key: 'complete',
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm title="Do you want to checkout?" onConfirm={() => checkoutHandler(record.id)}>
            <Switch checked={false} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  function checkoutHandler(id: number) {
    checkoutBooking(id)
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch(responseErrorHandler)
      .finally(mutate)
  }

  return (
    <HoteladminLayout title="Current Bookings">
      {
        !data && !error ?
          <Skeleton active />
          :
          <>
            <Table pagination={false} columns={columns} dataSource={data?.data?.data?.map((booking: any) => ({
              key: booking.id,
              id: booking.id,
              title: booking.hotel_room.title,
              price: 'NRs.  ' + booking.hotel_room.price,
              discount: booking.hotel_room.discount ? ('NRs.  ' + booking.hotel_room.discount) : '-',
              total: 'NRs.  ' + booking.total,
              totalpeople: booking.no_of_adult + booking.no_of_children,
              checkinCheckout: booking.from + ', ' + booking.to,
            }))} />
            <div className="pagination_area">
              <Pagination
                style={{ visibility: data?.data?.last_page > 1 ? "visible" : "hidden" }}
                onChange={setPage}
                className='pagination'
                defaultCurrent={data?.data?.current_page}
                pageSize={data?.data?.per_page}
                total={data?.data?.total}
              />
            </div>
          </>
      }
    </HoteladminLayout>
  )
}

export default CurrentBooking