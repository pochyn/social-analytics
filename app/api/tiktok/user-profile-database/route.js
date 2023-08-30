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
      KeyConditionExpression: "username = :usernameVal",
      ExpressionAttributeValues: {
        ":usernameVal": profilesArr?.[0],
      },
      TableName: "tiktok-username",
    };

    const data = await dynamoDB.query(params).promise();

    return NextResponse.json(
      { response: data?.Items?.[0]?.videos || null },
      { status: 200 }
    );
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