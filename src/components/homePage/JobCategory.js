import React from "react";
import JobCategoryCard from "./JobCategoryCard";

// Arrays of 20 Job Categories
const jobs = [
  "Admin Suuport",
  "React Js Developer",
  "Content Writer",
  "IT and Networking",
  "Artificial Intelligence",
  "Education Sector",
  "IT and Software",
  "Law",
  "Legal",
  "IT and Software",
  "Project Coordinator",
  "Python Developer",
  "Web Developer",
  "UI/UX Designer",
  "Digital Marketing",
  "Node Js Developer",
  "Content Writer",
  "Data Analyst",
  "Data Scientist",
  "Machine Learning",
   
];

// Array for Number of Random Number of Jobs
const jobcount = [12,23,34,54,23,12,23,34,54,23,12,23,34,54,23,12,23,34,54,23];
 

// Remove 10 items from both arrays

const JobCategory = () => {
  return (
    <div className="container w-full bg-gray-100 py-5">
      <div className="w-4/5 m-auto">
        <div className="heading m-5 text-center">
          <h1 className="text-3xl font-bold">Featured Jobs</h1>
          <p>Your Job for a Future</p>
        </div>

        <div className="jobcategory flex flex-wrap gap-5 justify-center">
          {/* Iterate Over the JobCategoryCard */}

          {jobs.map((job, index) => (
            <JobCategoryCard
              key={index}
              jobs={job}
              jobcount={jobcount[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
