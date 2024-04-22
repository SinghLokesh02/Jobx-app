import React from "react";
import Navbar from "../navBar/Navbar";
import  Footer from "./Footer";
const BoilerPlatePostandLearn = (props) => {
  const{heading, paras, image,allhead,mainheading} = props;

  return (
    <div className="container">
        <Navbar />
      <div className="main">
        <h1 className="bg-black text-white p-5">Home / {heading}</h1>
      </div>
        <div className="head text-3xl font-medium text-center py-10"><span className="border-b-[3px] border-orange-600 py-3 ">
        {mainheading}</span></div>
      <div className="image w-8/12 m-auto">
        <img src={image} alt="" className="w-full " />
      </div>

      <div className="text m-auto w-8/12 md:px-5 md:py-5 px-0 py-5">
        <h1 className="font-medium text-md my-1">{allhead[0]}</h1>
        <p className="text-justify">{paras[0]}</p>
        <h1 className="font-medium text-md my-1">{allhead[1]}</h1>
        <p className="text-justify">{paras[1]}</p>
        <h1 className="font-medium text-md my-1">{allhead[2]}</h1>
        <p className="text-justify">{paras[2]}</p>
      </div>

      <Footer/>
    </div>
  );
};

export default BoilerPlatePostandLearn;
