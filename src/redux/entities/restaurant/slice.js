import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";
import { REQUEST_STATUS } from "../../../components/app/const.js";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectRestaurantSlice = (state) => state[restaurantSlice.name];

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantSlice);

export const { selectRequestStatus } = restaurantSlice.selectors;
