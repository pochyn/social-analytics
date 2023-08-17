import axios from "axios";

let BASE_URL = `${process.env.BACKEND_URL}/v1/tiktok`;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 120000, // Example of adding additional configuration options
});

export const fetchTiktokProfile = async (profile) => {
  try {
    const response = await api.post("/profile", { profiles: profile });
    console.log("Response.data: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
