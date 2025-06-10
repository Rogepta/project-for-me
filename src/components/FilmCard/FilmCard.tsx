import styles from './FilmCard.module.css';
import ITransparentLike from '../../assets/icons/transparent_like.svg';
import moment from '../../assets/photo/moment.png';

const FilmCard = () => {
  return (
    <div className={styles.container}>
      <img className={styles.film_img} src={moment} alt='момент из фильма' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '25px',
        }}
      >
        <p className={styles.film_p}>33 слова о дизайне</p>
        <button>
          <img src={ITransparentLike} />
        </button>
      </div>
      <div className={styles.divider} />
      <div className={styles.film_duration}>1ч42мин</div>
    </div>
  );
};

export default FilmCard;
