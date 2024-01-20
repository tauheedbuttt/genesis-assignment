import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://testing-luckito-backend.rnssol.com/api/luckito/lottery",
});

export default baseQuery;
