import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navBar/Navbar";
import Footer from "../homePage/Footer";


const ApplyJob = () => {
 let isPassword = false;
   
  return (
    <>
      <Navbar />  
      <div>
        <div className="text bg-black text-white">
          <h1 className="p-5 text-center md:w-1/4  w-1/2">
          <Link to="/" className="hover:bg-white hover:text-black p-2 rounded-md">Home</Link>
         / Log In</h1>
        </div>

        {/* Form Containing Email Address Sign In Button */}
        <div className="p-5">
          <div className="my-10 md:w-fit  m-auto w-full border-2 ">
            <div className="bg-white p-10 rounded-lg shadow-2xl">
              <div className="image m-auto flex justify-center">
                <img src="./logo1.png" className="w-20" alt="" />
              </div>
              <form className="mt-5">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 text-left"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-orange-600"
                  />
                </div>


                {isPassword && (  
                  <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 text-left"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="password"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-orange-600"
                  />
                </div>)}
                

                <button
                  type="submit"
                  className="w-full px-3 py-3 text-white bg-orange-600 hover:bg-black rounded-lg focus:outline-none"
                >
                  Sign In
                </button>

                <div className="logo text">
                  <p className="font-nedium text-center">or sign in with</p>
                  <div className="logo flex gap-5 justify-center py-5">
                    <i className="fa-brands fa-google bg-red-600 p-3 text-white"></i>
                    <i className="fa-brands fa-github bg-black p-3 text-white"></i>
                  </div>
                  <div className="text md:flex justify-between block">
                    <p className="text-left">
                      Need an account?{" "}
                      <span className="text-orange-600 hover:cursor-pointer">
                        Join us Now &gt;&gt;
                      </span>
                    </p>
                    <p className="text-end ml-5 ">Forgot Password ?</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ApplyJob;
