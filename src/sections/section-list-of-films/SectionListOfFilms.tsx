import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../features/favorites/favoriteSlice';

import Section from '../../components/section/Section';
import FilmCard from '../../components/FilmCard/FilmCard';
import { films } from './SectionListOfFilms.const';
import styles from './SectionListOfFilms.module.css';
import type { RootState } from 'store/types/types';

interface IListOfFilms {
  searchTerm: string;
}

const SectionListOfFilms: React.FC<IListOfFilms> = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const [displayedFilms, setDisplayedFilms] = useState(films);
  const [visibleCount, setVisibleCount] = useState(16);

  useEffect(() => {
    const filteredMovies = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedFilms(filteredMovies.length > 0 ? filteredMovies : []);
  }, [searchTerm]);

  const handleShowMore = () => [setVisibleCount((prevCount) => prevCount + 16)];

  return (
    <Section colorType='ultralight' paddingSizeType='sm'>
      <div className={styles.container}>
        {displayedFilms.slice(0, visibleCount).map((film) => (
          <FilmCard
            key={film.title}
            {...film}
            isFavorite={favorites.some((f) => f.title === film.title)}
            onFavoriteToggle={() => dispatch(toggleFavorite(film))}
          />
        ))}
      </div>
      {visibleCount < displayedFilms.length && (
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
