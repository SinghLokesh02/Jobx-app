import React from 'react'
import CompanyCard from './CompanyCard';

// Name of 10 IT companies
const companyname = ["Google", "Microsoft", "Amazon", "Facebook", "Apple", "IBM", "Oracle", "Cisco", "Intel", "HP"];
const Company = () => {
    return (
        <div className='container1 md:w-4/5 md:m-auto md:my-5 md:p-10 w-full p-2'>
          <div className="heading flex justify-between md:m-5 m-1">
            <div className="text w-2/3">
            <h1 className='text-3xl font-bold'>Featured Comapnies</h1>
            <p>Your Job for a Future</p>
            </div>
            <div className="btn w-1/3 flex">
                <button className='bg-orange-500 text-white px-5 py-2 rounded-lg md:mr-10 m-auto'>View All</button>
            </div>
          </div>

          <div className="overflow-x-auto whitespace-nowrap flex py-5 gap-[20px] my-5">
        {
          companyname.map((name, index) => (
            <CompanyCard key={index} role={name} />
          ))
        }
      </div>
     
        </div>
      );
    }

export default Company
