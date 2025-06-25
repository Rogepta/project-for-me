import api from '../../api/api';
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styles from './AuthorizationForm.module.css';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  email: string;
  password: string;
}

const AuthorizationForm = () => {
  const navigate = useNavigate();
  // Определение схемы валидации с Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Некорректный email')
      .required('Email обязателен'),
    password: Yup.string()
      .min(6, 'Пароль должен содержать минимум 6 символов')
      .required('Пароль обязателен'),
  });

  // Обработчик входа в систему
  const handleLogin = async (
    values: FormValues,
    { setSubmitting, setErrors }: FormikHelpers<FormValues>
  ) => {
    const { email, password } = values;

    try {
      const res = await api.post('/auth/login', { email, password });

      // Проверка, успешный ли ответ
      if (!res.data) {
        throw new Error('Ошибка при входе');
      }

      // Сохранение токена в localStorage
      localStorage.setItem('token', res.data.access_token);
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ email: 'Неправильный email или пароль' }); // Настройка ошибки
      } else {
        setErrors({ email: 'Неизвестная ошибка' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Вход</h2>
          <ErrorMessage
            name='email'
            component='div'
            className={styles.errorText}
          />
          <label className={styles.label}>Email:</label>
          <br />
          <Field className={styles.input} type='email' name='email' required />
          <label className={styles.label}>Пароль:</label>
          <br />
          <Field
            className={styles.input}
            type='password'
            name='password'
            required
          />
          <button
            type='submit'
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            Войти
          </button>
          <div className={styles.loginPrompt}>
            Еще не зарегистрированы?{' '}
            <a href='/registration' className={styles.loginLink}>
              Зарегистрироваться
            </a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorizationForm;
