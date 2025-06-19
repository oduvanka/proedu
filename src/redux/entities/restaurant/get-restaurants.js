import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";
import { selectRestaurantsIds } from "./slice";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, rejectWithValue, dispatch, getState) => {
    const api = REQUEST_URL.RESTAURANTS;
    const response = await fetch(`${SERVER}${api}`);

    const result = await response.json();

    if (!result?.length) rejectWithValue("no data");

    return result;
  },
  {
    condition: (_, { getState }) => !selectRestaurantsIds(getState()).length,
  }
);
