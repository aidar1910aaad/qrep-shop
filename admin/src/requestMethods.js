import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGM0MDU0NjczZjM0NDQwZWYzOTkxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDIwODc4MSwiZXhwIjoxNjU0NDY3OTgxfQ.YZaKVc5TIO9Mvo8Wcd4VD-E1_H8FOkzp478wF7zbieA"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
