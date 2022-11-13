import SuperadminLayout from '@/components/layout/superadmin';
import { Button, Skeleton, Space, Table, Tag, Tooltip } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useSWR from 'swr';

const { Column } = Table;

interface DataType {
  hotel_name: string
  name: string
  email: string
  phone: string
  address: string
  description: string
  status: number
}

const Approval: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { data, error } = useSWR(`/admin/hotel/hotel-application?page=${page}`);
  const loading = !data && !error;

  return (
    <SuperadminLayout title="Pending Approval">
      {
        loading ?
          <Skeleton active />
          :
          <Table
            pagination={{
              hideOnSinglePage: true,
              current: data?.current_page,
              pageSize: data?.per_page,
              total: data?.total,
              onChange: setPage
            }}
            dataSource={data?.data?.map((app: any) => ({
              hotel_name: app.name,
              name: app.name,
              email: app.email,
              phone: app.phone_number,
              address: app.address,
              description: app.description,
              status: app.status
            }))}>
            <Column title="Hotel Name" dataIndex="hotel_name" key="hotel_name" />
            <Column title="Admin Name" dataIndex="name" key="name" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column title="Phone" dataIndex="phone" key="lastName" />
            <Column title="Address" dataIndex="address" key="address" render={(_, r: DataType) => r.address.split(' ').join(', ')} />
            <Column title="Description" dataIndex="address" key="address" render={(_, record: DataType) => (
              <Tooltip title={record.description}>
                {record.description.slice(0, 25) + "..."}
              </Tooltip>
            )} />
            <Column
              title="Status"
              key="status"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  {
                    record.status === 0 ? <Tag className='bg-warning'>Pending</Tag> : <Tag className='bg-success text-white'>Completed</Tag>
                  }
                </Space>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <Button className="btn btn-success" onClick={() => router.push({
                    pathname: "/superadmin/hotels/create", query: {
                      name: record.name,
                      email: record.email,
                      password: record.phone,
                      password_confirmation: record.phone,
                    }
                  })}>Create</Button>
                </Space>
              )}
            />
          </Table>
      }
    </SuperadminLayout>
  )
};

export default Approval;