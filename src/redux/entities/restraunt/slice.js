import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalized-mock.js";

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restraunt) => {
    acc[restraunt.id] = restraunt;
    return acc;
  }, {}),
};

export const restrauntSlice = createSlice({
  name: "restrauntSlice",
  initialState,
  selectors: {
    selectRestrauntIds: (state) => state.ids,
    selectRestrauntById: (state, id) => state.entities[id],
  },
});

export const { selectRestrauntIds, selectRestrauntById } =
  restrauntSlice.selectors;
