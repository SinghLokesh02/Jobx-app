import React from "react";
import { Link } from "react-router-dom";

const ImageCard = (props) => {
  const { locations, imagesrc, numberOfJobs } = props;
  return (
    <Link to="/findjobs">
    <div className="card5 w-30 relative flex justify-center cursor-pointer">
      <img
        src={require('../../assets/'+imagesrc)}
        alt=""
        className="w-[350px] h-[300px]"
      />
      <div className="info  absolute bottom-2 left-4">
        <p className="text-white font-bold my-1 text-xl">{locations}</p>
        <button className="bg-orange-600 p-2 rounded-md text-white ">
          {numberOfJobs} Jobs
        </button>
      </div>
    </div>
    </Link>
  );
};

export default ImageCard;
