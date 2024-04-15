import React from "react";
import Navbar from "../navBar/Navbar";
import Jobs from "./Jobs";
import Company from "./Company";
import JobCategory from "./JobCategory";
import Offer from "./Offer";
import Footer from "./Footer";
import NavBelowComponents from "../navBar/NavBelowComponent";
import ImageSlider from "../imageslider/ImageSlider";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <NavBelowComponents />
      <ImageSlider />
      <Jobs />
      <Company />
      <Jobs />
      <Company />
      <JobCategory />
      <Offer />
      <Footer />     
    </div>
  );
};

export default Homepage;
