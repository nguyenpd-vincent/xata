// store/authApi.ts
import { RootState } from "@/redux/store";
import { Datastore } from "@/types/datastore/datastore.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const datastoreApi = createApi({
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
    getDatastores: builder.query<Datastore.Record[], null>({
      query: () => ({
        url: "/v0/users/auth-details",
        method: "GET",
      }),
    }),
   
  }),
});

export const {useGetDatastoresQuery} = datastoreApi;
