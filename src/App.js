//import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import React from 'react';
import ForgotPass from './Components/forgotPass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./Components/signup"
import Dashboard from './Components/Dashboard'
import EnterEmailToRestPassword from './Components/EnterEmailToRestPassword'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enterEmail" element={<EnterEmailToRestPassword />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
