import styles from './HeaderAUTH.module.css';
import ILogo from '../../assets/icons/logo.png';
import authProfile from '../../assets/icons/profile.png';

export const HeaderAUTH = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <a href='#'>
          <img src={ILogo} alt='logo' />
        </a>
        <div className={styles.films_wrapper}>
          <a href='#'>Фильмы</a>
          <a href='#'>Сохраненные фильмы</a>
        </div>
        <a href='#'>
          <img src={authProfile} alt='logo' />
        </a>
      </div>
    </div>
  );
};
