import axios from "axios";

const BASE_URL = "https://qrep-api.herokuapp.com/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

