import Section from '../section/Section';
import FilmCard from '../FilmCard/FilmCard';
import React, { useEffect, useState } from 'react';
import { films } from './ListOfFilms.const';

interface IListOfFilms {
  searchTerm: string;
}

const ListOfFilms: React.FC<IListOfFilms> = ({ searchTerm }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [displayedFilms, setDisplayedFilms] = useState(films);

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

  return (
    <Section colorType='ultralight' paddingSizeType='sm'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {displayedFilms.map((film) => (
          <FilmCard
            imageUrl={film.imageUrl}
            title={film.title}
            duration={film.duration}
            isFavorite={favorites.includes(film.title)}
            onFavoriteToggle={handleFavoriteTogle}
          />
        ))}
      </div>
    </Section>
  );
};

export default ListOfFilms;
