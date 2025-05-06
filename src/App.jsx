import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login'; 
import Main from './components/MainFile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />         {/* Login page comes first */}
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
