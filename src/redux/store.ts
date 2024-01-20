import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import lotteryApi from "./services/lotteryApi";

export const store = configureStore({
  reducer: {
    [lotteryApi.reducerPath]: lotteryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      lotteryApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
