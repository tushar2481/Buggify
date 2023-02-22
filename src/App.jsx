import React, { useState } from 'react';
import './App.css';


import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Company from './component/Company/Company';
import Researcher from './component/Researcher/Researcher';
import Program from './component/Program/Program';
import Academy from './component/academy/Academy';
import Footer from './component/Footer';
import Login from './component/Login';
import Forgot from './component/Forgot';
import Signup from './component/Signup';
import ExploreProgram from './component/Company/ExploreProgram';
import RedTeam_Agreement from './component/Company/RedTeam_Agreement';

import TestCourse from './component/TestCourse';
import PentestingWithPython from './component/Academy-Courses/PentestingWithPython';
import BussinessProfile from './component/Dashboard/BusinessProfile';
import NoNavbar from './component/NoNavbar';
















import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>

      <Router>


        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route path='/company' element={
            <>
              <Navbar />
              <Company />
            </>
          } />
          <Route path='/researcher' element={
            <>
              <Navbar />
              <Researcher />
            </>
          } />
          <Route path='/program' element={
            <>
              <Navbar />
              <Program />
            </>
          } />
          <Route path='/academy' element={
            <>
              <Navbar />
              <Academy />
            </>
          } />
          <Route path='/Login' element={
            <>
              <NoNavbar />
              <Login />
            </>
          } />
          <Route path='/Forgot' element={
            <>
              <NoNavbar />
              <Forgot />
            </>
          } />
          <Route path='/Signup' element={
            <>
              <NoNavbar />
              <Signup />
            </>
          } />
          <Route path='/ExploreProgram' element={
            <>
              <Navbar />
              <ExploreProgram />
            </>
          } />
          <Route path='/RedTeam_Agreement' element={
            <>
              <Navbar />
              <RedTeam_Agreement />
            </>
          } />


          <Route path='/TestCourse' element={
            <>
              <Navbar />
              <TestCourse />
            </>
          } />
          <Route path='/pentestingWithPython' element={
            <>
              <Navbar />
              <PentestingWithPython />
            </>
          } />
          <Route path='/businessProfile' element={
            <>
              <NoNavbar />
              <BussinessProfile />
            </>
          } />

        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
