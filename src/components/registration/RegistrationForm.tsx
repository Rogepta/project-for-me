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
    password: number;
  }) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/users/register',
        values
      );
      onRegister(response.data);
      navigate('/films');
    } catch (error) {
      setErrorMessage('Ошибка регистрации. Попробуйте еще раз.');
      console.error(error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Имя обязательно'),
    email: Yup.string().required('Email обязателен'),
    password: Yup.string().required('Пароль обязателен'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      {() => (
        <Form className={styles.form}>
          <div>
            <label htmlFor='name'>Имя:</label>
            <Field type='text' name='name' />
            <ErrorMessage name='name' component='span' />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='span' />
          </div>
          <div>
            <label htmlFor='password'>Пароль:</label>
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='span' />
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type='submit'>Зарегистрироваться</button>
        </Form>
      )}
    </Formik>
  );
};
