import IconLogo from '@components/icons/IconLogo';
import { RegistrationForm } from '@components/registration/RegistrationForm';
import AuthContainer from '@components/shared/AuthContainer/AuthContainer';
import React from 'react';

const Registration: React.FC = () => {
  return (
    <AuthContainer>
      <IconLogo />
      <div>
        <RegistrationForm onRegister={() => {}} />
      </div>
    </AuthContainer>
  );
};

export default Registration;
