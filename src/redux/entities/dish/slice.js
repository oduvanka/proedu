import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../materials/normalized-mock";

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
};

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishById } = dishSlice.selectors;
