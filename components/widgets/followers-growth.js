import DateFilter from "@/data/enum/dateFilter";
import {
  LineChartOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { followersGrowthProfileAnalysis } from "@/utils/followersGrowth/followersGrowthAnalysis";

const FollowersGrowth = ({ data }) => {
  const [generalGrowthAnalyticsData, setGeneralGrowthAnalyticsData] = useState({
    followersGrowth: null,
    likesGrowth: null,
  });
  const [dateData, setDateData] = useState([]);

  const authorMeta = data[0]?.authorMeta ?? {};
  useEffect(() => {
    const analytics = () => {
      let { generalGrowthAnalyticsData, dateData } =
        followersGrowthProfileAnalysis(data, DateFilter.PastSevenDays);

      setGeneralGrowthAnalyticsData((prevState) => ({
        ...prevState,
        followersGrowth: generalGrowthAnalyticsData?.followersGrowth,
        likesGrowth: generalGrowthAnalyticsData?.likesGrowth,
      }));
      setDateData((prevDateData) => [...prevDateData, dateData]);
    };

    if (data) {
      analytics();
    }
  }, [data]);
  return (
    <>
      <div className="flex justify-center items-center mx-6 my-6  w-full">
        <div className="w-1/2 ">
          <div>
            <h1
              className="text-lg font-normal"
              style={{ color: "rgb(107 114 128)" }}
            >
              Followers Growth
            </h1>
            <div className="mt-6 mb-2 mx-6 flex flex-row items-center">
              {generalGrowthAnalyticsData.followersGrowth &&
              generalGrowthAnalyticsData.followersGrowth > 0 ? (
                <ArrowUpOutlined
                  className="mr-3"
                  style={{ fontSize: "20px", color: "#097969" }}
                />
              ) : generalGrowthAnalyticsData.followersGrowth &&
                generalGrowthAnalyticsData.followersGrowth <= 0 ? (
                <ArrowDownOutlined
                  className="mr-3"
                  style={{ fontSize: "20px", color: "red" }}
                />
              ) : null}
              <h2 className="text-2xl font-bold">
                {generalGrowthAnalyticsData.followersGrowth}
              </h2>
            </div>
          </div>
          <br />
          <div>
            <h1 className="text-lg mt-6" style={{ color: "rgb(107 114 128)" }}>
              Likes Growth
            </h1>
            <div className="mt-6 mb-2 mx-6 flex flex-row items-center">
              {generalGrowthAnalyticsData.likesGrowth &&
              generalGrowthAnalyticsData.likesGrowth > 0 ? (
                <ArrowUpOutlined
                  className="mr-3"
                  style={{ fontSize: "20px", color: "#097969" }}
                />
              ) : generalGrowthAnalyticsData.likesGrowth &&
                generalGrowthAnalyticsData.likesGrowth <= 0 ? (
                <ArrowDownOutlined
                  className="mr-3"
                  style={{ fontSize: "20px", color: "red" }}
                />
              ) : null}
              <h2 className="text-2xl font-bold">
                {generalGrowthAnalyticsData.likesGrowth}
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-6 w-1/2 bg-secondary">
          
        </div>
      </div>
    </>
  );
};

const followersGrowth = {
  component: (height, width, itemsLayout, data) => {
    return <FollowersGrowth data={data} />;
  },
  key: "followersGrowth",
  label: "Followers Growth",
  description: "Observe your followers growth over defined period of time.",
  icon: <LineChartOutlined />,
};

export default followersGrowth;
