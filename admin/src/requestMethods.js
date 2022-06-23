import axios from "axios";

const BASE_URL = "https://qrep-api-2.herokuapp.com/api/";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

