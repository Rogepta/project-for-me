import styles from './HeaderNotAuth.module.css';
import ILogo from '../../assets/icons/logo.png';
import Container from '../shared/Container';
import ResizeBlock from '../buttonResize/ResizeBlock';

export const HeaderNotAuth = () => {
  return (
    <Container>
      <header className={styles.header}>
        <a href='#'>
          <img src={ILogo} alt='logo' />
        </a>

        <div className={styles.registr_enter}>
          <ResizeBlock />
          <button className={styles.button_signup} type='button'>
            Регистрация
          </button>
          <button className={styles.button_login} type='button'>
            Войти
          </button>
        </div>
      </header>
    </Container>
  );
};
