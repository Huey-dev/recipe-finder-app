import React from "react";
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../assets/index";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({ title, image, type }) => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        {/* random images from the array, full width of the page */}
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="Header image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt40 2xl: pt-20 px-4">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
          {title}
        </h1>
        {
          type && (
            <p className=" text-sm mt-4 text-center text-green-400 bg-[#00000090] px-6 py-4 rounded-full">
              Welcome to recipeFinder, your portal to culinary adventures!
              <br className="hidden md:block"/>
              Discover an array of taste like never before
            </p>
          )
        }
      </div>
    </div>
  );
};

export default Header;
