import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/films' element={<FilmsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
