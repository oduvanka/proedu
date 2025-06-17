import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, rejectWithValue, dispatch, getState) => {
    const api = REQUEST_URL.DISHES;
    const response = await fetch(
      `${SERVER}${api}?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) rejectWithValue("no data");

    return result;
  }
);
