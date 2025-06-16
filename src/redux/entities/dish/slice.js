import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../components/app/const";
import { getDishes } from "./get-dishes";

const entitiAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState: entitiAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      entitiAdapter.setAll(state, payload);
    }),
});

const selectDishSlice = (state) => state[dishSlice.name];

export const { selectById: selectDishById } =
  entitiAdapter.getSelectors(selectDishSlice);

export const { selectRequestStatus } = dishSlice.selectors;
