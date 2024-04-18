import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobsCard from '../homePage/JobsCard';
const jobrole = ["React Js Developer", "UI/UX Designer", "Digital Marketing", "Web developer", "Node Js Developer", "Content Writer"];
const Morejobs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    responsive: [
       
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           
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
    <div>
       <div className="w-4/5 m-auto py-5">
        <Slider  {...settings}>
        {
          jobrole.map((role, index) => (
            <JobsCard key={index} role={role} />
          ))
        }
      </Slider>
    </div>
    </div>
  )
}

export default Morejobs
