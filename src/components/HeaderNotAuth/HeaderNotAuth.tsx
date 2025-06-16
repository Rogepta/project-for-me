import styles from './HeaderNotAuth.module.css';
import Container from '../shared/Container';
import ResizeBlock from '../buttonResize/ResizeBlock';
import IconLogo from '../icons/IconLogo';

export const HeaderNotAuth = () => {
  return (
    <Container>
      <header className={styles.header}>
        <a href='#'>
          <IconLogo />
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
