import styles from './HeaderAUTH.module.css';
import ILogo from '../../assets/icons/logo.png';
import authProfile from '../../assets/icons/profile.png';
import Container from '../shared/Container';
import { Link } from 'react-router-dom';

const HeaderAUTH = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Link to='/'>
          <img src={ILogo} alt='logo' />
        </Link>
        <div className={styles.films_wrapper}>
          <Link to='/films'>Фильмы</Link>
          <Link to='/saved-films'>Сохраненные фильмы</Link>
        </div>
        <Link to='/edit'>
          <img src={authProfile} alt='logo' />
        </Link>
      </div>
    </Container>
  );
};

export default HeaderAUTH;
