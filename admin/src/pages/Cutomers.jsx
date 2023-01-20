import React from "react";
import { Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../redux/features/userSlice";

const Cutomers = () => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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
      {isError ? (
        <div style={{ color: "red" }}>{message}</div>
      ) : (
        <div>
          <h3>Cutomers</h3>
          <Table columns={columns} dataSource={data1} />
        </div>
      )}
    </>
  );
};

export default Cutomers;
