import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/sideMenuSlice"
import tableReducer from "./features/tableSortSlice"
export const store = configureStore({
    reducer: {
        side_menu: menuReducer,
        table_sort: tableReducer
    },
})