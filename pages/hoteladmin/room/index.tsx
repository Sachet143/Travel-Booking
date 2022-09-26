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

function RoomListing() {
  const { data, error, mutate } = useSWR('/hotel/rooms');

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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <i className="fa fa-pen text-primary cursor-pointer" style={{ fontSize: "20px" }} onClick={() => Router.push(`/hoteladmin/room/edit/${record.id}`)} />
          <Popconfirm title="Are you sure to delete this room?" onConfirm={() => deleteRoomHandler(record.id)}>
            <i className="fa fa-trash text-danger cursor-pointer" style={{ fontSize: "20px" }} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  function deleteRoomHandler(id: number) {
    mutate({ ...data, data: data.data.filter((room: any) => room.id !== id) }, false);
    deleteHotelRoom(id)
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch(responseErrorHandler)
      .finally(mutate)
  }

  return (
    <HoteladminLayout title="Rooms">
      {
        !data && !error ?
          <Skeleton active />
          :
          <Table columns={columns} dataSource={data?.data?.map((room: any) => ({
            id: room.id,
            title: room.title,
            price: room.price,
            discount: room.discount || '-',
          }))} />
      }
    </HoteladminLayout>
  )
}

export default RoomListing