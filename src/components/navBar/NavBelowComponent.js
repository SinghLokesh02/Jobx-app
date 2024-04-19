import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from "../Dropdown";
const name1 = "Select Job Role"
const Jobs = [
  { value: "1", label: "React Js Developer" },
  { value: "2", label: "UI/UX Designer" },
  { value: "3", label: "Digital Marketing" },
  { value: "4", label: "Web developer" },
  { value: "5", label: "Node Js Developer" },
  { value: "6", label: "Content Writer" },
]


const name2 = "Select Location";
const Locations = [
  { value: "1", label: "Indore" },
  { value: "2", label: "Bhopal" },
  { value: "3", label: "Mumbai" },
  { value: "4", label: "Pune" },
  { value: "5", label: "Delhi" },
  { value: "9", label: "Kolkata" },
  { value: "10", label: "Ahmedabad" },
  { value: "11", label: "Jaipur" },
  { value: "12", label: "Surat" },
  { value: "13", label: "Lucknow" },
  { value: "14", label: "Kanpur" },
  { value: "15", label: "Nagpur" },
  { value: "16", label: "Visakhapatnam" },
  { value: "17", label: "Thane" },
  { value: "18", label: "Bhopal" },
]

const name3 = "Select Category";
const Categories = [
  { value: "1", label: "Web, Mobile &amp; Software Developer" },
  { value: "2", label: "Data Science &amp; Analytics" },
  { value: "3", label: "Admin Support" },
  { value: "4", label: "Design &amp; Creative" },
  { value: "5", label: "Digital Marketing" },
  { value: "6", label: "IT &amp; Networking" },
  { value: "7", label: "Sales &amp; Marketing" },
  { value: "8", label: "Customer Service" },
  { value: "9", label: "Accounting &amp; consulting" },
  { value: "10", label: "Writing" },
  { value: "11", label: "Legal" },
  { value: "12", label: "Translation" },
  { value: "13", label: "Engineering &amp; Architecture" },
  { value: "14", label: "Content Writer" },
]
const NavBelowComponent = () => {
  return (
    <div className='flex md:justify-around bg-orange-600 p-2 md:p-4 flex-col md:flex-row gap-5 m-auto justify-center align-middle'>
      <div className='md:w-64 m-auto w-full flex justify-center md:pt-0 pt-2'>
        <Dropdown name={name1} data={Jobs}/>
      </div>
      <div className='md:w-64 m-auto w-full flex justify-center'>
        <Dropdown name={name2} data={Locations} />
      </div>
      <div className='md:w-64 m-auto w-full flex justify-center '>
        <Dropdown name={name3} data={Categories} />
      </div>
      <Link to={"/Findjobs"} className='md:w-36 m-auto w-[80%] flex border-2 justify-center md:mb-0 mb-2 border-white px-2 py-1 hover:bg-white hover:text-orange-600'>
        <button  className=''>SEARCH NOW</button>
      </Link>

    </div>
  )
}

export default NavBelowComponent
