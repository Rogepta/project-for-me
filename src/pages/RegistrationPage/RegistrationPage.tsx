import { RegistrationForm } from '@components/registration/RegistrationForm';
import AuthContainer from '@components/shared/AuthContainer/AuthContainer';
import styles from './RegistrationPage.module.css';
import React from 'react';

const RegistrationPage: React.FC = () => {
  return (
    <AuthContainer>
      <div className={styles.wrapper}>
        <div>
          <RegistrationForm onRegister={() => {}} />
        </div>
      </div>
    </AuthContainer>
  );
};

export default RegistrationPage;
