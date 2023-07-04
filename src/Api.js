import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = "https://localhost:7221";

const token = Cookies.get("token");

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
