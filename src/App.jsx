import React, { useState } from 'react';
import './App.css';


import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Company from './component/Company/Company';
import Researcher from './component/Researcher/Researcher';
import Program from './component/Program/Program';
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
import NoFooter from './component/NoFooter';















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
              <Footer />
            </>
          } />
          <Route path='/company' element={
            <>
              <Navbar />
              <Company />
              <Footer />
            </>
          } />
          <Route path='/researcher' element={
            <>
              <Navbar />
              <Researcher />
              <Footer />
            </>
          } />
          <Route path='/program' element={
            <>
              <Navbar />
              <Program />
              <Footer />
            </>
          } />

          <Route path='/Login' element={
            <>
              <NoNavbar />
              <Login />
              <NoFooter />
            </>
          } />
          <Route path='/Forgot' element={
            <>
              <NoNavbar />
              <Forgot />
              <NoFooter />
            </>
          } />
          <Route path='/Signup' element={
            <>
              <NoNavbar />
              <Signup />
              <NoFooter />
            </>
          } />
          <Route path='/ExploreProgram' element={
            <>
              <Navbar />
              <ExploreProgram />
              <Footer />
            </>
          } />
          <Route path='/RedTeam_Agreement' element={
            <>
              <Navbar />
              <RedTeam_Agreement />
              <Footer />
            </>
          } />

          <Route path='/academyGetStarted' element={
            <>
              <Navbar />
              <AcademyGetStarted />
              <Footer />
            </>
          } />

          <Route path='/academyCourses' element={
            <>
              <Navbar />
              <AcademyCourses />
              <Footer />
            </>
          } />
          <Route path='/academyAnnouncement' element={
            <>
              <Navbar />
              <AcademyAnnouncement />
              <Footer />
            </>
          } />
          <Route path='/academyVideos' element={
            <>
              <Navbar />
              <AcademyVideos />
              <Footer />
            </>
          } />
          <Route path='/academyBlogs' element={
            <>
              <Navbar />
              <AcademyBlogs />
              <Footer />
            </>
          } />
          <Route path='/academyDiscord' element={
            <>
              <Navbar />
              <AcademyDiscord />
              <Footer />
            </>
          } />


          <Route path='/TestCourse' element={
            <>
              <Navbar />
              <TestCourse />
              <Footer />
            </>
          } />
          <Route path='/pentestingWithPython' element={
            <>
              <Navbar />
              <PentestingWithPython />
              <Footer />
            </>
          } />
          <Route path='/businessProfile' element={
            <>
              <NoNavbar />
              <BussinessProfile />
              <NoFooter />
            </>
          } />
          <Route path='/scopeSetting' element={
            <>
              <NoNavbar />
              <ScopeSetting />
              <NoFooter />
            </>
          } />
          <Route path='/bugReport' element={
            <>
              <NoNavbar />
              <BugReport />
              <NoFooter />
            </>
          } />
          <Route path='/rewardUpdate' element={
            <>
              <NoNavbar />
              <RewardUpdate />
              <NoFooter />
            </>
          } />
          <Route path='/retesting' element={
            <>
              <NoNavbar />
              <Retesting />
              <NoFooter />
            </>
          } />
          <Route path='/bountyPayment' element={
            <>
              <NoNavbar />
              <BountyPayment />
              <NoFooter />
            </>
          } />
          <Route path='/previousFinding' element={
            <>
              <NoNavbar />
              <PreviousFinding />
              <NoFooter />
            </>
          } />
          <Route path='/dashboard-setting' element={
            <>
              <NoNavbar />
              <Dashboardsetting />
              <NoFooter />
            </>
          } />
          <Route path='/dashboard-FAQ' element={
            <>
              <NoNavbar />
              <FAQs />
              <NoFooter />
            </>
          } />

        </Routes>

      </Router>

    </>
  );
}

export default App;
