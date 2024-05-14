import React from "react";
import home from "../image/home.png";
import orange from "../image/orange.png";

const Home = () => {
  return (
    <div className="md:mx-auto md:container flex md:flex-row flex-col space-y-8 mt-10">
      <div className="md:w-1/2 w-full mt-10 md:px-10 ">
        <div className="flex flex-col space-y-5 mt-10 relative">
          <p className="bg-red-200 p-1 text-xs w-48 rounded-md text-primary">
            WELCOME TO OUR RESTURANT
          </p>
          <h1 className="md:text-6xl text-2xl font-bold ">
            Delicious Foods For Every Occasion And Festival
          </h1>
          <p className="text-gray-500 ">
            Delicious Foods For Every Occsion And Festival
          </p>
        </div>
        <button className="bg-primary rounded-3xl mt-3  px-4 py-3 text-white">
          Order Now
        </button>
        <div className="  absolute  h-44 w-44 top-[35rem] left-2">
          <img
            src={orange}
            alt="orange"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="  absolute  h-44 w-44 top-[30rem] left-[52%] rotate-180">
          <img
            src={orange}
            alt="orange"
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      <div className="md:w-1/2 w-full px-5">
        <div className="relative ">
          <img src={home} alt="home" className="h-full w-full" />
        </div>
        <div className="  absolute  h-44 w-44 top-32 right-8">
          <img
            src={orange}
            alt="orange"
            className="w-full h-full object-cover rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
