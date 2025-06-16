import styles from './FilmCard.module.css';
import IconTransparentLike from '../icons/IconTransparentLike';
import IconIFilledLike from '../icons/IconIFilledLike';
import { useState } from 'react';
import IconCross from '@components/icons/IconCross';

interface IFilmCardProps {
  imageUrl: string;
  title: string;
  duration: string;
  isFavorite: boolean;
  onFavoriteToggle: (title: string) => void;
}

const FilmCard: React.FC<IFilmCardProps> = ({
  imageUrl,
  title,
  duration,
  isFavorite,
  onFavoriteToggle,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <img className={styles.film_img} src={imageUrl} alt='момент из фильма' />
      <div className={styles.film_title_bookmark}>
        <p className={styles.film_title}>{title}</p>
        <button
          onClick={() => onFavoriteToggle(title)}
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
      <div className={styles.film_duration}>{duration}</div>
    </div>
  );
};

export default FilmCard;
