import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { COMPANY_IMG } from '../../utils/constant';
 

const CompanyCard = (props) => {
    const { name } = props;
    return (
        <div className='container border-2 rounded-lg bg-white my-8'>
            <div className="main g-10 justify-between p-3">
                <div className="box1 m-auto">
                    <img src={COMPANY_IMG} alt={name} className='h-[100px] m-auto' />
                </div>
            </div>
            <div className="info m-2 px-3">
                <h1 className='text-2xl font-bold my-2 text-center text-red-600 font-mono'>{name}</h1>
                <p className='text-center text-orange-600'>Link to Apply</p>
                <p className='my-5'></p>
            </div>
            <div className="flex flex-wrap border-t-2">
                {/* Use Link to navigate to ApplyJob */}
                <Link to="/ApplyJob" className='px-4 text-xl border-gray-400 hover:bg-orange-600 hover:text-white focus:outline-none p-3 rounded m-auto w-full text-center'>
                    Apply Now
                </Link>
            </div>
        </div>
    );
}

export default CompanyCard;
