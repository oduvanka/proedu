import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../components/app/const";
import { getDishesByRestaurantId } from "./get-dishes-by-restaurantId";
import { getDishByDishId } from "./get-dish-by-dishId";

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
    builder
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDishByDishId.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

const selectDishSlice = (state) => state[dishSlice.name];

export const { selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishSlice);

export const { selectRequestStatus } = dishSlice.selectors;
