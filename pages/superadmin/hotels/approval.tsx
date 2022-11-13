import { completeHotelApplication } from '@/api/superadmin/hotel';
import SuperadminLayout from '@/components/layout/superadmin';
import { responseErrorHandler } from '@/services/helper';
import { Button, Popconfirm, Skeleton, Space, Table, Tag, Tooltip } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const { Column } = Table;

interface DataType {
  id: number
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

  const { data, error, mutate } = useSWR(`/admin/hotel/hotel-application?page=${page}`);
  const loading = !data && !error;

  function completeApplicationHandler(applicationId: number) {
    completeHotelApplication(applicationId)
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch(responseErrorHandler)
      .finally(mutate)
  }

  return (
    <SuperadminLayout title="Hotel Applications">
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
              id: app.id,
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
                    record.status === 0 ? <Tag className='bg-warning rounded px-3'>Pending</Tag> : <Tag className='bg-success text-white rounded px-3'>Completed</Tag>
                  }
                </Space>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  {
                    record.status === 0 ?
                      <>
                        <Button className="btn btn-success" onClick={() => router.push({
                          pathname: "/superadmin/hotels/create", query: {
                            name: record.name,
                            email: record.email,
                            password: record.phone,
                            password_confirmation: record.phone,
                          }
                        })}>Create</Button>
                        <Popconfirm title="Are you sure to complete this application?" onConfirm={() => completeApplicationHandler(record.id)}>
                          <Button className="btn btn-admin-dark">
                            Complete
                          </Button>
                        </Popconfirm>
                      </>
                      : <p>Application is Completed</p>}
                </Space>
              )}
            />
          </Table>
      }
    </SuperadminLayout>
  )
};

export default Approval;