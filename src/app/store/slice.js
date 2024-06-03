import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'dataClient',
    initialState: {},

    reducers: {
        saveData: (state, action) => {
            state = action.payload;

            return { 
                ...state
            }
        }
    }
})

export const { saveData } = Slice.actions;