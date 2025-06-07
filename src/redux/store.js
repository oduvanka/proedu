import { configureStore } from "@reduxjs/toolkit";
import { restrauntSlice } from "./entities/restraunt/slice";
import { dishSlice } from "./entities/dish/slice";
import { reviewSlice } from "./entities/review/slice";
import { userSlice } from "./entities/user/slice";

export const store = configureStore({
  reducer: {
    [restrauntSlice.name]: restrauntSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
