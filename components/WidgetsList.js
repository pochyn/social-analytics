"use client";

import React, { useState } from "react";
import widgets from "@/components/widgets";
import { Card } from "antd";
import Title from "@/components/atoms/Title";
import { Typography } from "antd";

const { Text } = Typography;

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
      {/* <Card>{items[0].children[0].label}</Card> */}
      <div class="mt-20 w-Full p-2 pt-4">
        {Object.keys(widgets).map((folder) => {
          const currentFolder = widgets[folder];
          return (
            <>
              <div key={currentFolder.label} class="flex justify-between pb-4">
                <Title type="title-description" text={currentFolder.label} />
              </div>
              <div
                class="grid gap-3  grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
                id="accordion-collapse-body-1"
              >
                {currentFolder.items.map((item) => {
                  console.log(item);
                  return (
                    <span
                      class="p-4 mb-3 flex justify-start items-center bg-white shadow rounded-lg cursor-pointer"
                      key={item.key}
                      draggable={true}
                      unselectable="on"
                      onDragStart={(e) =>
                        e.dataTransfer.setData("widgetId", item.key)
                      }
                    >
                      <img
                        src="https://www.svgrepo.com/show/502433/tool.svg"
                        alt=""
                        class="h-8 w-8"
                      ></img>
                      <div class="p-2">
                        <div class="font-semibold">
                          <Text>{item.label}</Text>
                        </div>

                        <span class="text-gray-600">
                          <Text>{item.label}</Text>
                        </span>
                      </div>
                    </span>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default WidgetsList;
