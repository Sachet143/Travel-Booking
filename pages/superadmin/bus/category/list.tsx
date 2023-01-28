import SuperadminLayout from "@/components/layout/superadmin";
import { Button, Modal, Popconfirm, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import useSWR from "swr";
import type { ColumnsType } from "antd/es/table";
import { EyeFilled, DeleteFilled } from "@ant-design/icons";
import BusModal from "./BusModal";
import { deleteBusCategory } from "@/api/superadmin/bus";
import { responseErrorHandler } from "@/services/helper";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
interface DataType {
  key: string;
  name: string;
  totalSeats: string;
}

const list = () => {
  const router = useRouter();
  const [isModalData, setIsModalData] = useState(null);
  const [busName, setBusName] = useState("");

  const {
    data: categoryData,
    error,
    mutate,
  } = useSWR("/admin/bus/bus-category");

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
      title: "Total Seats",
      dataIndex: "total_seats",
      key: "total_seats",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (items) => {
        return (
          <Space size="middle">
            <a>
              <EyeFilled
                className="cursor-pointer"
                onClick={() => {
                  setBusName(items.title);
                  setIsModalData(items.bus_seats_category);
                }}
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
      <div className="justify-content-start">
        <Button
          className="btn btn-admin-primary mb-3"
          onClick={() => router.push("/superadmin/bus/category/create")}
        >
          Create
        </Button>

        <Table columns={columns} dataSource={categoryData?.data} />
        <BusModal
          busName={busName}
          isModalData={isModalData}
          setIsModalData={setIsModalData}
        />
      </div>
    </SuperadminLayout>
  );
};

export default list;
