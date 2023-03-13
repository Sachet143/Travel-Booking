import { deleteBusRoute } from "@/api/busadmin/bus-routes";
import BusadminLayout from "@/components/layout/busadmin";
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

function BusListing() {
  const [page, setPage] = useState(1);
  const { data, error, mutate } = useSWR(`bus/routes`);

  const columns: ColumnsType<DataType> = [
    {
      title: "Start Location",
      dataIndex: "start_destination",
      key: "start_destination",
    },
    {
      title: "Destination",
      dataIndex: "final_destination",
      key: "final_destination",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
              Router.push(`/busadmin/bus-routes/edit/${record.id}`)
            }
          />
          <Popconfirm
            title="Are you sure to delete this route?"
            onConfirm={() => deleteBusRouteHandler(record.id)}
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

  function deleteBusRouteHandler(id: number) {
    mutate(
      { ...data, data: data.data.filter((bus: any) => bus.id !== id) },
      false
    );
    deleteBusRoute(id)
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch(responseErrorHandler)
      .finally(mutate);
  }

  return (
    <BusadminLayout title="Bus Routes">
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
          dataSource={data?.data?.map((route: any) => ({
            ...route,
            description: route?.description?.slice(0, 15) + "...",
          }))}
        />
      )}
    </BusadminLayout>
  );
}

export default BusListing;
