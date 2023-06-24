import { LineChartOutlined } from "@ant-design/icons";

const DemoChart = () => {
  return <div>Pro Chart 1</div>;
};

const proChart1 = {
  component: () => {
    return <DemoChart />;
  },
  key: "proChart1",
  label: "Pro Chart",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  icon: <LineChartOutlined />,
};

export default proChart1;
