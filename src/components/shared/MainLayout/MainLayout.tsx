import HeaderAUTH from '@components/HeaderAUTH/HeaderAUTH';
import SectionFooter from '@sections/section-footer/SectionFooter';
import type React from 'react';
// import styles from './MainLayout.module.css';

interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderAUTH />
      <main>{children}</main>
      <SectionFooter />
    </>
  );
};
