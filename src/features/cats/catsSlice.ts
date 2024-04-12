import { createSlice } from "@reduxjs/toolkit";
import catsData from '../../assets/data/cat_data.json'

export const catsSlice = createSlice({
    name: 'cats',
    initialState:{
        catsArray: Object.values(catsData),
        totalCats: Object.values(catsData).length,
        totalPages: (Object.values(catsData).length)/10,
        totalNumberOfFavoriteCats: 0
    },
    reducers:{
        setArray: (state,action) =>{
            state.catsArray = action.payload
            state.totalNumberOfFavoriteCats= state.catsArray.filter(cat => cat.isFavorite).length
        },
        toggleFavorite: (state, action) => {
            const cat = state.catsArray[action.payload];
            if (cat) {
                cat.isFavorite = !cat.isFavorite;
                state.totalNumberOfFavoriteCats = state.catsArray.filter(cat => cat.isFavorite).length;
            }
        }
    }
})

export const {setArray, toggleFavorite} = catsSlice.actions

export default catsSlice.reducer