import React from 'react';
import './App.css';


import Navbar from './component/Navbar.jsx';
import Home from './component/Home';
import Company from './component/Company';
import Researcher from './component/Researcher';
import Program from './component/Program';
import Academy from './component/Academy';
import Footer from './component/Footer';
import Login from './component/Login';
import Forgot from './component/Forgot';
import Signup from './component/Signup';
import C1 from './component/C1';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const Programs = [
  {
    id: "1",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "2",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "3",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "4",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "5",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "6",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "7",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "9",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "10",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "11",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "12",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "13",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "14",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },
  {
    id: "15",
    company: "Google VDP",
    resolved: "432",
    avg: "$750",
    launch: "2/2019",
  },

]


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
          <Route path='/Login' element={<Login />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/C1' element={<C1 />} />

        </Routes>

      </Router>
      <Footer />
    </>
  );
}

export default App;
