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
         const film: IFilm = action.payload; // Получаем фильм из действия
         const existingFilm = state.favorites.find((f) => f.title === film.title); // Проверяем, есть ли он в избранном

         if (existingFilm) {
            // Если фильм уже есть в избранном, убираем его
            state.favorites = state.favorites.filter((f) => f.title !== film.title);
         } else {
            // Если фильма нет, добавляем его в избранное
            state.favorites.push(film);
         }
         localStorage.setItem('favorites', JSON.stringify(state.favorites));
      },
   },
}
)

export const { toggleFavorite } = favoritesSlice.actions; // Экспортируем действие для использования в компонентах
export default favoritesSlice.reducer; // Экспортируем редюсер