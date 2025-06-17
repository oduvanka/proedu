import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../components/app/const";
import { getDishes } from "./get-dishes";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectDishSlice = (state) => state[dishSlice.name];

export const { selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishSlice);

export const { selectRequestStatus } = dishSlice.selectors;
