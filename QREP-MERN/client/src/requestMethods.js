import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGM0MDU0NjczZjM0NDQwZWYzOTkxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzUwMTc3NywiZXhwIjoxNjUzNzYwOTc3fQ.VsnHO5MOXiI6r5WZDch6-I5hTLil7cQr4nS0xlF4U3E"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
