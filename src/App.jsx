import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login'; 
import Main from './components/MainFile';
import Calendar from './components/Calendar'; 
import Settings from './components/Settings'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />         
        <Route path="/main" element={<Main />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
