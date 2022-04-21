import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    targetID: 0,
    cord: { x: 0, y: 0 },
};

export const calendarContextSlice = createSlice({
    name: "calendar_context",
    initialState,
    reducers: {
        hideContextMenu: (state) => {
            return initialState;
        },
        toogleContextMenu: (state, action) => ({
            show: !state.show,
            targetID: action.payload.targetID ? parseInt(action.payload.targetID) : 0,
            cord: { x: action.payload.cord.x, y: action.payload.cord.y },
        }),
    },
});

export const { hideContextMenu, toogleContextMenu } =
    calendarContextSlice.actions;

export default calendarContextSlice.reducer;
