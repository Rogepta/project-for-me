import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IFilm {
   imageUrl: string,
   title: string,
   duration: string
}

export interface FavoritesFilm {
   favorites: IFilm[]
}

const initialState: FavoritesFilm = {
   favorites: JSON.parse(localStorage.getItem('favorites') || '[]') || [],
}

const favoritesSlice = createSlice({
   name: 'favorites',
   initialState,
   reducers: {
      toggleFavorite(state, action: PayloadAction<IFilm>) {
         const film: IFilm = action.payload;
         const existingFilm = state.favorites.find((f) => f.title === film.title);

         if (existingFilm) {
            state.favorites = state.favorites.filter((f) => f.title !== film.title);
         } else {
            state.favorites.push(film);
         }
         localStorage.setItem('favorites', JSON.stringify(state.favorites));
      },
   },
}
)

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer; 