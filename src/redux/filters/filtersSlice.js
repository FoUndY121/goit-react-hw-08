import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "",  // логично: фильтр по имени
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const {setFilter} = filtersSlice.actions;
export default filtersSlice.reducer;