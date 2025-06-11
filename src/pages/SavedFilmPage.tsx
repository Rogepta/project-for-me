import React, { useEffect, useState } from 'react';
import HeaderAUTH from '../components/HeaderAUTH/HeaderAUTH';
import Section from '../components/section/Section';

export const SavedFilmPage: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(savedFavorites);
  }, []);

  return (
    <>
      <HeaderAUTH />
      <Section colorType='ultralight' paddingSizeType='sm'>
        {favorites.length === 0 ? (<p>У вас нет сохраненных фильмов</p>) : (
         <ul>
            {favorites.map((film, index) => (
               <li key={index}>{film}</li>
            ))}
         </ul>
        )}
      </Section>
    </>
  );
};
