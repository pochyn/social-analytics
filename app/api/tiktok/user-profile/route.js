import { NextResponse } from "next/server";
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

  try {
    const data = await fetch(`${process.env.BACKEND_URL}/v1/tiktok/profile`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profiles: profilesArr }),
    });

    const response = await data.json();
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