import React from "react";
import Navbar from "../navBar/Navbar";
import Footer from "../homePage/Footer";
import Morejobs from "./Morejobs";
import { Link } from "react-router-dom";
import { MIRACLE } from "../../utils/constant";

const ViewJob = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="text bg-black text-white">
          <h1 className="p-5 text-center md:w-1/4  w-1/2">Home / Jobname</h1>
        </div>
      </div>

      <div className="main-content md:flex my-5 mx-5 flex-wrap md:flex-row flex-col ">
        <div className="Job-description md:w-3/4 px-5 w-full">
          <div className="head flex justify-between align-middle">
            <img src="./logo1.png" className="w-[100px]" alt="" />
            <p className="bg-orange-600 h-fit px-2 rounded-xl text-white">
              Full time/onsite
            </p>
          </div>

          <div className="info mt-3 ml-0">
            <h1 className="text-left text-xl font-bold my-3">Company Name</h1>
            <div className="location flex gap-3 mb-10">
              <i className="fa-solid fa-location-dot"></i>
              <p>Location</p>
            </div>

            <h1 className="role text-left font-bold my-5">Role of Employee</h1>
            <h1 className="text-gray-500 text-left text-md font-medium my-5">
              Roles and Responsibility
            </h1>
            <ul className="text-left list-disc list-inside">
              <li>
                {" "}
                Assist with job postings, resume screening, and initial
                candidate screening.
              </li>
              <li>
                Schedule and interviews and coordinate communication by calling
                the candidates.
              </li>
              <li>Calling the leads</li>
            </ul>

            <h1 className="text-gray-500 text-left text-md font-medium my-5">
              Qualifications and Skills
            </h1>
            <p className="text-left">
              Currently pursuing a degree in Human Resources, Business
              Administration, or a related field (or recently graduated). Strong
              organizational skills with the ability to manage multiple tasks
              simultaneously. Good communication Skills·

              <div className="skills flex gap-3 my-3 flex-wrap">
                <p className="border-2 px-3 py-2 rounded-xl">Python</p>
                <p className="border-2 px-3 py-2 rounded-xl">C++</p>
                <p className="border-2 px-3 py-2 rounded-xl">Data Structure</p>
                <p className="border-2 px-3 py-2 rounded-xl">Java</p>
                <p className="border-2 px-3 py-2 rounded-xl">Management</p>
                <p className="border-2 px-3 py-2 rounded-xl">MERN Stack</p>
                <p className="border-2 px-3 py-2 rounded-xl">Database</p>
              </div>

              <h1 className="text-left font-bold mt-5 my-3">Requirements</h1>
              <div className="box flex gap-10">
              <p className="text font-medium">Availability :</p>
              <span className="text-gray-500">Full time/onsite</span>
              </div>
              <div className="box flex gap-10">
              <p className="text font-medium">Experience Level :</p>
              <span className="text-gray-500">Fresher</span>
              </div>

              <Link to={"/ApplyJob"} className="block bg-orange-600 w-fit px-3 py-3 text-white my-5 rounded-lg">APPLY NOW</Link>
            </p>
          </div>
        </div>
        <div className="apply-description md:w-1/4 w-full">
          <Link
            to={"/ApplyJob"}
            className="bg-orange-600 p-3 text-white font-bold block"
          >
            {" "}
            APPLY NOW
          </Link>

          <div className="info">
            <h1 className="font-semibold">Views</h1>
            <p className="py-4">6</p>
            <h1 className="font-semibold">Applicants</h1>
            <p className="py-4">0</p>
            <h1 className="font-semibold">Job Type</h1>
            <p className="py-4">Full time/Onsite</p>
            <h1 className="font-semibold">Salary</h1>
            <p className="py-4">Not Disclosed</p>
            <h1 className="font-semibold">Post Data</h1>
            <p className="py-4">12Apr, 2024</p>

            <div className="box border-2 flex justify-center align-middle hover:bg-orange-600 hover:text-white">
              <button className="mr-4 font-semibold font-mono">
                BOOKMARK
              </button>
              <i className="fa-solid fa-heart text-2xl lg:text-xl xl:text-2xl "></i>
            </div>
          </div>
        </div>
      </div>

      <div className="text">
        <h1 className="m-2 text-3xl font-bold">Similar Jobs</h1>
       <Morejobs />
      </div>

      <Footer />
    </>
  );
};

export default ViewJob;
