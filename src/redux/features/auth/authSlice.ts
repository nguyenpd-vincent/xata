import {
  LOCAL_STORAGE_REFRESH_TOKEN,
  LOCAL_STORAGE_TOKEN,
} from "@/const/common";
import { authApi } from "@/redux/api/auth/authApi";
import { RootState } from "@/redux/store";
import { Auth } from "@/types/auth/auth.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let token: Auth.LoginResponse = {};

if (typeof window !== "undefined") {
  const accessToken = window.localStorage.getItem(LOCAL_STORAGE_TOKEN);
  const refreshToken = window.localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN);

  token = {
    accessToken: accessToken && accessToken !== "" ? accessToken : "",
    refreshToken: refreshToken && refreshToken !== "" ? refreshToken : "",
  };
}

const initialState: Auth.InitialState = {
  token,
  refreshToken: undefined,
  userInfo: undefined,
  // userImageInConversation: [],
};

const setTokenAndRefreshTokenToLocalStorage = (
  accessToken: string,
  refreshToken: string
) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN, accessToken);
    window.localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
    // cookies().set({
    //   name: LOCAL_STORAGE_TOKEN,
    //   value: accessToken,
    //   httpOnly: true,
    //   path: "/",
    // });

    // cookies().set({
    //   name: LOCAL_STORAGE_REFRESH_TOKEN,
    //   value: refreshToken,
    //   httpOnly: true,
    //   path: "/",
    // });
  }
};

const setAccessTokenNew = (accessToken: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN, accessToken);
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    // resetUserImage: (_state) => {
    //   _state.userImageInConversation = [];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (_state, { payload }) => {
          _state.token = {
            accessToken: payload?.accessToken,
            refreshToken: payload?.refreshToken,
          };
          setTokenAndRefreshTokenToLocalStorage(
            payload?.accessToken ?? "",
            payload?.refreshToken ?? ""
          );
        }
      )
      .addMatcher(
        authApi.endpoints.getUserInfo.matchFulfilled,
        (_state, { payload }) => {
          _state.userInfo = payload;
        }
      )
      .addMatcher(
        authApi.endpoints.refreshToken.matchFulfilled,
        (_state, { payload }) => {
          _state.token = {
            ..._state.token,
            accessToken: payload?.accessToken,
          };
          setAccessTokenNew(payload?.accessToken ?? "");
        }
      )
      .addMatcher(
        authApi.endpoints.getUserImage.matchFulfilled,
        (_state, { payload }) => {
          // if (_state.userImageInConversation) {
          //   _state.userImageInConversation = [
          //     ..._state.userImageInConversation,
          //     payload,
          //   ];
          // }
        }
      );
  },
});

export const { logout } = authSlice.actions;

export const selectAuthResponse = (state: RootState) => state?.authSlice;

export default authSlice.reducer;
