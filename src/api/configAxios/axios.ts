import axios from "axios";
import { LOCAL_STORAGE_TOKEN } from "@/const/common";

const accessToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(LOCAL_STORAGE_TOKEN);
  } else {
    return null;
  }
};

export default axios.create({
  baseURL: process.env.BASE_URL || "localhost:8080",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken()}`,
  },
});
