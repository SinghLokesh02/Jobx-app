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
      <div className="info m-3 px-3 my-7">
        <h1 className="text-2xl font-bold my-2">{role}</h1>
        <p>
          <i className="fa-solid fa-location-dot"></i> Bhopal
        </p>
        <p className="my-5">Immidiate Joiner</p>
      </div>

      <div className="flex border-t-2">
        <Link
          to={"/ApplyJob"}
          className="hover:bg-orange-600 w-[40%] text-center md:pt-3 pt-3 hover:text-white md:py-5 border-r-2 p-1"
        >
          APPLY NOW
        </Link>

        <Link
          to={"ViewJob"}
          className="focus:outline-none hover:bg-orange-600 w-[40%] text-center md:pt-3 pt-3 hover:text-white md:p-4 p-1 border-r-2"
        >
          VIEW JOB
        </Link>

        <div className="w-[20%] m-auto flex justify-center p-1">
          <div className="circular-box rounded-full border-2 hover:text-white hover:bg-orange-600 h-10 w-10  flex justify-center align-middle">
            <i className="fa-solid fa-heart text-2xl lg:text-xl xl:text-2xl pt-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
