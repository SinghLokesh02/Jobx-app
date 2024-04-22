import React from "react";
import OfferCard from "./OfferCard";

const Offer = () => {
  // 4 Headings
  const headings = [
    "Searching the best jobs",
    "Apply for a good job",
    "More quality hires",
    "Choose working hours",
  ];

  return (
    <div className="container w-full m-auto">
      <div className="main-box m-auto bg-gray-100 py-5">
        <div className="text-container p-7">
          <h1 className="text-3xl text-center font-serif p-1">What we offer</h1>
          <p className="text-center border-b-orange-600">
            Offering the Best Deal
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 my-5 px-5">
          {headings.map((heading, index) => (
            <OfferCard key={index} heading={heading} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
