import { createSlice } from "@reduxjs/toolkit";
import { getCurrentMonth } from "../utilities/viewsData";

const initialState = getCurrentMonth();

export const currentMonthSlice = createSlice({
  name: "current_month",
  initialState,
  reducers: {
    setCurrentMonthDown: (state) => {
      if (state > 0 && state <= 11) {
        return (state -= 1);
      } else return state;
    },
    setCurrentMonthUp: (state) => {
      if (state >= 0 && state < 11) {
        return (state += 1);
      } else return state;
    },
  },
});

export const { setCurrentMonthDown, setCurrentMonthUp } =
  currentMonthSlice.actions;

export default currentMonthSlice.reducer;
