import { createSlice } from "@reduxjs/toolkit";
import catsData from '../../assets/data/cat_data.json'

export const catsSlice = createSlice({
    name: 'cats',
    initialState:{
        catsArray: Object.values(catsData),
        totalCats: Object.values(catsData).length,
        totalPages: (Object.values(catsData).length)/10
    },
    reducers:{
        setArray: (state,action) =>{
            state.catsArray = action.payload
        }
    }
})

export const {setArray} = catsSlice.actions

export default catsSlice.reducer