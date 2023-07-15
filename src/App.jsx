import React from 'react'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </Router>
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<LoginForm/>} />

    //     <Route path='/dashboard' element={<Navbar/>}/>

    //     <Route path='/register' element={<RegistrationForm />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
