import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import { SavedFilmPage } from './pages/SavedFilmPage/SavedFilmPage';
import Registration from './pages/RegistrationPage/Registration';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/films' element={<FilmsPage />} />
        <Route path='/saved-films' element={<SavedFilmPage />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/welcome-page' element={<WelcomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
