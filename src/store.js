import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/sideMenuSlice"
import tableReducer from "./features/tableSortSlice"
import calendarContextReducer from "./features/calendarContextSlice"
export const store = configureStore({
    reducer: {
        side_menu: menuReducer,
        table_sort: tableReducer,
        calendar_context: calendarContextReducer
    },
})