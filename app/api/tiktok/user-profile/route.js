import { NextResponse } from "next/server";
require("dotenv").config();

export async function GET(req) {
  const data = await fetch(
    `${process.env.BACKEND_URL_LOCALHOST}/v1/tiktok/profile`,
    {
      method: "POST",
      body: JSON.stringify({ profiles: "taylorswift" }),
    }
  );
  return NextResponse.json(
    {
      data,
    },
    { status: 200 }
  );
}
