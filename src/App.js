import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Component/Home';
import Login from './Component/Login';
import Order from './Component/Order';
import Contact from './Component/Contact';
import ResetPassword from './Component/ResetPassword';
import ForgotPassword from './Component/ForgotPassword';
import SignUp from './Component/SignUp';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;