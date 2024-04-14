import React from "react";
import OfferCard from "./OfferCard";
const Offer = () => {
  // 4 Headings
  const heading = [
    "Searching the best jobs",
    "Apply for a good job",
    "More quality hires",
    "Choose working hours",
  ];
  return (
    <div className="container w-full">
      <div className="main-box m-auto bg-gray-100">
        <div className="text-container p-7">
          <h1 className="text-3xl text-center font-serif p-1">What we offer</h1>
          <p className="text-center border-b-orange-600">
            Offering the Best Deal
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 my-5 py-5">
          {heading.map((head, index) => {
            return <OfferCard key={index} heading={head} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;
