import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://localhost:7221";
export const CHAT_HUB_URL = `${BASE_URL}/ChatHub`;
export const NOTIFICATION_HUB_URL = `${BASE_URL}/NotificationHub`;
const token = Cookies.get("token");

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
