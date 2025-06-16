import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (_, rejectWithValue, dispatch, getState) => {
    const api = REQUEST_URL.REVIEWS();
    const response = await fetch(`${SERVER}${api}`);

    const result = await response.json();

    if (!result.length) rejectWithValue("no data");

    return result;
  }
);
