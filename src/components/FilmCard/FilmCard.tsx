import styles from './FilmCard.module.css';
import IconTransparentLike from '../icons/IconTransparentLike';
import IconIFilledLike from '../icons/IconIFilledLike';
import { useState } from 'react';
import IconCross from '@components/icons/IconCross';
import type { IFilm } from 'features/favorites/favoriteSlice';

interface IFilmCardProps {
  film: IFilm;
  isFavorite: boolean;
  onFavoriteToggle: (title: string) => void;
}

const FilmCard: React.FC<IFilmCardProps> = ({
  film,
  isFavorite,
  onFavoriteToggle,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <img
        className={styles.film_img}
        src={film.imageUrl}
        alt='момент из фильма'
      />
      <div className={styles.film_title_bookmark}>
        <p className={styles.film_title}>{film.title}</p>
        <button
          onClick={() => onFavoriteToggle(film.title)}
          onMouseEnter={() => isFavorite && setIsHovered(true)}
          onMouseLeave={() => isFavorite && setIsHovered(false)}
          style={{ position: 'relative' }}
        >
          {isFavorite ? <IconIFilledLike /> : <IconTransparentLike />}
          {isFavorite && isHovered && (
            <span style={{ position: 'absolute', top: 0, right: 0 }}>
              <IconCross />
            </span>
          )}
        </button>
      </div>
      <div className={styles.divider} />
      <div className={styles.film_duration}>{film.duration}</div>
    </div>
  );
};

export default FilmCard;
