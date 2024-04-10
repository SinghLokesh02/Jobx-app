import React, { useState } from 'react';
import { JOB_CATEGORIES } from '../../utils/constant';
import './JobCategoryCard.css'; // Import CSS file for styles

const JobCategoryCard = (props) => {
    const { jobs, jobcount } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className={`box m-2 rounded pb-3 bg-white  ${isHovered ? 'box-shadow' : ''}`} style={{ width: '300px' }} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className={`image cursor-pointer  ${isHovered ? 'rotate-image' : ''}`}>
                <img src={JOB_CATEGORIES} alt="" className='w-[100px] m-auto p-4'/>
            </div>
            <div className="content">
                <h3 className='text-bold font-bold text-center font-serif'>{jobs}</h3>
                <p className='hover:text-orange-500 text-center overflow-hidden'>{jobcount} Jobs</p>
            </div>
        </div>
    );
}

export default JobCategoryCard;
