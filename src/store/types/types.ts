// types.ts или rootReducer.ts
// types.ts или rootReducer.ts
import type { FavoritesFilm } from '../../features/favorites/favoriteSlice';

export interface RootState {
   favorites: FavoritesFilm; // Здесь описываем структуру состояния для избранных фильмов
}
