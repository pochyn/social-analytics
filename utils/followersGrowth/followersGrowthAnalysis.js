import DateFilter from "@/data/enum/dateFilter";

function followersGrowthProfileAnalysis(
  dataArr,
  dateRange = DateFilter.PastSevenDays
) {
  let generalGrowthAnalyticsData = {
    followersGrowth: null,
    likesGrowth: null,
  };
  if (!dataArr || dataArr.length == 0) {
    return generalGrowthAnalyticsData;
  }
  let dateData = new Array(dateRange).fill(null);

  const latestFetchAt = dataArr[dataArr.length - 1];
  const earliestFetchedAt = dataArr[0];

  // console.log("dataArr: ", dataArr);
  // console.log("data array index 0", dataArr[0]);
  if (latestFetchAt.fetched_at == earliestFetchedAt.fetched_at) {
    // console.log("atestFetchAt.fetched_at == earliestFetchedAt.fetched_at");
    const earliestCreateTimeVideo =
      latestFetchAt.videos[latestFetchAt.videos.length - 1];

    generalGrowthAnalyticsData = {
      followersGrowth: earliestCreateTimeVideo.authorMeta.fans,
      likesGrowth: earliestCreateTimeVideo.diggCount,
    };
    dateData[0] = {
      followersGrowth: earliestCreateTimeVideo.authorMeta.fans,
      likesGrowth: earliestCreateTimeVideo.diggCount,
    };

    return {
      dateData: dateData,
      generalGrowthAnalyticsData: generalGrowthAnalyticsData,
    };
  } else {
    // console.log("latestFetchAt.fetched_at != earliestFetchedAt.fetched_at");
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
      // console.log("Curr: ", curr);

      dateData[i] = {
        followersGrowth: curr.videos[0].authorMeta.fans,
        likesGrowth: curr.videos[0].diggCount,
        date: curr.fetched_at,
      };
    }

    return {
      dateData: dateData,
      generalGrowthAnalyticsData: generalGrowthAnalyticsData,
    };
  }
}

module.exports = {
  followersGrowthProfileAnalysis,
};
