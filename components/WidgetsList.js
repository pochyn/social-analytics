"use client";

import React, { useState } from "react";
import widgets from "@/components/widgets";
import { Card } from "antd";

const getItem = (label, key, icon = null, children = null) => {
  return {
    key,
    icon,
    children,
    label,
  };
};

const WidgetsList = ({ children }) => {
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
    <>
      <Card>{items[0].children[0].label}</Card>
    </>
  );
};

export default WidgetsList;
