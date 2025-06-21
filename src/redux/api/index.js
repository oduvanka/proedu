import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REQUEST_URL, SERVER } from "../../components/app/const";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => REQUEST_URL.RESTAURANTS,
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) =>
        `${REQUEST_URL.DISHES}?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `${REQUEST_URL.DISH}/${dishId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) =>
        `${REQUEST_URL.REVIEWS}?restaurantId=${restaurantId}`,
      providesTags: [{ type: "Reviews", id: "all" }],
    }),
    getUsers: builder.query({
      query: () => REQUEST_URL.USERS,
    }),
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

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetDishByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useAddReviewMutation,
} = api;
