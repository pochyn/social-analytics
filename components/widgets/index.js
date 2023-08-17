import { LineChartOutlined } from "@ant-design/icons";
import profileInfo from "./profile-info";
import demoChart2 from "./demo-chart2";
import demoChart3 from "./demo-chart3";
import demoChart4 from "./demo-chart4";

import proChart1 from "./pro-chart1";

import premiumChart1 from "./premium-chart1";
import premiumChart2 from "./premium-chart2";

const allWidgets = {
  allWidgets: {
    label: "Free Tier",
    key: "free-tier",
    icon: <LineChartOutlined />,
    items: [
      profileInfo,
      demoChart2,
      demoChart3,
      demoChart4,
      proChart1,
      premiumChart1,
      premiumChart2,
    ],
  },
};

export default allWidgets;
