import React, { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "next/link";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="bg-white shadow-md mb-[1vh] static">
      <div className="p-[2vh] w-[%] md:w-[90%] mx-auto flex flex-row justify-between items-center">

        <div className="flex flex-row items-center">
          <div
            onClick={toggleMobileNav}
            className="md:hidden mr-[2vh] cursor-pointer"
          >
            <MenuIcon className="text-[5vh] text-amber-950"/>
          </div>

          <Link href="/">
            <img src="/favicon.ico" className="w-[8vh]" alt="" />
          </Link> 
        </div>
        

        <div className="navlinks list-none flex flex-row gap-x-[4vh]">
          <Link href="/">
            <li className="text-[2.7vh] font-semibold ">Home</li>
          </Link>
          <Link href="/=">
            <li className="text-[2.7vh] font-semibold">About</li>
          </Link>
          <Link href="/">
            <li className="text-[2.7vh] font-semibold">Shop</li>
          </Link>
          <Link href="/">
            <li className="text-[2.7vh] font-semibold">Contact</li>
          </Link>
        </div>
        <div className="list-none flex flex-row gap-x-[2vh] md:gap-x-[4vh]">
          <Link href='/'>
          <Person2Icon className="cursor-pointer text-amber-800 text-[4.5vh]" />
          </Link>
          <SearchIcon className="cursor-pointer text-amber-800 text-[4.5vh]" />
          {/* <FavoriteIcon className="cursor-pointer text-red-500 text-[4.5vh]" /> */}
          <Link href="/checkout">
            <div className="relative">
              <p className="w-[4vh] h-[4vh] -top-[2vh] left-[2vh] bg-yellow-950 text-white rounded-full flex flex-row justify-center items-center absolute">
                0
              </p>
              <ShoppingBagIcon className="cursor-pointer text-orange-300 text-[4.5vh]" />
            </div>
          </Link>
        </div>

        <div
          className={`navlinks-mobile md:hidden fixed z-50 h-[100vh] w-[80%] top-0  bg-amber-100 flex flex-col items-center transition-transform duration-500 ease-in-out  ${
            mobileNavOpen ? "-translate-x-[5vh]" : "-translate-x-[100vw]"
          }`}
        >
          <div
            onClick={toggleMobileNav}
            className=" cursor-pointer ml-[22vh] p-[4vh]"
          >
            <CloseIcon
              className="text-[5vh] text-amber"
            />
          </div>
          <ul className="flex flex-col  text-gray-700  gap-x-[3vh]">
            <Link href="/" onClick={toggleMobileNav}>
              <li className="text-[3vh] my-[2vh] font-medium focus:underline">
                Home
              </li>
            </Link>
            <Link href="/about" onClick={toggleMobileNav}>
              <li className="text-[3vh] my-[2vh] font-medium">About</li>
            </Link>
            <Link href="/shop" onClick={toggleMobileNav}>
              <li className="text-[3vh] my-[2vh] font-medium">Shop</li>
            </Link>
            <Link href="/contact" onClick={toggleMobileNav}>
              <li className="text-[3vh] my-[2vh] font-medium">Contact</li>
            </Link>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;