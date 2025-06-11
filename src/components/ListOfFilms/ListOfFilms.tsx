import Section from '../section/Section';
import FilmCard from '../FilmCard/FilmCard';
import { useEffect, useState } from 'react';
import { films } from './ListOfFilms.const';

const ListOfFilms = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(savedFavorites);
  }, []);

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
        {films.map((film) => (
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
