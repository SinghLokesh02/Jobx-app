import './App.css';
import React from 'react';
import Homepage from './components/homePage/Homepage';
import NavBelowComponents from './components/navBar/NavBelowComponent';
import Jobs from './components/homePage/Jobs';
import Company from './components/homePage/Company';
import JobCategory from './components/homePage/JobCategory';


function App() {
  return (
     <div>
    <Homepage />
    <NavBelowComponents />
    <Jobs />
    <Company />
    <Jobs />
    <Company />
    <JobCategory />
     </div>
  );
}

export default App;
