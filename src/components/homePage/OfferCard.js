import React from 'react'

const OfferCard = (props) => {
    const {heading} = props;
  return (
    <div className='container p-3 bg-white rounded border-t-[3px] border-orange-600 md:w-1/4 sm:min-w-72'>
       <h1 className='text-2xl text-center font-serif my-5 text-nowrap overflow-hidden text-ellipsis'>{heading}</h1>
       <p className='text-nowrap overflow-hidden text-ellipsis'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem reiciendis ullam eum soluta at aliquam commodi! Placeat id voluptates quod?</p>
       <button className='hover:text-orange-600 my-3'>Read More &gt;&gt;</button>
    </div>
  )
}

export default OfferCard
