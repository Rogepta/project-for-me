import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoriteSlice'

const store = configureStore({
   reducer: {
      favorites: favoritesReducer,
   }
})

export default store