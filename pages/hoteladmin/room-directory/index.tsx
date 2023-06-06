import { deleteHotelRoom } from "@/api/hoteladmin/hotelRoom";
import { deleteHotelRoomDirectory } from "@/api/hoteladmin/room-directory";
import HoteladminLayout from "@/components/layout/hoteladmin";
import { responseErrorHandler } from "@/services/helper";
import { Popconfirm, Skeleton, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Router from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

interface DataType {
  id: number;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

function RoomListing() {
  const [page, setPage] = useState(1);
  const { data, error, mutate } = useSWR(`/hotel/room-directory?page=${page}`);

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <i
            className="fa fa-pen text-primary cursor-pointer"
            style={{ fontSize: "20px" }}
            onClick={() =>
              Router.push(`/hoteladmin/room-directory/edit/${record.id}`)
            }
          />
          <Popconfirm
            title="Are you sure to delete this room?"
            onConfirm={() => deleteRoomDirHandler(record.id)}
          >
            <i
              className="fa fa-trash text-danger cursor-pointer"
              style={{ fontSize: "20px" }}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  function deleteRoomDirHandler(id: number) {
    mutate(
      { ...data, data: data.data.filter((room: any) => room.id !== id) },
      false
    );
    deleteHotelRoomDirectory(id)
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch(responseErrorHandler)
      .finally(mutate);
  }

  return (
    <HoteladminLayout title="Room Directories">
      {!data && !error ? (
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
          columns={columns}
          dataSource={data?.data?.map((room: any) => ({
            id: room.id,
            title: room.name,
            status: room.status ? "Active" : "Inactive",
          }))}
        />
      )}
    </HoteladminLayout>
  );
}

export default RoomListing;
