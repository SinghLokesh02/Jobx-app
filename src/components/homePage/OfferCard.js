import React from 'react'

const OfferCard = (props) => {
    const {heading} = props;
  return (
    <div className='bg-white rounded border-t-[3px] border-orange-600 w-full md:w-60 px-3 py-5'>
       <h1 className='text-xl text-center my-5 font-semibold'>{heading}</h1>
       <p className='text-nowrap overflow-hidden text-ellipsis px-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem reiciendis ullam eum soluta at aliquam commodi! Placeat id voluptates quod?</p>
       <button className='hover:text-orange-600 my-3'>Read More &gt;&gt;</button>
    </div>
  ) 
}

export default OfferCard
