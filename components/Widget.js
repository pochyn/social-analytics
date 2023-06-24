import { CloseOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useEffect, useRef, useState } from "react";

const WidgetWrapper = ({
  id,
  onRemoveItem,
  component,
  isRerendered,
  itemsLayout,
}) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(elementRef.current.clientHeight);
    setWidth(elementRef.current.clientWidth);
  }, [isRerendered]);

  return (
    <Card
      ref={elementRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flexGrow: 1,
        }}
      />
      <span style={{ float: "right" }} onClick={() => onRemoveItem(id)}>
        <CloseOutlined />
      </span>
      <div
        className="drag-handle"
        style={{
          height: "35px",
          width: "100%",
          margin: "-10px",
        }}
      ></div>
      <div
        style={{
          padding: "0.5rem",
          flexGrow: 1,
        }}
      >
        {component(height, width, itemsLayout)}
      </div>
    </Card>
  );
};

export default WidgetWrapper;
