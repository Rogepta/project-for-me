import React from 'react';
import SectionAboutProject from '@sections/section-about-project/SectionAboutProject';
import SectionIntroduce from '@sections/section-Introduce/SectionIntroduce';
import SectionTechnologies from '@sections/section-technologies/SectionTechnologies';
import SectionAboutDeveloper from '@sections/section-about-developer/SectionAboutDeveloper';
import { MainLayout } from '@components/shared/MainLayout/MainLayout';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <SectionIntroduce />
      <SectionAboutProject />
      <SectionTechnologies />
      <SectionAboutDeveloper />
    </MainLayout>
  );
};

export default HomePage;
