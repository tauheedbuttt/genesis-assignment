import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../apiConfig";

const lotteryApi = createApi({
  reducerPath: "lotteryApi",
  baseQuery,
  tagTypes: ["lottery"],
  endpoints: (builder) => ({
    getLottery: builder.query({
      query: (params: { lotteryType: "COSMIC" | "CLASSIC" | "ATOMIC" }) => ({
        url: "/get-lottery",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetLotteryQuery } = lotteryApi;
export default lotteryApi;
