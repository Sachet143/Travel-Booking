import { deleteHotelFacility, updateHotelFacility } from '@/api/superadmin/miscs/facilities';
import { responseErrorHandler } from '@/services/helper';
import { Form, Input, Pagination, Popconfirm, Skeleton, Table, Typography } from 'antd';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

interface Item {
  sn: string;
  id: number;
  icon_link: string;
  title: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const HotelFacilityList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, mutate, error } = useSWR(`/admin/features?page=${page}`);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState<number | null | any>(null);
  const isEditing = (record: Item) => record.id === editingKey;

  const edit = (record: Partial<Item>) => {
    form.setFieldsValue(record);
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey(null);
  };

  const columns = [
    {
      title: 'S.N',
      dataIndex: 'sn',
      width: '25%'
    },
    {
      title: 'Icon',
      dataIndex: 'icon_link',
      width: '25%',
      editable: true,
      render: (icon_link: any) => <i className={`${icon_link}`} />
    },
    {
      title: 'Title',
      dataIndex: 'title',
      width: '25%',
      editable: true,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => updateFacilityHandler(record.id)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Typography.Link onClick={cancel}>
              Cancel
            </Typography.Link>
          </span>
        ) : (
          <>
            <Typography.Link style={{ marginRight: 8 }} disabled={editingKey !== null} onClick={() => edit(record)}>
              Edit
            </Typography.Link>
            <Popconfirm title="Are you sure to delete the facility?" onConfirm={() => deleteFacilityHandler(record)}>
              <Typography.Link disabled={editingKey !== null}>
                Delete
              </Typography.Link>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  function updateFacilityHandler(id: any) {
    const updatedIcon = form.getFieldValue("icon_link");
    const updatedTitle = form.getFieldValue("title");
    setEditingKey(null);

    // update locally
    mutate({
      ...data,
      data: data?.data?.map((facility: any) => {
        if (facility.id === id) {
          return ({
            ...facility,
            // @ts-ignore
            icon_link, updatedIcon,
            title: updatedTitle,
          })
        } else {
          return facility
        }
      })
    }, false)
    updateHotelFacility(id, { icon_link: updatedIcon, title: updatedTitle })
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch(responseErrorHandler)
      .finally(mutate)

  }

  function deleteFacilityHandler(record: any) {

    mutate({
      ...data,
      data: data?.data?.filter((facility: any) => facility.id !== record.id)
    }, false)
    setEditingKey(null);
    deleteHotelFacility(record.id)
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch(responseErrorHandler)
      .finally(mutate)

  }

  return (
    <Form form={form} component={false}>
      {
        !data && !error ? <Skeleton active />
          :
          <>
            <Table
              pagination={false}
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              // @ts-ignore
              dataSource={data?.data?.map((facility, i) => ({ ...facility, sn: i + 1 }))}
              columns={mergedColumns}
              rowClassName="editable-row"
            />
            <div className="pagination_area">
              <Pagination
                style={{ visibility: data?.last_page > 1 ? "visible" : "hidden" }}
                onChange={setPage}
                className='pagination'
                defaultCurrent={data.current_page}
                pageSize={data.per_page}
                total={data.total}
              />
            </div>
          </>
      }
    </Form>
  );
};

export default HotelFacilityList;