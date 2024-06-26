import React from "react";
import CompanyCard from "./CompanyCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Name of 10 IT companies
const companyname = [
  "Google",
  "Microsoft",
  "Amazon",
  "Facebook",
  "Apple",
  "IBM",
  "Oracle",
  "Cisco",
  "Intel",
  "HP",
];
const Company = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-5">
      <div className="container1  md:m-auto md:py-5 md:p-10 w-full p-2 md:w-4/5">
        <div className="heading flex justify-between md:m-5 m-1">
          <div className="text w-2/3">
            <h1 className="text-3xl font-bold md:text-left sm:text-center">
              Featured Comapnies
            </h1>
            <p className="md:text-left sm:text-center">Your Job for a Future</p>
          </div>
          <div className="btn w-1/3 flex">
            <button className="bg-orange-500 text-white px-5 py-2 rounded-lg md:mr-10 m-auto">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="block w-4/5 m-auto">
        <Slider {...settings}>
          {companyname.map((name, index) => (
            <CompanyCard key={index} name={name} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Company;
