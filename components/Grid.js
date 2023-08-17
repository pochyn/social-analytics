"use client";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useState } from "react";
import { withSize } from "react-sizeme";
import allWidgets from "@/components/widgets";
import Widget from "@/components/Widget";
import UsernameSearch from "./search/username-search";

// for now save to local storage,
// in the future better save items and layouts in db per user
const getFromLS = (key) => {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl")) || {};
    } catch (e) {}
  }
  return ls[key];
};

const saveToLS = (key, value) => {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl",
      JSON.stringify({
        ...JSON.parse(global.localStorage.getItem("rgl")),
        [key]: value,
      })
    );
  }
};

const widgets = Object.keys(allWidgets).flatMap(
  (folder) => allWidgets[folder].items
);
const currentWidgets = widgets.reduce(
  (object, item) => ({
    ...object,
    [item.key]: { ...item },
  }),
  {}
);

const DashboardResponsive = ({ size: { width }, symbol, logs, ohlc }) => {
  const [items, setItems] = useState(
    getFromLS("items") || ["profileInfo", "premiumChart1", "premiumChart2"]
  );
  const layouts = getFromLS("layouts") || {
    lg: [
      {
        w: 14,
        h: 7,
        x: 0,
        y: 0,
        i: "profileInfo",
        moved: false,
        static: false,
      },
      {
        w: 14,
        h: 7,
        x: 0,
        y: 7,
        i: "premiumChart1",
        moved: false,
        static: false,
      },
      {
        w: 14,
        h: 7,
        x: 0,
        y: 14,
        i: "premiumChart2",
        moved: false,
        static: false,
      },
    ],
    md: [
      {
        w: 14,
        h: 7,
        x: 0,
        y: 0,
        i: "profileInfo",
        moved: false,
        static: false,
      },
      {
        w: 16,
        h: 9,
        x: 14,
        y: 0,
        i: "premiumChart1",
        moved: false,
        static: false,
      },
      {
        w: 14,
        h: 7,
        x: 0,
        y: 7,
        i: "premiumChart2",
        moved: false,
        static: false,
      },
    ],
    xxs: [],
    xs: [],
  };
  const [rerender, setRerender] = useState(false);

  const onLayoutChange = (_, allLayouts) => {
    saveToLS("layouts", allLayouts);
    setRerender(!rerender);
  };

  const onRemoveItem = (itemId) => {
    const newItems = items.filter((i) => i !== itemId);
    setItems(newItems);
    saveToLS("items", newItems);
  };

  const onDrop = (layout, layoutItem, _event) => {
    const widgetId = _event.dataTransfer.getData("widgetId");
    if (!items.includes(widgetId)) {
      const newItems = [...items, widgetId];
      setItems(newItems);
      saveToLS("items", newItems);
    }
  };

  const [shouldFetch, setShouldFetch] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);

  const handleTiktokUserProfileSubmission = async () => {
    setShouldFetch(true);
    const data = await fetch("/api/tiktok/user-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profilesArr: [username] }),
    });
    const response = await data.json();
    if (response) {
      setUserData(response);
    }
    setShouldFetch(false);
  };

  const onUsernameInputChange = (value) => {
    setUsername(value);
  };

  return (
    <>
      <div className="">
        <UsernameSearch
          shouldFetch={shouldFetch}
          username={username}
          handleUsernameInputChange={onUsernameInputChange}
          handleTiktokUserProfileSubmission={handleTiktokUserProfileSubmission}
        />
        <ResponsiveGridLayout
          draggableHandle=".drag-handle"
          className="cursor-pointer"
          style={{
            // backgroundColor: "#f9fcff",
            // backgroundImage: "linear-gradient(147deg, #f9fcff 0%, #eaedf0 74%)",
            minHeight: "80vh",
          }}
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 50, md: 35, sm: 20, xs: 10, xxs: 5 }}
          rowHeight={30}
          width={width}
          onLayoutChange={onLayoutChange}
          isDroppable
          onDrop={onDrop}
        >
          {items.map((key) => (
            <div
              key={key}
              data-grid={{
                w: 14,
                h: 7,
                x: 0,
                y: Infinity,
              }}
            >
              <Widget
                isRerendered={rerender}
                id={key}
                onRemoveItem={onRemoveItem}
                component={currentWidgets[key.split("-")[0]].component}
                label={currentWidgets[key.split("-")[0]].label}
                icon={currentWidgets[key.split("-")[0]].icon}
                localSymbol={key.split("-")[1]}
                itemsLayout={items}
                data=""
              />
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </>
  );
};

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(
  DashboardResponsive
);
