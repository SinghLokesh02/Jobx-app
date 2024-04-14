import './App.css';
import React from 'react';
import Homepage from './components/homePage/Homepage';
import NavBelowComponents from './components/navBar/NavBelowComponent';
import Jobs from './components/homePage/Jobs';
import Company from './components/homePage/Company';
import JobCategory from './components/homePage/JobCategory';
import Offer from './components/homePage/Offer';
import  Footer  from './components/homePage/Footer';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ApplyJob from './components/jobsection/ApplyJob';


function App() {
  return (
     <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Jobs' element={<Jobs/>}/>
          <Route path='/Company' element={<Company/>}/>
          <Route path='/JobCategory' element={<JobCategory/>}/>
          <Route path='/Offer' element={<Offer/>}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/ApplyJob' element={<ApplyJob/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
