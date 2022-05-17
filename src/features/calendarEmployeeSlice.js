import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const calendarEmployeeSlice = createSlice({
  name: "calendar_employee",
  initialState,
  reducers: {
    setCalendarEmployee: (state, action) => (state = action.payload),
  },
});

export const { setCalendarEmployee } = calendarEmployeeSlice.actions;

export default calendarEmployeeSlice.reducer;
