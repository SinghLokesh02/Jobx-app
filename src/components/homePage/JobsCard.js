import React from 'react';
import { JOBS_IMG } from '../../utils/constant';
import { Link } from 'react-router-dom';


const JobsCard = (props) => {
  const { role } = props;

  return (
    <div className='container border-2 min-w-90 rounded-lg bg-white text-black my-5 '>
      <div className="main flex g-10 w-[300px] justify-between p-3 md:flex-row sm:flex-col">
        <div className="box1">
          <img src={JOBS_IMG} alt='Some Error Occured' className='h-[100px] rounded-lg' />
        </div>
        <div className="box2 px-5 md:px-0">
          <p>Payment not disclosed</p>
          <p className='bg-orange-500 text-center rounded-xl'>Full time/onsite</p>
        </div>
      </div>
      <div className="info mt-3 px-3">
        <h1 className='text-2xl font-bold my-2'>Frontend Developer</h1>
        <p><i className="fa-solid fa-location-dot"></i> Bhopal</p>
        <p className='my-5'>{role}</p>
      </div>
      <div className="flex flex-wrap border-t-2">
        <div className="w-full flex justify-around items-center">
          <Link to={"/ApplyJob"} className='px-4 text-xl border-gray-400 hover:bg-orange-600 hover:text-white focus:outline-none p-3 rounded'>Apply Now</Link>
          <button className='px-4 text-xl border-gray-400 hover:bg-orange-600 hover:text-white focus:outline-none  p-3 rounded'>View Job</button>
          <button className='text-xl hover:bg-orange-600 hover:text-white focus:outline-none p-3'>
            <i className="fa-solid fa-heart text-2xl lg:text-xl xl:text-2xl "></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobsCard;
