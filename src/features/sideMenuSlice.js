import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const sideMenuSlice = createSlice({
    name: "side_menu",
    initialState,
    reducers: {
        invert: (state) => !state,
    },
});

export const { invert } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
