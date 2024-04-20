import React from 'react'
import { Link } from 'react-router-dom'

const SliderBelowComponent = () => {
  return (
    <div className='bg-black p-5 flex justify-evenly flex-col md:flex-row gap-5'>
      <h1 className="text-white text-left">100+ Registered Members</h1>
      <h1 className="text-white text-left">300 Jobs Found</h1>
      <h1 className="text-white text-left">632 Best Companies</h1>
      <Link 
      to={{
        pathname: "/PostJob",
       
      }}
       className="bg-white text-black px-3 py-1 rounded border-2 hover:bg-black hover:text-white w-fit">
        POST A JOB
      </Link>
    </div>
  )
}

export default SliderBelowComponent
