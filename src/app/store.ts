import { combineReducers, configureStore } from '@reduxjs/toolkit'
import catsReducer from '../features/cats/catsSlice'
import componentReducer from '../features/componentSlice'
import urlReducer from '../features/urlSlice'

const rootReducer = combineReducers({
    cats: catsReducer,
    component: componentReducer,
    url: urlReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export default store
