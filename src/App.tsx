import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Films from './pages/Films';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/films' element={<Films />} />
      </Routes>
    </Router>
  );
};

export default App;
