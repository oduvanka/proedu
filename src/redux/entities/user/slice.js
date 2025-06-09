import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normalized-mock";

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById } = userSlice.selectors;
