import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";
import { selectDishById } from "./slice";

export const getDish = createAsyncThunk(
  "dish/getDish",
  async (dishId, rejectWithValue, dispatch, getState) => {
    const api = REQUEST_URL.DISH;
    const response = await fetch(`${SERVER}${api}/${dishId}`);

    const result = await response.json();

    if (!result) rejectWithValue("no data");

    return result;
  }
  /*{
    condition: (_, { getState }) => !selectDishById(getState()).length,
  }*/
);
