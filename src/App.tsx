import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import { SavedFilmPage } from './pages/SavedFilmPage/SavedFilmPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { LoginPage } from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/films' element={<FilmsPage />} />
        <Route path='/saved-films' element={<SavedFilmPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/welcome-page' element={<WelcomePage />} />
        <Route path='/authorization' element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
