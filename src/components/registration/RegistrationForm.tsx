import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './RegistrationForm.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm: React.FC<{
  onRegister: (data: { name: string; email: string; password: string }) => void;
}> = ({ onRegister }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/users/register',
        values
      );
      onRegister(response.data);
      navigate('/welcome-page');
    } catch (error) {
      setErrorMessage('Что-то пошло не так...');
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Имя обязательно'),
    email: Yup.string()
      .email('Неверный формат email')
      .required('Email обязателен'),
    password: Yup.string().required('Пароль обязателен'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Добро пожаловать!</h2>

          <label htmlFor='name' className={styles.label}>
            Имя
          </label>
          <Field
            id='name'
            name='name'
            className={`${styles.input} ${
              errors.name && touched.name ? styles.errorInput : ''
            }`}
            placeholder=''
          />
          <ErrorMessage
            name='name'
            component='div'
            className={styles.errorText}
          />

          <label htmlFor='email' className={styles.label}>
            E-mail
          </label>
          <Field
            id='email'
            name='email'
            type='email'
            className={`${styles.input} ${
              errors.email && touched.email ? styles.errorInput : ''
            }`}
            placeholder=''
          />
          <ErrorMessage
            name='email'
            component='div'
            className={styles.errorText}
          />

          <label htmlFor='password' className={styles.label}>
            Пароль
          </label>
          <Field
            id='password'
            name='password'
            type='password'
            className={`${styles.input} ${
              errors.password && touched.password ? styles.errorInput : ''
            }`}
            placeholder=''
          />
          <ErrorMessage
            name='password'
            component='div'
            className={styles.errorText}
          />

          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}

          <button type='submit' className={styles.submitButton}>
            Зарегистрироваться
          </button>

          <div className={styles.loginPrompt}>
            Уже зарегистрированы?{' '}
            <a href='/login' className={styles.loginLink}>
              Войти
            </a>
          </div>
        </Form>
      )}
    </Formik>
  );
};
