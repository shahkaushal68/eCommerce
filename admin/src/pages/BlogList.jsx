import React from "react";
import { Space, Table } from "antd";

const BlogList = () => {
  let data1 = [];
  for (let index = 0; index < 25; index++) {
    data1.push({
      key: index,
      name: `John Brown ${index}`,
      product: `Product ${index}`,
      status: "Pending",
    });
  }
  const columns = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Space size="middle">Delete</Space>,
    },
  ];

  return (
    <>
      <h3>Blogs</h3>
      <Table columns={columns} dataSource={data1} />
    </>
  );
};

export default BlogList;
