import DateFilter from "@/data/enum/dateFilter";
import dynamic from "next/dynamic";

const ResponsiveLine = dynamic(
  () => import("@nivo/line").then((m) => m.ResponsiveLine),
  { ssr: false }
);
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
  const [likesGrowthDateArray, setLikesGrowthDateArray] = useState({
    id: "Likes",
    color: "HSL(223°, 43%, 40%)",
    data: [],
  });
  const [followersGrowthDateArray, setFollowersGrowthDateArray] = useState({
    id: "Followers",
    color: "HSL(223°, 43%, 40%)",
    data: [],
  });

  function formatNumberWithCommas(num) {
    if (num) {
      return num.toLocaleString("en-US");
    }
    return "";
  }

  const MyResponsiveLine = ({ dataLine /* see data tab */ }) => (
    <ResponsiveLine
      data={dataLine}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      curve="monotoneX"
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Date",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(33, 22, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
  useEffect(() => {
    const analytics = () => {
      let {
        likesGrowthDateArray,
        followersGrowthDateArray,
        generalGrowthAnalyticsData,
      } = followersGrowthProfileAnalysis(data, DateFilter.PastSevenDays);

      console.log("likesGrowthDateArray: ", likesGrowthDateArray);
      console.log("followersGrowthDateArray: ", followersGrowthDateArray);

      setGeneralGrowthAnalyticsData((prevState) => ({
        ...prevState,
        followersGrowth: generalGrowthAnalyticsData?.followersGrowth,
        likesGrowth: generalGrowthAnalyticsData?.likesGrowth,
      }));
      setFollowersGrowthDateArray((prevDateData) => ({
        ...prevDateData,
        data: followersGrowthDateArray,
      }));
      setLikesGrowthDateArray((prevDateData) => ({
        ...prevDateData,
        data: likesGrowthDateArray,
      }));
    };

    if (data) {
      analytics();
    }
  }, [data]);
  return (
    <>
      <div className="w-full">
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
              {formatNumberWithCommas(
                generalGrowthAnalyticsData.followersGrowth
              )}
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
              {formatNumberWithCommas(generalGrowthAnalyticsData.likesGrowth)}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap   mt-10">
        <div
          className="w-1/2 md:w-1/2 mx-auto bg-graphLine"
          style={{ height: "300px", width: "600px" }}
        >
          {likesGrowthDateArray.data ? (
            <MyResponsiveLine dataLine={[likesGrowthDateArray]} />
          ) : (
            ""
          )}
        </div>
        <div
          className="w-1/2 md:w-1/2 mx-auto bg-graphLine"
          style={{ height: "300px", width: "600px" }}
        >
          {followersGrowthDateArray.data ? (
            <MyResponsiveLine dataLine={[followersGrowthDateArray]} />
          ) : (
            ""
          )}
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
