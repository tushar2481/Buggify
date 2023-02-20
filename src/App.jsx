import React from 'react';
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
import Test from './component/Test';
import NavTest from './component/NavTest';
import TestCourse from './component/TestCourse';
import PentestingWithPython from './component/academy/Courses/PentestingWithPython';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>

      <Router>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/researcher' element={<Researcher />} />
          <Route path='/program' element={<Program />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/ExploreProgram' element={<ExploreProgram />} />
          <Route path='/RedTeam_Agreement' element={<RedTeam_Agreement />} />
          <Route path='/Test' element={<Test />} />
          <Route path='/NavTest' element={<NavTest />} />
          <Route path='/TestCourse' element={<TestCourse />} />
          <Route path='/PentestingWithPython' element={<PentestingWithPython />} />

        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
