"use client";

import React, { useState } from "react";
import widgets from "@/components/widgets";
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
      <div className="mt-20 w-Full p-2 pt-4">
        {Object.keys(widgets).map((folder) => {
          const currentFolder = widgets[folder];
          return (
            <>
              <span class="bg-grey3 text-gray-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-gray1 dark:text-gray3">
                <Text>{currentFolder.label}</Text>
              </span>

              <div
                class="mt-1 mb-2 grid gap-3  grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
                id="accordion-collapse-body-1"
              >
                {currentFolder.items.map((item) => {
                  console.log(item);
                  return (
                    <>
                      <span
                        className="p-1 mb-3 max-w-sm flex justify-start items-center bg-white shadow rounded-md cursor-pointer"
                        key={item.key}
                        draggable={true}
                        unselectable="on"
                        onDragStart={(e) =>
                          e.dataTransfer.setData("widgetId", item.key)
                        }
                      >
                        <div class="p-2 w-4/5">
                          <div className="font-semibold">
                            <div className="flex justify-start">
                              <span className="text-m">{item.icon}</span>
                              <Text className="ml-2">{item.label}</Text>
                            </div>
                          </div>

                          <div class="text-gray-600 truncate ml-6">
                            <Text>{item.description}</Text>
                          </div>
                        </div>
                      </span>
                    </>
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
