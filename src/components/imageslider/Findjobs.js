import React from "react";
import Navbar from "../navBar/Navbar";
import Footer from "../homePage/Footer";
import DropdownItem from "../DropdownItem";
const Findjobs = () => {
  return (
    <div className="Container">
      {/* Rendering Navbar Here */}
      <Navbar />
      {/* The main content of Website */}
      <div className="main">
        {/* Main Heading */}
        <div className="text bg-black text-white">
          <h1 className="p-5 text-center md:w-1/4  w-1/2">
            Home / More Jobs/ Center Name
          </h1>
        </div>

        {/* Left Container */}
        <div className="left-container p-2">
          <div className="filter flex justify-between border-2 px-5 p-4">
            <h1 className="text-left font-bold">Filters</h1>
            <h1> Clear All Filters</h1>
          </div>
          <div>
            <div className="filter flex justify-between border-2 px-5 p-4 border-t-0">
              <h1 className="text-left font-medium">Skills</h1>
              <h1> Clear</h1>
            </div>
            <DropdownItem />
          </div>
        </div>
      </div>
      {/* Rendering Footer Here */}
      <Footer />
    </div>
  );
};

export default Findjobs;
