import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../components/app/const";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "userSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectUserSlice = (state) => state[userSlice.name];

export const { selectById: selectUserById } =
  entityAdapter.getSelectors(selectUserSlice);

export const { selectRequestStatus } = userSlice.selectors;
