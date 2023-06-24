"use client";
import { Typography } from "antd";

const { Title: ATitle } = Typography;
const Title = ({ type, text }) => {
  const getType = () => {
    if (type === "title-content") return 1;
    if (type === "title-section") return 2;
    if (type === "title-subsection") return 3;
    return 1;
  };

  return <ATitle level={getType()}>{text}</ATitle>;
};

export default Title;
