import { LineChartOutlined } from "@ant-design/icons";
import demoChart1 from "./free-tier/demo-chart1";
import demoChart2 from "./free-tier/demo-chart2";
import demoChart3 from "./free-tier/demo-chart3";
import demoChart4 from "./free-tier/demo-chart4";

import proChart1 from "./pro-tier/pro-chart1";

import premiumChart1 from "./premium-tier/premium-chart1";
import premiumChart2 from "./premium-tier/premium-chart2";

const allWidgets = {
  "free-tier": {
    label: "Free Tier",
    key: "free-tier",
    icon: <LineChartOutlined />,
    items: [demoChart1, demoChart2, demoChart3, demoChart4],
  },

  "pro-tier": {
    label: "Pro Tier",
    key: "pro-tier",
    icon: <LineChartOutlined />,
    items: [proChart1],
  },

  "premium-tier": {
    label: "Premium Tier",
    key: "premium-tier",
    icon: <LineChartOutlined />,
    items: [premiumChart1, premiumChart2],
  },
};

export default allWidgets;
