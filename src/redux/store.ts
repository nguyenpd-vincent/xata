import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth/authApi";
import authReducer from "./features/auth/authSlice";
import chatReducer from "./features/chat/chatSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authSlice: authReducer,
      chatSlice: chatReducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
