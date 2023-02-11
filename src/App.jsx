import React from 'react';
import './App.css';


import Navbar from './component/Navbar.jsx';
import Home from './component/Home';
import Company from './component/Company';
import Researcher from './component/Researcher';
import Program from './component/Program';
import Academy from './component/Academy';
import Footer from './component/Footer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>

      <Navbar />
      <Router >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/researcher' element={<Researcher />} />
          <Route path='/program' element={<Program />} />
          <Route path='/academy' element={<Academy />} />
        </Routes>
        {/* <Redirect to="/" /> */}
      </Router>
      <Footer />
    </>
  );
}

export default App;
