import React from 'react'
import MultiDropdownItem from "../MultiDropdownItem";
import RadioOptions from "./RadioOptions";
import Dropdown from '../Dropdown';

const name1 = "Category";
const list1 = [
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

const name2 = "Experience";
const list2 = [
    { value: "1", label: "Less than 1 year" },
    { value: "2", label: "1-3 years" },
    { value: "3", label: "3-5 years" },
    { value: "4", label: "5-10 years" },
    { value: "5", label: "10+ years" },
]

const name3 = "Location";
const list3 = [
    { value: "1", label: "Indore" },
    { value: "2", label: "Bhopal" },
    { value: "3", label: "Mumbai" },
    { value: "4", label: "Pune" },
    { value: "5", label: "Delhi" },
    { value: "6", label: "Bangalore" },
    { value: "7", label: "Hyderabad" },
    { value: "8", label: "Chennai" },
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


 {/* Left Container */}
function LeftContainer() {
  return (
    <div className="left-container min-w-[200px] m-5 md:w-[30%] border-2 h-fit">
    <div className="filter flex justify-between border-b-2 px-5 p-4">
      <h1 className="text-left font-bold">Filters</h1>
      <h1 className="cursor-pointer"> Clear All Filters</h1>
    </div>
    <div className="border-b-2">
      <div className="filter flex justify-between px-5 p-4 border-t-0">
        <h1 className="text-left font-medium">Skills</h1>
        <h1 className="cursor-pointer"> Clear</h1>
      </div>
      <div className="flex justify-center my-5">
        <MultiDropdownItem />
      </div>
    </div>

    <div className="border-b-2">
      <div className="filter flex justify-between px-5 pt-4">
        <h1 className="text-left font-medium text-sm">Availability</h1>
        <h1 className="cursor-pointer"> Clear</h1>
      </div>
      <div className="py-5">
        <RadioOptions />
      </div>
    </div>

    {/* Category */}
    <div className="border-b-2">
      <div className="filter flex justify-between px-5 pt-4">
        <h1 className="text-left font-medium text-sm">Category</h1>
        <h1 className="cursor-pointer"> Clear</h1>
      </div>

      <div className="flex justify-center my-5">
        <Dropdown data={list1} name={name1}/>
      </div>
    </div>

    {/* Experience */}
    <div className="border-b-2">
      <div className="filter flex justify-between px-5 pt-4">
        <h1 className="text-left font-medium text-sm">Experience</h1>
        <h1 className="cursor-pointer"> Clear</h1>
      </div>

      <div className="flex justify-center my-5">
      <Dropdown data={list2} name={name2}/>
      </div>
    </div>

    {/* Location */}
    <div className="">
      <div className="filter flex justify-between px-5 pt-4">
        <h1 className="text-left font-medium text-sm">Location</h1>
        <h1 className="cursor-pointer"> Clear</h1>
      </div>

      <div className="flex justify-center mt-5">
      <Dropdown data={list3} name={name3}/>
      </div>
      </div>

      {/* Button for search */}
      <div className="flex justify-center relative top-5">
        <button className="bg-orange-600 text-white px-5 py-2 rounded-lg w-full hover:bg-orange-700">
          SEARCH NOW
        </button>
        </div>  
  </div>
  )
}

export default LeftContainer
