import React from 'react';
import './App.css';


import Navbar from './component/Navbar.js';
import Home from './component/Home';
import Company from './component/Company';
import Researcher from './component/Researcher';
import Program from './component/Program';
import Academy from './component/Academy';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <Navbar />
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/researcher' element={<Researcher />} />
          <Route path='/program' element={<Program />} />
          <Route path='/academy' element={<Academy />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
