import { cookies } from 'next/headers'
import { LOCAL_STORAGE_TOKEN } from "@/const/common";

export const getAuthTokens = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(LOCAL_STORAGE_TOKEN);
  } else {
    return null;
  }
  // return cookies().get(LOCAL_STORAGE_TOKEN);
};