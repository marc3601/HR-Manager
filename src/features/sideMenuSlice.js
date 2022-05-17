import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const sideMenuSlice = createSlice({
  name: "side_menu",
  initialState,
  reducers: {
    toogle: (state) => !state,
  },
});

export const { toogle } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
