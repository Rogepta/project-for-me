import React, { useEffect, useState } from 'react';
import Section from '@components/section/Section';
import { MainLayout } from '@components/shared/MainLayout/MainLayout';

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
      <MainLayout>
        <Section colorType='ultralight' paddingSizeType='sm'>
          {favorites.length === 0 ? (
            <p>У вас нет сохраненных фильмов</p>
          ) : (
            <ul>
              {favorites.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          )}
        </Section>
      </MainLayout>
    </>
  );
};
