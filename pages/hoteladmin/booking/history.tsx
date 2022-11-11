import HoteladminLayout from '@/components/layout/hoteladmin'
import React from 'react'
import useSWR from 'swr'
import { Popconfirm, Skeleton, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { deleteHotelRoom } from '@/api/hoteladmin/hotelRoom';
import { responseErrorHandler } from '@/services/helper';
import Router from 'next/router';

interface DataType {
  id: number;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}


function BookingHistory() {
  const { data, error, mutate } = useSWR('/hotel/hotel-bookings-history');

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
      title: 'Total Price',
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
    }
  ];

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

export default BookingHistory