import React from "react";
import JobCategoryCard from "./JobCategoryCard";

// Arrays of 20 Job Categories
const jobs = [
  "Full stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Developer",
  "Node Js Developer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Digital Marketing",
  "Content Writer",
  "SEO Specialist",
  "Data Scientist",
  "Data Analyst",
  "Business Analyst",
  "Product Manager",
  "Project Manager",
  "HR Manager",
  "Sales Manager",
  "Customer Support",
];

// Array for Number of Openings
const jobcount = [
  20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
  190, 200, 210,
];

// Remove 10 items from both arrays
jobs.splice(0, 8);
jobcount.splice(0, 8);

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
