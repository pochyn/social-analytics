import { NextResponse } from "next/server";
import { DynamoDB } from "aws-sdk";
const {
  UserProfileMockData,
} = require("../../../../mock_data/userProfileMockData");

require("dotenv").config();

function getPastDateISO(daysBefore) {
  const today = new Date();
  today.setDate(today.getDate() - daysBefore);
  return today.toISOString();
}

export async function POST(req) {
  const body = await req.json();
  const { username } = body;

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
  console.log(
    "--- UserProfileMockData ---: ",
    UserProfileMockData.test_user123
  );
  try {
    const data = await fetch(`${process.env.BACKEND_URL}/v1/tiktok/profile`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profiles: [username] }),
    });

    const response = await data.json();
    // username = "test_user123";
    const item = {
      TableName: "tiktok-username",
      Item: {
        username,
        fetched_at: new Date().toISOString(),
        videos: response,
      },
    };

    await dynamoDB.put(item).promise();

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: error.status || 500 }
    );
  }
}
