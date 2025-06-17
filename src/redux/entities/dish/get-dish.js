import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";

export const getDish = createAsyncThunk(
  "dish/getDish",
  async (dishId, rejectWithValue, dispatch, getState) => {
    const api = REQUEST_URL.DISH;
    const response = await fetch(`${SERVER}${api}/${dishId}`);

    const result = await response.json();

    if (!result.length) rejectWithValue("no data");

    return result;
  }
);
