import { NextResponse } from "next/server";
import { DynamoDB } from "aws-sdk";

require("dotenv").config();

function getPastDateISO(daysBefore) {
  const today = new Date();
  today.setDate(today.getDate() - daysBefore);
  return today.toISOString();
}

export async function POST(req) {
  const body = await req.json();
  let { username, endDate } = body;

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
        ":usernameVal": (username = "test_user123"),
        ":startDate": getPastDateISO(parseInt((endDate = 30))), // replace with your desired start date
        ":endDate": new Date().toISOString(), // replace with your desired end date
      },
    };

    const data = await dynamoDB.query(params).promise();

    return NextResponse.json(
      { response: data?.Items || null },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching profile from database:", error);
    return NextResponse.json(
      {
        response: null,
      },
      { status: error.status || 500 }
    );
  }
}
