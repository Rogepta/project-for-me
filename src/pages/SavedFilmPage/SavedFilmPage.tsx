import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../features/favorites/favoriteSlice';

import Section from '@components/section/Section';
import { MainLayout } from '@components/shared/MainLayout/MainLayout';
import FilmCard from '@components/FilmCard/FilmCard';
import styles from '../SavedFilmPage/SavedFilmPage.module.css';
import type { RootState } from 'store/types/types';

export const SavedFilmPage: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return (
    <>
      <MainLayout>
          <Section colorType='ultralight' paddingSizeType='sm'>
            {favorites.length === 0 ? (
              <p>У вас нет сохраненных фильмов</p>
            ) : (
              <div className={styles.container}>
                {favorites.map((film) => (
                  <FilmCard
                    key={film.title}
                    {...film}
                    isFavorite={true}
                    onFavoriteToggle={() => dispatch(toggleFavorite(film))}
                  />
                ))}
              </div>
            )}
          </Section>
      </MainLayout>
    </>
  );
};
