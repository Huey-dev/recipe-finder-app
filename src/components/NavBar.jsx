import React, { useState } from "react";
import { Logo } from "../assets/index";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <img
            className="hidden md:block sm:block w-8 h-8 lg:w-14 lg:h-14"
            src={Logo}
            alt="Logo"
          />
          recipe<span>Finder</span>
        </a>
        <ul className="hidden md:flex text-white gap-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Explore">Explore</a>
          </li>
          <li>
            {" "}
            <a href="/Favourites">Favourites</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
        <Button
          title="Sign-in"
          containerStyles="hidden sm:block md:block bg-transparent border border-white text-white hover:bg-white hover: text-slate-700 rounded-full min-w-[130px]"
        />
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="block md:hidden sm:hidden text-white text-xl"
        >
          {open ? <AiOutlineClose /> : <FaHamburger />}
        </button>
      </nav>
      <div
        className={`${open ? "flex" : "hidden"}
      bg-black flex-col w-full p-4 px-4 pt-16 pb-10 text-white gap-6 text-[14px]
      `}
      >
        <a href="/">Home</a>
        <a href="/#Explore">Explore</a>
        <a href="/#Favourites">Favourites</a>
        <a href="/#Contact">Contact</a>
      </div>
    </header>
  );
};

export default NavBar;
