import React from "react";
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../assets/index";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        {/* random images from the array, full width of the page */}
        <img
          src={ images[Math.floor(Math.random() * images.length)]}
          alt="Header image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
