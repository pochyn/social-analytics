import DateFilter from "@/data/enum/dateFilter";
import { LineChartOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const FollowersGrowth = ({ data }) => {
  let followerGrowthObject;

  const authorMeta = data[0]?.authorMeta ?? {};
  console.log("authorMeta: ", authorMeta);
  console.log(authorMeta.name);
  useEffect(() => {
    console.log("Followers growth useEffect ");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/tiktok/followers-growth?username=${authorMeta?.name}&endDate=${DateFilter.PastFourteenDays}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const responseData = await response.json();
        if (responseData) {
          console.log("follower growth response: ", responseData);
        }
      } catch (error) {
        console.error("Error fetching followers growth:", error);
      }
    };

    if (data && authorMeta?.name) {
      fetchData();
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
              <ArrowUpOutlined
                className="mr-3"
                style={{ fontSize: "20px", color: "black" }}
              />
              <h2 className="text-2xl font-bold">27.1K</h2>
            </div>
            <div className="flex flex-row items-center ml-7">
              <h3 className="text-lg" style={{ color: "rgb(5 150 105)" }}>
                Good
              </h3>
            </div>
          </div>
          <br />
          <div>
            <h1 className="text-lg mt-6" style={{ color: "rgb(107 114 128)" }}>
              Likes Growth
            </h1>
            <div className="mt-6 mb-2 mx-6 flex flex-row items-center">
              <ArrowUpOutlined
                className="mr-3"
                style={{ fontSize: "20px", color: "black" }}
              />
              <h2 className="text-2xl font-bold">320.1K</h2>
            </div>
            <div className="flex flex-row items-center ml-7">
              <h3 className="text-lg" style={{ color: "rgb(91 33 182)" }}>
                Excellent
              </h3>
            </div>
          </div>
        </div>
        <div className="mx-6 w-1/2 bg-secondary">
          <h1 className="text-xl">Hola Bro</h1>
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
