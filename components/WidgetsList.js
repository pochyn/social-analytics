"use client";

import React, { useState } from "react";
import widgets from "@/components/widgets";
import { Typography } from "antd";
import { Input, Space } from "antd";

const { Text } = Typography;
const { Search } = Input;

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

  return (
    <>
      <div
        id="features"
        class="flex flex-row mt-10 ml-[8%] mr-[8%] w-Full pb-2 pt-4 flex-row mb-4"
      >
        <div className="w-1/3 ">
          <span className="text-secondary font-bold text-2xl">01</span>
          <div className="mb-2 text-md font-semibold text-primary">
            Enter Tik-Tok @username you want to analyze.
          </div>
          <div>
            <div className=" w-[80%] flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <input
                type="text"
                id="hs-leading-icon"
                name="hs-leading-icon"
                class="pl-2 pt-1 pb-1 block w-full border shadow-sm text-sm focus:z-10 focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="@username"
              ></input>
              <button
                rel="noopener noreferrer"
                href="#demo"
                className="px-8 py-1 text-md text-white  font-semibold bg-secondary border dark:border-gray-100"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/3 pr-4">
          <span className="text-secondary font-bold text-2xl">02</span>
          <div className="mb-1 text-md font-semibold text-primary">
            Choose from a wide variety of widgets!
          </div>

          <div className="mb-1 text-md text-primary">
            <span className="italic">TrendMe Hub</span> offers a diverse
            selection of customizable widgets for a comprehensive analysis.
            Customize and explore based on your unique needs.
          </div>
        </div>

        <div className="w-1/3 pl-4">
          <span className="text-secondary font-bold text-2xl">03</span>
          <div className="mb-1 text-md font-semibold text-primary">
            Personalize Your Dashboard for In-depth Analysis!
          </div>
          <div className="mb-1 text-md text-primary">
            With <span className="italic">TrendMe Hub</span>, you have the
            freedom to design a personalized dashboard that reflects your
            priorities. Effortlessly{" "}
            <span className="italic">Drag and Drop</span> widgets to arrange
            your dashboard and gain valuable insights to drive informed
            strategies.
          </div>
        </div>
      </div>

      <div className="mt-5 ml-[8%] mr-[8%] w-Full">
        {Object.keys(widgets).map((folder) => {
          const currentFolder = widgets[folder];
          return (
            <>
              <div
                className="mt-1 mb-2 grid gap-3  grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
                id="accordion-collapse-body-1"
              >
                {currentFolder.items.map((item) => {
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
                        <div className="p-2 w-4/5">
                          <div className="font-semibold">
                            <div className="flex justify-start">
                              <span className="text-m">{item.icon}</span>
                              <h3 className="text-sm font-semibold ml-2 mt-1">
                                {item.label}
                              </h3>
                            </div>
                          </div>

                          <div className="text-gray-600 truncate ml-6">
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
