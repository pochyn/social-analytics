"use client";

import React, { useState } from "react";
import widgets from "@/components/widgets";
import { Typography } from "antd";
import { Input, Space } from "antd";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

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

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <>
      <div
        id="features"
        class="flex flex-row mt-10 ml-[8%] mr-[8%] w-Full pt-4 flex-row"
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
                class="pl-2 pt-2 pb-2 block w-full border shadow-sm text-sm focus:z-10 focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="@username"
              ></input>
              <button
                rel="noopener noreferrer"
                href="#demo"
                className="px-8 py-2 text-md text-white  font-semibold bg-secondary border dark:border-gray-100"
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

      <div className="relative  ml-[8%] mr-[8%] mb-4 mt-2 w-Full">
        <div className="">
          <button onClick={scrollLeft} className="rounded-full bg-white">
            <FiChevronLeft />
          </button>
          <button onClick={scrollRight} className="ml-2 rounded-full bg-white">
            <FiChevronRight />
          </button>
        </div>
        {/* <div class="arrow">
          <div class="arrow__body"></div>
        </div> */}
        <div
          id="content"
          className=" carousel flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          {Object.keys(widgets).map((folder) => {
            const currentFolder = widgets[folder];
            return (
              <>
                {currentFolder.items.map((item) => {
                  return (
                    <>
                      <div
                        className="mr-4 aspect-square border w-28 flex items-center bg-grey3 cursor-pointer"
                        key={item.key}
                        draggable={true}
                        unselectable="on"
                        onDragStart={(e) =>
                          e.dataTransfer.setData("widgetId", item.key)
                        }
                      >
                        <div className="mx-auto">
                          <div className="">
                            <div className="text-center">
                              <div className="text-4xl items-center">
                                {item.icon}
                              </div>
                            </div>
                            <h3 className="text-xs mt-1 truncate">
                              {item.label}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WidgetsList;
