import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";
import { REQUEST_STATUS } from "../../../components/app/const.js";

const entitiAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState: entitiAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entitiAdapter.setAll(state, payload);
    }),
});

const selectRestaurantSlice = (state) => state[restaurantSlice.name];

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
} = entitiAdapter.getSelectors(selectRestaurantSlice);

export const { selectRequestStatus } = restaurantSlice.selectors;
