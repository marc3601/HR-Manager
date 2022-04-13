import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/sideMenuSlice"
export const store = configureStore({
    reducer: {
        side_menu: menuReducer,
    },
})