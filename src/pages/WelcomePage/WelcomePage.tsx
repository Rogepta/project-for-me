import React from 'react';
import styles from './WelcomePage.module.css';
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.h2_p_link}>
        <h2 className={styles.title}>🎉 Добро пожаловать!</h2>
        <p className={styles.paragraph}>Вы успешно зарегистрировались!</p>
        <Link to={'/films'} className={styles.link}>
          Перейти к фильмам 😇
        </Link>
      </div>
    </div>
  );
};
