import AuthorizationForm from '@components/AuthorizationForm/AuthorizationForm';
import styles from './AuthorizationPage.module.css';
import AuthContainer from '@components/shared/AuthContainer/AuthContainer';

export const AuthorizationPage = () => {
  return (
    <AuthContainer>
      <div className={styles.wrapper}>
        <div>
          <AuthorizationForm />
        </div>
      </div>
    </AuthContainer>
  );
};
