import { NextResponse } from "next/server";
import calculateSecretHash from "@/utils/calculateHash";
import { CognitoIdentityServiceProvider } from "aws-sdk";
require("dotenv").config();

export async function POST(req) {
  const body = await req.json();
  const { username, password, account_type } = body;

  if (!(username && password)) {
    return NextResponse.json(
      {
        error: true,
        message: "username and password are required",
      },
      { status: err.code || 500 }
    );
  }

  const cognito = new CognitoIdentityServiceProvider({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
  });

  try {
    await cognito
      .signUp({
        ClientId: process.env.COGNITO_CLIENT_ID,
        Username: username,
        Password: password,
        SecretHash: calculateSecretHash(
          process.env.COGNITO_CLIENT_ID,
          process.env.COGNITO_CLIENT_SECRET,
          username
        ),
        UserAttributes: [
          {
            Name: "custom:account_type",
            Value: account_type || "0",
          },
        ],
      })
      .promise();

    return NextResponse.json(
      {
        message: "User registered successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: true,
        message: "Internal Server Error",
      },
      { status: error.code || 500 }
    );
  }
}
