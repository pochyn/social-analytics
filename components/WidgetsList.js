"use client";

import React, { useState } from "react";
import widgets from "@/components/widgets";
import { Typography } from "antd";
import { Input, Space } from "antd";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import UsernameSearch from "./search/username-search";

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
        className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-4 sm:mt-10 px-4 sm:px-[8%] mx-auto w-full pt-4"
      >
        <div className="hidden sm:block">
          <span className="text-secondary font-bold text-2xl">02</span>
          <div className="mb-1 text-sm sm:text-md font-semibold text-primary">
            Choose from a wide variety of widgets!
          </div>

          <div className="mb-1 text-sm sm:text-md text-primary">
            <span className="italic">Viral Hub</span> offers a diverse selection
            of customizable widgets for a comprehensive analysis. Customize and
            explore based on your unique needs.
          </div>
        </div>

        <div className="hidden sm:block">
          <span className="text-secondary font-bold text-2xl">03</span>
          <div className="mb-1 text-sm sm:text-md font-semibold text-primary">
            Personalize Your Dashboard for In-depth Analysis!
          </div>
          <div className="mb-1 text-sm sm:text-md text-primary">
            With <span className="italic">Viral Hub</span>, you have the freedom
            to design a personalized dashboard that reflects your priorities.
            Effortlessly{" "}
            <span className=" underline decoration-secondary decoration-2">
              Drag and Drop
            </span>{" "}
            widgets to arrange your dashboard and gain valuable insights to
            drive informed strategies.
          </div>
        </div>
      </div>

      <div className="relative  ml-[8%] mr-[8%] mb-4 mt-4 w-Full">
        <div className="">
          <button onClick={scrollLeft} className="rounded-full bg-white">
            <FiChevronLeft />
          </button>
          <button onClick={scrollRight} className="ml-2 rounded-full bg-white">
            <FiChevronRight />
          </button>
        </div>

        <div
          id="content"
          className="carousel flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          {Object.keys(widgets).map((folder) => {
            const currentFolder = widgets[folder];
            return (
              <>
                {currentFolder.items.map((item) => {
                  return (
                    <>
                      <div
                        className="mr-4 aspect-auto border w-40 flex items-center bg-grey3 cursor-pointer"
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
                            <div className="text-center mb-6">
                              <h3 className="text-xs mt-1 truncate items-center">
                                {item.label}
                              </h3>
                            </div>
                          </div>
                          <div className="">
                            <h4 className="ml-3">{item.description}</h4>
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
