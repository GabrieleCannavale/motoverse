import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/registerForm/RegisterForm';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' exact element={<LoginForm />} />
      <Route path='/registration' element={<RegisterForm />} /> 

    </Routes>
   </Router>
  );
}

export default App;
