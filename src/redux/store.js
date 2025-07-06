import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entities/cart/slice";
import { requestSlice } from "./entities/request/slice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});
