import React, { useState } from "react";
import Dropdown from "../Dropdown";
import JobsCard from "../homePage/JobsCard";
import JobCategoryCard from "../homePage/JobCategoryCard"

const data = [
  {
    value: "1",
    label: "A-Z",
  },
  {
    value: "2",
    label: "Z-A",
  },
];

const RightContainer = () => {
  const [border, setBorder] = useState(false);
  const name = "Sort By";

  return (
    <div className="right-container w-[95%] md:w-[70%]  md:m-5 m-auto my-5 ">
      {/* Right Part of the Website */}
      <div className="flex px-5 p-2 border-b-2">
        <div className="flex w-full justify-between">

         <div className="right flex ">
         <p className="text-orange-600 font-medium border-b-2 border-orange-600 cursor-pointer mx-5">
            Jobs
          </p>

          {/* Search Button */}
          <div className="flex mx-3">
          <div
            className={`flex border-[1px] m-auto p-2 md:w-fit w-[170px] min-w-32 ${
              border ? "border-orange-600" : "border-gray-300"
            }`}
          >
            <i
              className={`fa-solid fa-magnifying-glass m-auto ${
                border ? "text-orange-600" : "text-gray-500"
              }`}
            ></i>
            <input
              type="text"
              placeholder="Search"
              className="border-none w-full focus:outline-none pl-2"
              onClick={() => setBorder(!border)}
            />
          </div>
          <input
            type="submit"
            value="Search"
            className="bg-orange-600 px-4 text-white hover:bg-orange-700 cursor-pointer rounded-md relative right-3"
          />
          </div>
         </div>

          {/* Sort by Component */}
          <div className="right md:flex justify-between gap-3 visible sm:hidden m-auto">
          <div className="md:flex items-center w-30 hidden">
            <Dropdown data={data} name={name} />
          </div>
          <div className="logos md:flex gap-1 hidden">
            <button className="h-10 w-10 rounded-full border-2 hover:bg-orange-600 hover:text-white">
              <i class="fas fa-th-list"></i>
            </button>
            <button className="h-10 w-10 rounded-full border-2 hover:bg-orange-600 hover:text-white">
              <i class="fas fa-th-large"></i>
            </button>
          </div>
          </div>
        </div>
      </div>
          {/* Cards Layout Here */}
          <div className="m-5">
            <JobsCard role="React Js Developer" />
            <JobsCard role="Content Developer" />
            <JobsCard role="Content Developer" />

          </div>
    </div>
  );
};

export default RightContainer;
