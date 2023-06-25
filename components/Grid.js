"use client";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useState } from "react";
import { withSize } from "react-sizeme";
import allWidgets from "@/components/widgets";
import Widget from "@/components/Widget";

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
  const [items, setItems] = useState(getFromLS("items") || []);
  const layouts = getFromLS("layouts") || { lg: [] };
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

  return (
    <div>
      <ResponsiveGridLayout
        draggableHandle=".drag-handle"
        className="mb-3 shadow border-gray-200 rounded-sm cursor-pointer bg-grey "
        style={{
          "background-color": "#FAF9F6",
          "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%235a585d' fill-opacity='0.05'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(
  DashboardResponsive
);
