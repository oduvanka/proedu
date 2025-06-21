import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, rejectWithValue, dispatch, getState) => {
    const response = await fetch(
      `${SERVER}${REQUEST_URL.REVIEWS}?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result?.length) rejectWithValue("no data");

    return result;
  }
);
