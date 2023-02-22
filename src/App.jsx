import React, { useState } from 'react';
import './App.css';


import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Company from './component/Company/Company';
import Researcher from './component/Researcher/Researcher';
import Program from './component/Program/Program';
// import Academy from './component/academy/Academy';
import Footer from './component/Footer';
import Login from './component/Login';
import Forgot from './component/Forgot';
import Signup from './component/Signup';
import ExploreProgram from './component/Company/ExploreProgram';
import RedTeam_Agreement from './component/Company/RedTeam_Agreement';

import AcademyGetStarted from './component/academy/AcademyGetStarted';
import AcademyCourses from './component/academy/AcademyCourses';
import AcademyVideos from './component/academy/AcademyVideos';
import AcademyAnnouncement from './component/academy/AcademyAnnouncement';
import AcademyBlogs from './component/academy/AcademyBlogs';
import AcademyDiscord from './component/academy/AcademyDiscord';




import TestCourse from './component/TestCourse';
import PentestingWithPython from './component/Academy-Courses/PentestingWithPython';
import BussinessProfile from './component/Dashboard/BusinessProfile';
import ScopeSetting from './component/Dashboard/ScopeSetting';
import RewardUpdate from './component/Dashboard/RewardUpdate';
import BugReport from './component/Dashboard/BugReport';
import Retesting from './component/Dashboard/Retesting';
import BountyPayment from './component/Dashboard/BountyPayment';
import PreviousFinding from './component/Dashboard/PreviousFinding';
import Dashboardsetting from './component/Dashboard/DashboardSetting'
import FAQs from './component/Dashboard/FAQs';







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

          <Route path='/academyGetStarted' element={
            <>
              <Navbar />
              <AcademyGetStarted />
            </>
          } />

          <Route path='/academyCourses' element={
            <>
              <Navbar />
              <AcademyCourses />
            </>
          } />
          <Route path='/academyAnnouncement' element={
            <>
              <Navbar />
              <AcademyAnnouncement />
            </>
          } />
          <Route path='/academyVideos' element={
            <>
              <Navbar />
              <AcademyVideos />
            </>
          } />
          <Route path='/academyBlogs' element={
            <>
              <Navbar />
              <AcademyBlogs />
            </>
          } />
          <Route path='/academyDiscord' element={
            <>
              <Navbar />
              <AcademyDiscord />
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
          <Route path='/scopeSetting' element={
            <>
              <NoNavbar />
              <ScopeSetting />
            </>
          } />
          <Route path='/bugReport' element={
            <>
              <NoNavbar />
              <BugReport />
            </>
          } />
          <Route path='/rewardUpdate' element={
            <>
              <NoNavbar />
              <RewardUpdate />
            </>
          } />
          <Route path='/retesting' element={
            <>
              <NoNavbar />
              <Retesting />
            </>
          } />
          <Route path='/bountyPayment' element={
            <>
              <NoNavbar />
              <BountyPayment />
            </>
          } />
          <Route path='/previousFinding' element={
            <>
              <NoNavbar />
              <PreviousFinding />
            </>
          } />
          <Route path='/dashboard-setting' element={
            <>
              <NoNavbar />
              <Dashboardsetting />
            </>
          } />
          <Route path='/dashboard-FAQ' element={
            <>
              <NoNavbar />
              <FAQs />
            </>
          } />

        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
