import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8090/",
  }),
  endpoints: (builder) => ({


    
    getAdsList: builder.query({
      query: () => ({
        url: "/ads",
      }),
    }),

    // getWorkoutList: builder.query({
    //   query: () => ({
    //     url: "/workout.json",
    //   }),
    // }),
  }),

  
});

export const { useGetAdsListQuery } = adsApi;
