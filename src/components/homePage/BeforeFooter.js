import React from "react";

const BeforeFooter = () => {
  return (
    <div className="main flex justify-center gap-9 md:flex-row flex-col p-5 my-3">
      {/* Post Job Section */}
      <div className="postJob md:w-1/3 w-full flex flex-col justify-between">
        <div className="heading m-2">
            <h1 className="text-3xl font-medium"><span className="border-b-[3px] border-orange-600 py-3">Post</span> Jobs</h1>
        </div>

        {/* Text  */}
        <div className="text my-2 md:p-0 p-5">
            <h1 className="text-md font-medium my-2">Quick and Easy Way to Advertise</h1>
            <p className="text-md text-justify">If you're looking to fill open positions with qualified and competent workers, Jobxpro is your best bet.</p>
            <h1 className="text-md font-medium my-2">Hire for Your company:</h1>
            <p className="text-md text-justify">Simply post your work specifications and due dates on our platform. You will be updated on the status of application submissions as they come in.</p>
            <h1 className="text-md font-medium my-2">Reach out to qualified matches:</h1>
            <p className="text-md text-justify">Get in touch with good fits by sorting out candidates using different criteria. There is no extra work or inconvenience involved.</p>
        </div>

        <div className="btns flex gap-5 md:p-0 px-5">
          <button className="bg-orange-600 text-white font-medium hover:bg-orange-700 px-2 py-3 rounded-md">
            POST A JOB
          </button>
          <button className="bg-black text-white font-medium hover:bg-gray-800 px-2 py-3 rounded-md">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Talented Candidates */}
      <div className="md:w-1/3 w-full flex flex-col justify-between">
      <div className="heading m-2">
            <h1 className="text-3xl font-medium"><span className="border-b-[3px] border-orange-600 py-3">Talented</span> Candidates</h1>
        </div>

        {/* Text  */}
        <div className="text my-2 md:p-2 p-5">
            <h1 className="text-md font-medium my-2">Get discovered by companies looking to hire remote</h1>
            <p className="text-md text-justify">Find the best job for you by narrowing your search based on your priorities.</p>
            <h1 className="text-md font-medium my-2">Get your profile listed:</h1>
            <p className="text-md text-justify">Get the attention of potential employers. Find internships and full-time positions by searching with keywords. Following your application, the recruiters will reach out to you directly.</p>
            <h1 className="text-md font-medium my-2">Customize your profile:</h1>
            <p className="text-md text-justify">JobXpro’s impressive customizability lets you zero in on organizations and fields that are a good fit for your expertise and interests. Learn how to use your unique set of experiences, education, and talents to pinpoint the greatest possible career path for you.</p>
        </div>

        <div className="btns flex gap-5 md:p-0 px-5">
          <button className="bg-orange-600 text-white font-medium hover:bg-orange-700 px-2 py-3 rounded-md">
            POST A JOB
          </button>
          <button className="bg-black text-white font-medium hover:bg-gray-800 px-2 py-3 rounded-md">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
