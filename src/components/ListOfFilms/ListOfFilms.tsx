import Section from '../section/Section';
import FilmCard from '../FilmCard/FilmCard';
import React, { useEffect, useState } from 'react';
import { films } from './ListOfFilms.const';
import styles from './ListOfFilms.module.css';

interface IListOfFilms {
  searchTerm: string;
}

const ListOfFilms: React.FC<IListOfFilms> = ({ searchTerm }) => {
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
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
          <button type='button' onClick={handleShowMore} style={{justifyContent: 'center'}}>
            Еще
          </button>
        </div>
      )}
    </Section>
  );
};

export default ListOfFilms;
