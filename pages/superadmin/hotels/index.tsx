import SuperadminLayout from '@/components/layout/superadmin';
import { cleanUrlParams, renderLocation } from '@/services/helper';
import { SearchOutlined } from '@ant-design/icons';
import { InputRef, Skeleton } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { ReactElement, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import useSWR from 'swr';

interface DataType {
  name: string;
  location: string;
  admin: string;
  phone: string;
  category: string;
  action: ReactElement;
}

type DataIndex = keyof DataType;

const App: React.FC = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const [page, setPage] = useState(1);
  const { data, error } = useSWR(cleanUrlParams(`admin/hotel`, {
    [searchedColumn === "name" ? "search" : "whole_location"]: searchText,
    page,
  }));

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };



  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      width: '20%',
      sorter: (a, b) => a.location.length - b.location.length,
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('location'),
    },
    {
      title: 'Admin',
      dataIndex: 'admin',
      key: 'admin',
      width: '20%',
      sorter: (a, b) => a.admin.length - b.admin.length,
      sortDirections: ['descend', 'ascend'],
      // ...getColumnSearchProps('admin'),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: '20%'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '20%',
      sorter: (a, b) => a.category.length - b.category.length,
      sortDirections: ['descend', 'ascend'],
      // ...getColumnSearchProps('category'),
    },
    // {
    //   title: 'Action',
    //   dataIndex: 'action',
    //   key: 'action',
    //   ...getColumnSearchProps('action'),
    // },
  ];

  return (
    <SuperadminLayout title="Hotels">
      {
        !data && !error ?
          <Skeleton active />
          :
          <>
            <Table columns={columns} dataSource={data?.data?.map((hotel: any) => ({
              name: hotel.name,
              location: renderLocation({ city: hotel.location.city, state: hotel.location.state, country: hotel.location.country }),
              admin: hotel.user.name,
              phone: hotel.user.phone || '-',
              category: hotel.category.title
            }))}
              pagination={{
                hideOnSinglePage: true,
                current: data?.current_page,
                pageSize: data?.per_page,
                total: data?.total,
                onChange: setPage
              }}
            />
          </>
      }
    </SuperadminLayout>

  );
};

export default App;