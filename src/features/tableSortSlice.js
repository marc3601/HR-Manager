import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = [];

export const tableSortSlice = createSlice({
    name: "table_sort",
    initialState,
    reducers: {
        setTableState: (state, action) => {
            let temp = [];
            for (let i = 0; i < action.payload; i++) {
                temp.push({
                    id: i,
                    asc: false,
                    desc: false,
                });
            }
            return temp;
        },
        sortTable: produce((draft, action) => {
            return draft.map((item, i) => {
                if (i === action.payload) {
                    if (!item.asc && !item.desc) {
                        return { ...item, asc: !item.asc, desc: item.desc };
                    } else if ((item.asc && !item.desc) || (!item.asc && item.desc)) {
                        return { ...item, asc: !item.asc, desc: !item.desc };
                    }
                    return item;
                } else
                    return {
                        ...item,
                        asc: false,
                        desc: false,
                    };
            });
        }),
    },
});

export const { setTableState, sortTable } = tableSortSlice.actions;

export default tableSortSlice.reducer;
