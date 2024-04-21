import React, { useState } from "react";
import { Input, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Search } = Input;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: 1,
    name: "Mahendran",
    age: 24,
    address: "10 Downing Street",
  },
  {
    key: 2,
    name: "Venkat",
    age: 25,
    address: "10 Downing Street",
  },
  {
    key: 3,
    name: "Senthil",
    age: 26,
    address: "10 Downing Street",
  },
  {
    key: 4,
    name: "John cena",
    age: 42,
    address: "20 Downing Street",
  },
  {
    key: 5,
    name: "Mahe",
    age: 32,
    address: "30 Downing Street",
  },
  {
    key: 6,
    name: "John",
    age: 42,
    address: "40 Downing Street",
  },
  {
    key: 7,
    name: "Mike",
    age: 32,
    address: "50 Downing Street",
  },
  {
    key: 8,
    name: "John",
    age: 42,
    address: "60 Downing Street",
  },
];

const SearchableTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [searchedText, setSearchedText] = useState("");

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [searchedText],
      onFilter: (value: string, record: DataType) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <div style={{ marginBottom: 16, textAlign: "center" }}>
        <Search
          placeholder="input search text"
          allowClear
          size="large"
          onSearch={(value) => setSearchedText(value)}
          style={{ width: 500 }}
        />
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <div
        style={{
          widows: "50%",
        }}
      >
        <Table
          pagination={{ defaultPageSize: 3 }}
          dataSource={data}
          columns={columns}
          rowSelection={rowSelection}
        />
      </div>
    </>
  );
};

export default SearchableTable;
