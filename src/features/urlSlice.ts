import { createSlice } from "@reduxjs/toolkit";


export const urlSlice = createSlice({
    name:'url',
    initialState:{
        currentShopUrl: "",
        currentCatUrl: ""
    },
    reducers:{
        setCurrentShopUrl: (state,action) =>{
            state.currentShopUrl = action.payload
        },
        setCurrentCatUrl: (state,action) =>{
            state.currentCatUrl = action.payload
        }
    }
})

export const {setCurrentShopUrl, setCurrentCatUrl} = urlSlice.actions

export default urlSlice.reducer