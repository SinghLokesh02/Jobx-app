import React from 'react'

const ImageCard = (props) => {
    const {locations,imagesrc} = props;
  return (
    <div className="card5 w-30 relative">
    <img src={"https://source.unsplash.com/random?"+imagesrc} alt="" className='w-[350px] h-[300px]' />
    <div className="info  absolute bottom-2 left-4">
    <p className='text-white font-bold my-1 text-xl'>{locations}</p>
    <button className='bg-orange-600 p-2 rounded-md text-white '>View Jobs</button>
    </div>
</div>
  )
}

export default ImageCard
