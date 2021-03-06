import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/sideMenuSlice";
import tableReducer from "./features/tableSortSlice";
import calendarContextReducer from "./features/calendarContextSlice";
import currentMonthReducer from "./features/currentMonthSlice";
import calendarEmployeeSlice from "./features/calendarEmployeeSlice";
import loaderSlice from "./features/loaderSlice";
export const store = configureStore({
  reducer: {
    side_menu: menuReducer,
    table_sort: tableReducer,
    calendar_context: calendarContextReducer,
    current_month: currentMonthReducer,
    calendar_employee: calendarEmployeeSlice,
    loader: loaderSlice,
  },
});
