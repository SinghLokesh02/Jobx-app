import React from 'react';
import JobsCard from './JobsCard';


const Jobs = () => {
    const jobrole = ["React Js Developer", "UI/UX Designer", "Digital Marketing", "Web developer", "Node Js Developer", "Content Writer"];
  return (
    <div className='container1 md:w-4/5 m-auto md:my-5 md:p-10 w-full py-5'>
      <div className="heading flex justify-between md:m-5 p-2">
        <div className="text sm:m-auto md:m-0 px-2 w-2/3">
        <h1 className='text-3xl font-bold'>Featured Jobs</h1>
        <p>Your Job for a Future</p>
        </div>
        <div className="btn mx-auto my-0  md:mx-2 md:my-1">
            <button className='bg-orange-500 text-white px-5 py-2 rounded-lg m-auto'>View All</button>
        </div>
      </div>

      <div className="overflow-x-auto whitespace-nowrap flex py-5 gap-[30px] my-5">
        {
          jobrole.map((role, index) => (
            <JobsCard key={index} role={role} />
          ))
        }
      </div>
    </div>
  );
}

export default Jobs;
