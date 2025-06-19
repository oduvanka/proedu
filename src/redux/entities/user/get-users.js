import { createAsyncThunk } from "@reduxjs/toolkit";
import { REQUEST_URL, SERVER } from "../../../components/app/const";
import { selectUsersIds } from "./slice";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, rejectWithValue, dispatch, getState) => {
    const api = REQUEST_URL.USERS;
    const response = await fetch(`${SERVER}${api}`);

    const result = await response.json();

    if (!result?.length) rejectWithValue("no data");

    return result;
  },
  {
    condition: (_, { getState }) => !selectUsersIds(getState()).length,
  }
);
