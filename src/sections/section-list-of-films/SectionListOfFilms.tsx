import Section from '../../components/section/Section';
import FilmCard from '../../components/FilmCard/FilmCard';
import React, { useEffect, useState } from 'react';
import { films } from './SectionListOfFilms.const';
import styles from './SectionListOfFilms.module.css';

interface IListOfFilms {
  searchTerm: string;
}

const SectionListOfFilms: React.FC<IListOfFilms> = ({ searchTerm }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [displayedFilms, setDisplayedFilms] = useState(films);
  const [visibleCount, setVisibleCount] = useState(16);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const filteredMovies = films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedFilms(filteredMovies.length > 0 ? filteredMovies : []);
  }, [searchTerm]);

  const handleFavoriteTogle = (title: string) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.includes(title)
        ? prevFavorites.filter((film) => film !== title)
        : [...prevFavorites, title];

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const handleShowMore = () => [setVisibleCount((prevCount) => prevCount + 16)];

  return (
    <Section colorType='ultralight' paddingSizeType='sm'>
      <div className={styles.container}>
        {displayedFilms.slice(0, visibleCount).map((film) => (
          <FilmCard
            imageUrl={film.imageUrl}
            title={film.title}
            duration={film.duration}
            isFavorite={favorites.includes(film.title)}
            onFavoriteToggle={handleFavoriteTogle}
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
