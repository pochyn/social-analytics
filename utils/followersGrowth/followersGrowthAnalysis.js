import DateFilter from "@/data/enum/dateFilter";

function formatISODateToDDMMYYYY(isoDate) {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

function followersGrowthProfileAnalysis(
  dataArr,
  dateRange = DateFilter.PastSevenDays
) {
  console.log("followersGrowthProfileAnalysis, props dataArr: ", dataArr);
  let generalGrowthAnalyticsData = {
    followersGrowth: null,
    likesGrowth: null,
  };
  if (!dataArr || dataArr.length == 0) {
    return generalGrowthAnalyticsData;
  }
  let followersGrowthDateArray = new Array(dateRange).fill(null);
  let likesGrowthDateArray = new Array(dateRange).fill(null);

  const latestFetchAt = dataArr[dataArr.length - 1];
  const earliestFetchedAt = dataArr[0];

  if (latestFetchAt.fetched_at == earliestFetchedAt.fetched_at) {
    console.log("latestFetchAt.fetched_at == earliestFetchedAt.fetched_at");
    const earliestCreateTimeVideo =
      latestFetchAt.videos[latestFetchAt.videos.length - 1];

    generalGrowthAnalyticsData = {
      followersGrowth: earliestCreateTimeVideo.authorMeta.fans,
      likesGrowth: earliestCreateTimeVideo.authorMeta.heart,
    };
    followersGrowthDateArray[0] = {
      y: earliestCreateTimeVideo.authorMeta.fans,
      x: formatISODateToDDMMYYYY(earliestFetchedAt.fetched_at),
    };
    likesGrowthDateArray[0] = {
      y: earliestCreateTimeVideo.authorMeta.heart,
      x: formatISODateToDDMMYYYY(earliestFetchedAt.fetched_at),
    };

    return {
      likesGrowthDateArray: likesGrowthDateArray,
      followersGrowthDateArray: followersGrowthDateArray,
      generalGrowthAnalyticsData: generalGrowthAnalyticsData,
    };
  } else {
    console.log("latestFetchAt.fetched_at != earliestFetchedAt.fetched_at");
    let followersAtBeginning = dataArr[0].videos[0].authorMeta.fans;
    let likesAtBeginning = dataArr[0].videos[0].authorMeta.heart;
    // console.log(
    //   `followersAtBeginning: ${followersAtBeginning}, likesAtBeginning: ${likesAtBeginning}`
    // );

    let followersAtEnd = dataArr[dataArr.length - 1].videos[0].authorMeta.fans;
    let likesAtEnd = dataArr[dataArr.length - 1].videos[0].authorMeta.heart;
    // console.log(`followersAtEnd: ${followersAtEnd}, likesAtEnd: ${likesAtEnd}`);

    generalGrowthAnalyticsData = {
      followersGrowth:
        parseInt(followersAtEnd) - parseInt(followersAtBeginning),
      likesGrowth: parseInt(likesAtEnd) - parseInt(likesAtBeginning),
    };

    for (let i = 0; i < dataArr.length; i++) {
      const curr = dataArr[i];

      followersGrowthDateArray[i] = {
        y: curr.videos[0].authorMeta.fans,
        x: formatISODateToDDMMYYYY(curr.fetched_at),
      };
      likesGrowthDateArray[i] = {
        y: curr.videos[0].diggCount,
        x: formatISODateToDDMMYYYY(curr.fetched_at),
      };
    }
    return {
      likesGrowthDateArray: likesGrowthDateArray,
      followersGrowthDateArray: followersGrowthDateArray,
      generalGrowthAnalyticsData: generalGrowthAnalyticsData,
    };
  }
}

module.exports = {
  followersGrowthProfileAnalysis,
};
