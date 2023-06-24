import { LineChartOutlined } from "@ant-design/icons";
import demoChart1 from "./free-tier/demo-chart1";
import demoChart2 from "./free-tier/demo-chart2";
import demoChart3 from "./free-tier/demo-chart3";
import demoChart4 from "./free-tier/demo-chart4";

const allWidgets = {
  "free-tier": {
    label: "Free Tier",
    key: "free-tier",
    icon: <LineChartOutlined />,
    items: [demoChart1, demoChart2, demoChart3, demoChart4],
  },
};

export default allWidgets;
