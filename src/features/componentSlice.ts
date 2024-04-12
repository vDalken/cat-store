import { createSlice } from "@reduxjs/toolkit";

export const componentSlice = createSlice({
    name:'component',
    initialState:{
        isAtCats: false,
    },
    reducers:{
        setIsAtCats: (state, action) =>{
            state.isAtCats = action.payload
        }
    }
})

export const {setIsAtCats} = componentSlice.actions

export default componentSlice.reducer