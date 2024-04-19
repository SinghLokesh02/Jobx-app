import JobsCard from './JobsCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const jobrole = ["React Js Developer", "UI/UX Designer", "Digital Marketing", "Web developer", "Node Js Developer", "Content Writer"];
 
const Jobs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="w-full py-3 ">
      <div className='container1 m-auto  md:w-4/5'>
      <div className="heading flex justify-between md:m-5 p-2 md:4/5 mx-5">
        <div className="text sm:m-auto md:m-0 px-2">
        <h1 className='text-3xl font-bold'>Featured Jobs</h1>
        <p>Your Job for a Future</p>
        </div>
        <div className="btn mx-auto my-0  md:mx-2 md:my-1 flex">
            <button className='bg-orange-500 text-white px-5 py-2 rounded-lg m-auto '>View All</button>
        </div>
      </div>
      </div>

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
  );
}

export default Jobs;
