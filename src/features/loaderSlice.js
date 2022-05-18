import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    toogleLoader: (state) => !state,
  },
});

export const { toogleLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
