"use client";
import { Button as AButton } from "antd";

const Button = ({
  type = "default",
  text,
  htmlType = "button",
  disabled = false,
  className,
  block = false,
  onClick,
  size = "middle",
}) => {
  const getType = () => {
    switch (type) {
      case "default":
        return {
          type: "default",
        };
      case "primary":
        return {
          type: "primary",
        };
      case "danger":
        return {
          type: "primary",
          danger: true,
        };
      case "secondary":
        return {
          className: "ant-btn-secondary",
        };
      case "success":
        return {
          className: "ant-btn-success",
        };
      case "warning":
        return {
          className: "ant-btn-warning",
        };
      case "ghost":
        return {
          ghost: true,
        };
      default:
        return {
          type: "default",
        };
    }
  };
  return (
    <AButton
      {...getType()}
      onClick={onClick}
      htmlType={htmlType}
      disabled={disabled}
      className={`${
        getType()?.className ? getType()?.className : ""
      } ${className}`}
      block={block}
      size={size}
    >
      {text}
    </AButton>
  );
};

export default Button;
