import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL, SERVER } from "../../components/app/const";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `${REQUEST_URL.REVIEW}/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: [{ type: "Reviews", id: "all" }],
    }),
  }),
});

export const { useAddReviewMutation } = api;
