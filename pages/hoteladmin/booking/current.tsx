import { checkoutBooking } from '@/api/hoteladmin/booking';
import { deleteHotelRoom } from '@/api/hoteladmin/hotelRoom';
import HoteladminLayout from '@/components/layout/hoteladmin';
import { responseErrorHandler } from '@/services/helper';
import { Popconfirm, Skeleton, Space, Switch, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Router from 'next/router';
import React from 'react'
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
  const { data, error, mutate } = useSWR('/hotel/hotel-bookings');

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
    mutate({ ...data, data: data.data.filter((booking: any) => booking.id !== id) }, false);
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
          <Table columns={columns} dataSource={data?.data?.map((booking: any) => ({
            key: booking.id,
            id: booking.id,
            title: booking.hotel_room.title,
            price: 'NRs.  ' + booking.hotel_room.price,
            discount: booking.hotel_room.discount ? ('NRs.  ' + booking.hotel_room.discount) : '-',
            total: 'NRs.  ' + booking.total,
            totalpeople: booking.no_of_adult + booking.no_of_children,
            checkinCheckout: booking.from + ', ' + booking.to,
          }))} />
      }
    </HoteladminLayout>
  )
}

export default CurrentBooking