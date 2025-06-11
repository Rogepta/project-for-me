import styles from './FilmCard.module.css';
import ITransparentLike from '../../assets/icons/transparent_like.svg';
import IFilledLike from '../../assets/icons/IFilledLike.svg';

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '25px',
        }}
      >
        <p className={styles.film_p}>{title}</p>
        <button onClick={() => onFavoriteToggle(title)}>
          <img src={isFavorite ? IFilledLike : ITransparentLike} />
        </button>
      </div>
      <div className={styles.divider} />
      <div className={styles.film_duration}>{duration}</div>
    </div>
  );
};

export default FilmCard;
