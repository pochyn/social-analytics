import { NextResponse } from "next/server";
import calculateSecretHash from "@/utils/calculateHash";
import { CognitoIdentityServiceProvider } from "aws-sdk";
require("dotenv").config();

export async function GET(req) {
  return NextResponse.json(
    {
      message: "User registered successfully",
    },
    { status: 200 }
  );
}
