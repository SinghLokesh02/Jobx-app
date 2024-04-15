import React from 'react'
import Slider from "react-slick";
import ImageCard from './ImageCard';

const ImageSlider = () => {
    const places = ["Bhopal","Indore","Ujjain","Jabalpur","Ratlam","Gwalior"]
    const images = ["computers","coding","building","programming","office","workplace"]
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='container my-1 m-auto p-10'>
        <Slider {...settings}>  
            {
                places.map((place,index) => {
                    return (
                        <ImageCard key={index} locations={place} imagesrc={images[index]} />
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default ImageSlider
