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

export async function fetchProfiles(profiles = []) {
  if (!profiles.length) return null;
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL_LOCALHOST}/v1/tiktok/profile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profiles }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed with status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(
      {
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle or log the error as appropriate for your application
    console.error("Error fetching profiles:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: error.status || 500 }
    );
  }
}
