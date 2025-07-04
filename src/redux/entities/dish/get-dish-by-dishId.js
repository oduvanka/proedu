import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";
import { selectDishById } from "./slice";

export const getDishByDishId = createAsyncThunk(
  "dish/getDishByDishId",
  async (dishId, rejectWithValue, dispatch, getState) => {
    const response = await fetch(`${SERVER}${REQUEST_URL.DISH}/${dishId}`);

    const result = await response.json();

    if (!result) rejectWithValue("no data");

    return result;
  },
  {
    condition: (dishId, { getState }) => !selectDishById(getState(), dishId),
  }
);
