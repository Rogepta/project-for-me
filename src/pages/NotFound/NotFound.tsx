import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404 </h1>
      <p className={styles.message}>Страница не найдена</p>
      <a href='/' className={styles.link}>
        Вернуться на главную!
      </a>
    </div>
  );
};
