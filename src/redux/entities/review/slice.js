import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaurantId";
import { REQUEST_STATUS } from "../../../components/app/const";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      }
    ),
});

const selectReviewSlice = (state) => state[reviewSlice.name];

export const { selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewSlice);

export const { selectRequestStatus } = reviewSlice.selectors;
