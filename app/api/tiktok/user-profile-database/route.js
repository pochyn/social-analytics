import { NextResponse } from "next/server";
import { DynamoDB } from "aws-sdk";

require("dotenv").config();

export async function POST(req) {
  const body = await req.json();
  const { profilesArr } = body;

  if (!profilesArr.length) {
    return NextResponse.json(
      {
        error: true,
        message: "profiles array is required",
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

  try {
    const params = {
      Key: {
        username: {
          S: profilesArr?.[0],
        },
        fetched_at: {
          S: "2023-08-29T23:21:24.586Z",
        },
      },
      TableName: "tiktok-username",
    };

    console.log("**** params", params);

    const data = await dynamoDB.get(params).promise();
    console.log("**** data", data.Item);

    return NextResponse.json({ response: "" }, { status: 200 });
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
