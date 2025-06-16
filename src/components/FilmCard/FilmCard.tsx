import styles from './FilmCard.module.css';
import IconTransparentLike from '../icons/IconTransparentLike';
import IconIFilledLike from '../icons/IconIFilledLike';

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
  return (
    <div className={styles.container}>
      <img className={styles.film_img} src={imageUrl} alt='момент из фильма' />
      <div className={styles.film_title_bookmark}>
        <p className={styles.film_title}>{title}</p>
        <button onClick={() => onFavoriteToggle(title)}>
          {isFavorite ? <IconIFilledLike /> : <IconTransparentLike />}
        </button>
      </div>
      <div className={styles.divider} />
      <div className={styles.film_duration}>{duration}</div>
    </div>
  );
};

export default FilmCard;
