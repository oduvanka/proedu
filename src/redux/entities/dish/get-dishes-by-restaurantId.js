import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",
  async (restaurantId, rejectWithValue, dispatch, getState) => {
    const response = await fetch(
      `${SERVER}${REQUEST_URL.DISHES}?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result?.length) rejectWithValue("no data");

    return result;
  }
);
