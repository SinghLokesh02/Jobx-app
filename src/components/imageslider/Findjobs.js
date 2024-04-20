import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navBar/Navbar";
import Footer from "../homePage/Footer";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";


const Findjobs = () => {
  return (
    <div className="Container m-auto">
      {/* Rendering Navbar Here */}
      <Navbar />
      {/* The main content of Website */}
      <div className="main">
        {/* Main Heading */}
        <div className="text bg-black text-white">
          <h1 className="p-5 text-center md:w-1/4  w-1/2">
          <Link to="/" className="hover:bg-white hover:text-black p-2 rounded-md">Home</Link>
            / More Jobs/ Center Name
          </h1>
        </div>

       
        <div className="main flex flex-col md:flex-row">
          <LeftContainer/>
          <RightContainer/>
        </div>

      </div>

     




      {/* Rendering Footer Here */}
      <Footer />
    </div>
  );
};

export default Findjobs;
