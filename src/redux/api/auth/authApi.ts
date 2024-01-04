// store/authApi.ts
import { RootState } from "@/redux/store";
import { Auth } from "@/types/auth/auth.type";
import { Image } from "@/types/image/image";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL || "http://localhost:8080",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      const token = (getState() as RootState)?.authSlice?.token?.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Auth.LoginResponse, Auth.LoginPayload>({
      query: ({ username, password }) => ({
        url: "/auth/signin",
        method: "POST",
        body: {
          username,
          password,
        },
      }),
    }),
    getUserInfo: builder.query<Auth.UserDetails, null>({
      query: () => ({
        url: "/v0/users/auth-details",
        method: "GET",
      }),
    }),
    refreshToken: builder.query<Auth.RefreshTokenResponse, null>({
      query: () => ({
        url: "/auth/refresh-token",
        method: "GET",
      }),
    }),
    getUserImage: builder.mutation<Image.ImageResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: `/v0/users/${userId}/image-avatar`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserInfoQuery,
  useRefreshTokenQuery,
  useGetUserImageMutation,
} = authApi;
