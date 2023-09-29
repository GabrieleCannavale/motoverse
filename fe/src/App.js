import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/registerForm/RegisterForm';
import ProtectedRoutes from './middlewares/protectedRoutes';
import Homepage from './pages/Homepage';
import Success from './pages/Success';
import ProfileInfo from './components/profileInfo/ProfileInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LoginForm />} />
        <Route path='/success/:token' element={<Success />} />
        <Route path='/registration' element={<RegisterForm />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/homepage/user/:id' element={<ProfileInfo/>}/>
          
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;
