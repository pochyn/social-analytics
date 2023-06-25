"use client";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";

const headerItems = [
  { key: 1, page: "/", title: "Dashboard" },
  { key: 2, page: "/algorithms", title: "Algorithms" },
  { key: 3, page: "/gateway", title: "Gateway" },
  { key: 4, page: "/logs", title: "Logs" },
  { key: 5, page: "/settings", title: "Settings" },
];

const Header = ({ triggerCollapsed, collapsed }) => {
  const hasSider = triggerCollapsed ? true : false;

  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        padding: 0,
      }}
    >
      {!hasSider ? (
        <div
          style={{
            float: "left",
            width: "48px",
            height: "32px",
            margin: " 16px 24px 16px -34px",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
      ) : null}

      <Menu theme="light" mode="horizontal">
        {hasSider ? (
          <Menu.Item theme="light" key="collapse" onClick={triggerCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Menu.Item>
        ) : null}

        {headerItems.map((item) => {
          return (
            <Menu.Item key={item.key}>
              <Link legacyBehavior href={item.page}>
                <a>{item.title}</a>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
