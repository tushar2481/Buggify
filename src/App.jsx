import React from 'react';
import './App.css';


import Navbar from './component/Navbar.jsx';
import Home from './component/Home';
import Company from './component/Company';
import Researcher from './component/Researcher';
import Program from './component/Program';
import Academy from './component/academy/Academy';
import Footer from './component/Footer';
import Login from './component/Login';
import Forgot from './component/Forgot';
import Signup from './component/Signup';
import C1 from './component/C1';
import C3 from './component/C3';
import Test from './component/Test';
import NavTest from './component/NavTest';
import TestCourse from './component/TestCourse';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>

      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/researcher' element={<Researcher />} />
          <Route path='/program' element={<Program />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/C1' element={<C1 />} />
          <Route path='/C3' element={<C3 />} />
          <Route path='/Test' element={<Test />} />
          <Route path='/NavTest' element={<NavTest />} />
          <Route path='/TestCourse' element={<TestCourse />} />

        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
