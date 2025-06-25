import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleFavorite,
  type IFilm,
} from '../../features/favorites/favoriteSlice';

import Section from '../../components/section/Section';
import FilmCard from '../../components/FilmCard/FilmCard';
import styles from './SectionListOfFilms.module.css';
import type { RootState } from 'store/types/types';
import axios from 'axios';

interface IListOfFilms {
  searchTerm: string;
}

const SectionListOfFilms: React.FC<IListOfFilms> = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const [filmsFrom, setFilmsFrom] = useState<IFilm[]>([]);
  const [displayedFilms, setDisplayedFilms] = useState(filmsFrom);
  const [visibleCount, setVisibleCount] = useState(16);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<IFilm[]>(
          'http://localhost:3000/films'
        );
        setFilmsFrom(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilms();
  }, []);

  useEffect(() => {
    const filteredMovies = filmsFrom.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedFilms(filteredMovies.length > 0 ? filteredMovies : []);
  }, [filmsFrom, searchTerm]);

  const handleShowMore = () => setVisibleCount((prevCount) => prevCount + 16);

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <Section colorType='ultralight' paddingSizeType='sm'>
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loader}>Загрузка...</div>
        ) : (
          displayedFilms
            .slice(0, visibleCount)
            .map((film) => (
              <FilmCard
                key={film.title}
                film={film}
                isFavorite={favorites.some((f) => f.title === film.title)}
                onFavoriteToggle={() => dispatch(toggleFavorite(film))}
              />
            ))
        )}
      </div>
      {visibleCount < displayedFilms.length && !isLoading && (
        <div className={styles.button}>
          <button type='button' onClick={handleShowMore}>
            Еще
          </button>
        </div>
      )}
    </Section>
  );
};

export default SectionListOfFilms;
