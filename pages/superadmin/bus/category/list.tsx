import SuperadminLayout from "@/components/layout/superadmin";
import { Modal, Popconfirm, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import useSWR from "swr";
import type { ColumnsType } from "antd/es/table";
import { EyeFilled, DeleteFilled } from "@ant-design/icons";
import BusModal from "./BusModal";
import { deleteBusCategory } from "@/api/superadmin/bus";
import { responseErrorHandler } from "@/services/helper";
import { toast } from "react-toastify";
interface DataType {
  key: string;
  name: string;
}

const list = () => {
  const [isModalData, setIsModalData] = useState(null);

  const { data: categoryData, mutate } = useSWR("/admin/bus/bus-category");

  const deleteCategory = async (id: any) => {
    return deleteBusCategory(id)
      .then((res: any) => {
        toast.success(res.message);
        mutate();
      })
      .catch(responseErrorHandler)
      .finally(() => console.log("deleted"));
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (items) => {
        console.log(items);
        return (
          <Space size="middle">
            <a>
              <EyeFilled
                className="cursor-pointer"
                onClick={() => setIsModalData(items.bus_seats_category)}
              />
            </a>
            <Popconfirm
              title="Do want to delete the category ?"
              onConfirm={() => deleteCategory(items.id)}
              okButtonProps={{
                className: "bg-red-500",
              }}
            >
              <DeleteFilled className="text-red-500 cursor-pointer" />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return (
    <SuperadminLayout title="Bus Category Listing">
      <Table columns={columns} dataSource={categoryData?.data} />
      <BusModal isModalData={isModalData} setIsModalData={setIsModalData} />
    </SuperadminLayout>
  );
};

export default list;
