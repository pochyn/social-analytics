import axios from 'axios';

let BASE_URL = process.env.NODE_ENV === 'development' ? `${process.env.NEXT_PUBLIC_BACKEND_URL_LOCALHOST}/v1/tiktok` : `${process.env.BACKEND_URL_CLOUD}/v1/tiktok`;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 120000, // Example of adding additional configuration options
});

export const fetchTiktokProfile = async(profile) => {
    console.log("JSON.stringify(profile): ", JSON.stringify(profile));
    try {
        const response = await api.post('/profile', { profiles: profile });
        console.log("Response.data: ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}