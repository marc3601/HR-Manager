import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const calendarContextSlice = createSlice({
  name: "calendar_context",
  initialState,
  reducers: {
    toogleContextMenu: (state) => (state = !state),
  },
});

export const { toogleContextMenu } = calendarContextSlice.actions;

export default calendarContextSlice.reducer;
