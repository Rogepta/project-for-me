import React from 'react';
import HeaderAUTH from '../components/HeaderAUTH/HeaderAUTH';
import AboutProject from '../sections/section-about-project/SectionAboutProject';
import Introduce from '../sections/section-Introduce/SectionIntroduce';
import SectionTechnologies from '../sections/section-technologies/SectionTechnologies';
import SectionAboutDeveloper from '../sections/section-about-developer/SectionAboutDeveloper';
import SectionFooter from '../sections/section-footer/SectionFooter';

const Home: React.FC = () => {
  return (
    <>
      <HeaderAUTH />
      <Introduce />
      <AboutProject />
      <SectionTechnologies />
      <SectionAboutDeveloper />
      <SectionFooter />
    </>
  );
};

export default Home;
