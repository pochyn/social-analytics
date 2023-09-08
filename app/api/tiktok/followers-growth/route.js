import { NextResponse } from "next/server";
import { DynamoDB } from "aws-sdk";
import { DateFilter } from "../../../../data/enum/dateFilter";
require("dotenv").config();

function getPastDateISO(daysBefore) {
  const today = new Date();
  today.setDate(today.getDate() - 14);
  return today.toISOString();
}

export async function GET(req) {
  let { username, endDate } = Object.fromEntries(
    req.nextUrl.searchParams.entries()
  );

  console.log(
    `Username from search params is: ${username}, endDate is: ${endDate}`
  );

  if (!username) {
    return NextResponse.json(
      {
        error: true,
        message: "username is required",
      },
      { status: err.code || 500 }
    );
  }
  const dynamoDB = new DynamoDB.DocumentClient({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
    },
    region: "us-east-1",
  });
  username = "test_user123"; // for testing
  try {
    const params = {
      TableName: "tiktok-username",
      KeyConditionExpression:
        "#user = :usernameVal AND #dateAttr BETWEEN :startDate AND :endDate",
      ExpressionAttributeNames: {
        "#user": "username",
        "#dateAttr": "fetched_at", // replace 'date' with the name of your date attribute if different
      },
      ExpressionAttributeValues: {
        ":usernameVal": username,
        ":startDate": getPastDateISO(parseInt(endDate)), // replace with your desired start date
        ":endDate": new Date().toISOString(), // replace with your desired end date
      },
    };

    // Note: without the .promise() NextResponse.json({res}) won't work
    const data = await dynamoDB.query(params).promise();

    data.Items.forEach(function (item) {
      console.log(item);
    });

    const res = await data.Items;
    console.log("RESULT ________ ", res);

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    console.error("Error fetching profile follower growth ", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: error.status || 500 }
    );
  }
}
