import React from "react";
import Navbar from "../navBar/Navbar";
import Footer from "../homePage/Footer";
import MultiDropdownItem from "../MultiDropdownItem";
import RadioOptions from "./RadioOptions";
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
        <div className="left-container md:w-[30%] border-2 m-5">
          <div className="filter flex justify-between border-b-2 px-5 p-4">
            <h1 className="text-left font-bold">Filters</h1>
            <h1 className="cursor-pointer"> Clear All Filters</h1>
          </div>
          <div className="border-b-2">
            <div className="filter flex justify-between px-5 p-4 border-t-0">
              <h1 className="text-left font-medium">Skills</h1>
              <h1 className="cursor-pointer"> Clear</h1>
            </div>
            <div className="flex justify-center my-5">
              <MultiDropdownItem />
            </div>
          </div>

          <div className="border-b-2">
            <div className="filter flex justify-between px-5 pt-4">
              <h1 className="text-left font-medium text-sm">Availability</h1>
              <h1 className="cursor-pointer"> Clear</h1>
            </div>
            <div className="py-5">
              <RadioOptions />
            </div>
          </div>

          {/* Category */}
          <div className="border-b-2">
            <div className="filter flex justify-between px-5 pt-4">
              <h1 className="text-left font-medium text-sm">Category</h1>
              <h1 className="cursor-pointer"> Clear</h1>
            </div>

            <div className="flex justify-center my-5">
              <MultiDropdownItem />
            </div>
          </div>

          {/* Experience */}
          <div className="border-b-2">
            <div className="filter flex justify-between px-5 pt-4">
              <h1 className="text-left font-medium text-sm">Experience</h1>
              <h1 className="cursor-pointer"> Clear</h1>
            </div>

            <div className="flex justify-center my-5">
              <MultiDropdownItem />
            </div>
          </div>

          {/* Location */}
          <div className="">
            <div className="filter flex justify-between px-5 pt-4">
              <h1 className="text-left font-medium text-sm">Location</h1>
              <h1 className="cursor-pointer"> Clear</h1>
            </div>

            <div className="flex justify-center mt-5">
              <MultiDropdownItem />
            </div>
            </div>

            {/* Button for search */}
            <div className="flex justify-center relative top-5">
              <button className="bg-orange-600 text-white px-5 py-2 rounded-lg w-full hover:bg-orange-700">
                SEARCH NOW
              </button>
              </div>  
        </div>
      </div>

      {/* Right Part of the Webiste */}

      <div className="right-container w-[70%] border-2 m-5">
        </div>




      {/* Rendering Footer Here */}
      <Footer />
    </div>
  );
};

export default Findjobs;
