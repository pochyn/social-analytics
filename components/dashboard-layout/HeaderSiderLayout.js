"use client";

import { Layout, Menu } from "antd";
import React, { useState } from "react";
import widgets from "@/components/widgets";
import Header from "@/components/dashboard-layout/Header";

const { Sider, Content } = Layout;

const getItem = (label, key, icon = null, children = null) => {
  return {
    key,
    icon,
    children,
    label,
  };
};

const HeaderLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const triggerCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = Object.keys(widgets).map((folder) => {
    const currentFolder = widgets[folder];
    return getItem(
      currentFolder.label,
      currentFolder.key,
      currentFolder.icon,
      currentFolder.items.map((item) =>
        getItem(
          <div
            draggable={true}
            unselectable="on"
            onDragStart={(e) => e.dataTransfer.setData("widgetId", item.key)}
          >
            {item.label}
          </div>,
          item.key
        )
      )
    );
  });

  return (
    <Layout hasSider>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(155, 155, 155, 0.2)",
          }}
        />
        <Menu mode="inline" defaultSelectedKeys={["1"]} items={items} />
      </Sider>
      <Layout>
        {/* <Header triggerCollapsed={triggerCollapsed} collapsed={collapsed} /> */}
        <Content
          style={{
            minHeight: "80vh",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default HeaderLayout;
