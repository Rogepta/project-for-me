import HeaderAUTH from '@components/HeaderAUTH/HeaderAUTH';
import SectionFooter from '@sections/section-footer/SectionFooter';
import type React from 'react';

interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <HeaderAUTH />
      <main>{children}</main>
      <SectionFooter />
    </div>
  );
};
