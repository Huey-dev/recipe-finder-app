import React, { useState } from "react";
import { Logo } from "../assets/index";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href=""
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <img src={Logo} alt="Logo" />
          recipe<span>Finder</span>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
