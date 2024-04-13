import { createSlice } from "@reduxjs/toolkit";
import catsData from '../../assets/data/cat_data.json'

const catsArray = Object.values(catsData).map((cat, index) => ({
    ...cat,
    id: index.toString(),  
  }))

export const catsSlice = createSlice({
    name: 'cats',
    initialState:{
        catsArray,
        totalCats: catsArray.length,
        totalPages: catsArray.length / 10,
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