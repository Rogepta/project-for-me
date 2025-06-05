// import { HeaderAUTH } from './components/HeaderAUTH/HeaderAUTH';
import './App.css';
import AboutProject from './sections/section-about-project/SectionAboutProject';
import { HeaderNotAuth } from './components/HeaderNotAuth/HeaderNotAuth';
import Introduce from './sections/section-Introduce/SectionIntroduce';
import SectionTechnologies from './sections/section-technologies/SectionTechnologies';
import SectionAboutDeveloper from './sections/section-about-developer/SectionAboutDeveloper';
import SectionFooter from './sections/section-footer/SectionFooter';

function App() {
  return (
    <>
      {/* <HeaderAUTH /> */}
      <HeaderNotAuth />
      <Introduce />
      <AboutProject />
      <SectionTechnologies />
      <SectionAboutDeveloper />
      <SectionFooter />
    </>
  );
}

export default App;
