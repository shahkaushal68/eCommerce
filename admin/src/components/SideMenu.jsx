import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  BlockOutlined,
  BranchesOutlined,
  BgColorsOutlined,
  UnorderedListOutlined,
  FileAddOutlined,
  BorderOuterOutlined,
  InsuranceOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[""]}
      onClick={({ key }) => {
        //console.log(key);
        navigate(key);
      }}
      items={[
        {
          key: "",
          icon: <DashboardOutlined />,
          label: "Dashboard",
        },
        {
          key: "cutomers",
          icon: <UserOutlined />,
          label: "Customers",
        },
        {
          key: "catalog",
          icon: <ShoppingCartOutlined />,
          label: "Catalog",
          children: [
            {
              key: "products",
              icon: <ShoppingCartOutlined />,
              label: "Products",
            },
            {
              key: "add-product",
              icon: <ShoppingCartOutlined />,
              label: "Add Products",
            },
            {
              key: "categories",
              icon: <BlockOutlined />,
              label: "Categories",
            },
            {
              key: "add-category",
              icon: <BlockOutlined />,
              label: "Add Category",
            },
            {
              key: "brands",
              icon: <BranchesOutlined />,
              label: "Brands",
            },
            {
              key: "add-brand",
              icon: <BranchesOutlined />,
              label: "Add Brands",
            },
            {
              key: "colours",
              icon: <BgColorsOutlined />,
              label: "Colours",
            },
            {
              key: "add-colour",
              icon: <BgColorsOutlined />,
              label: "Add Colour",
            },
          ],
        },
        {
          key: "blogs",
          icon: <BlockOutlined />,
          label: "Blogs",
          children: [
            {
              key: "blog-list",
              icon: <UnorderedListOutlined />,
              label: "Blog List",
            },
            {
              key: "add-blog",
              icon: <FileAddOutlined />,
              label: "Add Blog",
            },
            {
              key: "blog-categories",
              icon: <BlockOutlined />,
              label: "Blog Categories List",
            },
            {
              key: "add-blog-category",
              icon: <BlockOutlined />,
              label: "Add Blog Category",
            },
          ],
        },
        {
          key: "orders",
          icon: <BorderOuterOutlined />,
          label: "Orders",
        },
        {
          key: "enquries",
          icon: <InsuranceOutlined />,
          label: "Enquries",
        },
      ]}
    />
  );
};

export default SideMenu;
