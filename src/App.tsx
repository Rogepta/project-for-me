import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import { SavedFilmPage } from './pages/SavedFilmPage/SavedFilmPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/films' element={<FilmsPage />} />
        <Route path='/saved-films' element={<SavedFilmPage />} />
      </Routes>
    </Router>
  );
};

export default App;
