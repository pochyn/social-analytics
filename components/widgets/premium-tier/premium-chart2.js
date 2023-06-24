import { LineChartOutlined } from "@ant-design/icons";

const DemoChart = () => {
  return <div>Premium Chart 2</div>;
};

const premiumChart2 = {
  component: () => {
    return <DemoChart />;
  },
  key: "premiumChart2",
  label: "Premium Chart 2",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  icon: <LineChartOutlined />,
};

export default premiumChart2;
