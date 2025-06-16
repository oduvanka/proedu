import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../components/app/const.js";
import { selectRestaurantsIds } from "../restaurant/slice.js";

export const requestSlice = createSlice({
  name: "requestSlice",
  initialState: {},
  selectors: {
    selectRequestStatus: (state, requestId) =>
      state[requestId] || REQUEST_STATUS.IDLE,
    selectIsLoading: (state, requestId) =>
      state[requestId] || REQUEST_STATUS.PENDING,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith(REQUEST_STATUS.PENDING),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(REQUEST_STATUS.FULFILLED),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.FULFILLED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(REQUEST_STATUS.ERROR),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.ERROR;
        }
      ),
});

export const { selectRequestStatus } = requestSlice.selectors;
