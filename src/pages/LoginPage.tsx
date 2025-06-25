import IconLogo from '@components/icons/IconLogo';
import LoginForm from '@components/loginForm/LoginForm';
import React from 'react';

export const LoginPage = () => {
  return (
    <div>
      <IconLogo />
      <h2>Вход в аккаунт</h2>
      <LoginForm />
    </div>
  );
};
