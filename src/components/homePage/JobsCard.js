import React from "react";
import { JOBS_IMG } from "../../utils/constant";
import { Link } from "react-router-dom";

const JobsCard = (props) => {
  const { role } = props;

  return (
    <div className="container border-2  bg-white text-black my-5 ">
      <div className="main w-full flex justify-between p-3 gap-5">
        <div className="box1">
          <img
            src={JOBS_IMG}
            alt="Some Error Occured"
            className="rounded-lg"
            style={{ width: "70px", height: "70px" }}
          />
        </div>
        <div className="box2 px-5">
          <p className="whitespace-nowrap text-ellipsis overflow-hidden text-sm">
            Payment not disclosed
          </p>
          <p className="bg-orange-500 text-center rounded-xl text-sm">
            Full time/onsite
          </p>
        </div>
      </div>
      <div className="info mt-3 px-3">
        <h1 className="text-2xl font-bold my-2">{role}</h1>
        <p>
          <i className="fa-solid fa-location-dot"></i> Bhopal
        </p>
        <p className="my-5">Immidiate Joiner</p>
      </div>



      <div className="flex flex-wrap border-t-2">
        <div className="w-full flex items-center">
          <div className="border-r-2 h-full  hover:bg-orange-600 p-3 hover:text-white">
            <Link
              to={"/ApplyJob"}
              className="md:px-4 px-2 border-gray-400 hover:bg-orange-600  focus:outline-none"
            >
              APPLY NOW
            </Link>
          </div>
         <div className="h-full border-r-2 hover:bg-orange-600 p-3  px-4 hover:text-white ">
         <Link
            to={"ViewJob"}
            className="focus:outline-none"
          >
            VIEW JOB
          </Link>
         </div>
         <div className="h-full p-3 flex justify-center align-middle w-[30px]">
            <i className="fa-solid fa-heart text-2xl lg:text-xl xl:text-2xl "></i>
         </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
