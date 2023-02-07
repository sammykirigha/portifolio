import React, { useState } from "react";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  const [showNavItems, setShowNavItems] = useState(false);

  return (
    <div className="bg-[#001233] group h-[100px] flex items-center px-20 2xl:px-80 sticky top-0 left-0 right-0 w-full z-50 ">
      <div className="w-full flex m-auto items-center justify-between space-x-8">
        <span className="flex flex-row items-center cursor-pointer">
          <FaRegLightbulb className="h-12 w-[100px] !text-[#efe0ca] top-0" />
          <span className="text-[#ff595a] font-[800] text-[1.3rem]">
            DevSam
          </span>
        </span>
        <div className="container flex gap-4 relative items-center">
          <div
            className={`
        absolute lg:static flex-col w-[200px] shadow-lg p-3 items-center lg:shadow-none lg:p-0 lg:w-auto transition-all duration-150 ease-linear lg:transition-none
        lg:flex-row bg-white lg:bg-transparent lg:items-end top-[60px] right-0
        ${showNavItems ? "flex" : "hidden lg:flex"}
        `}
          >
            <Link
              onClick={() => setShowNavItems(false)}
              href="/"
              className="lg:ml-10 mt-4 lg:mt-0 !text-[#efe0ca] hover:underline  cursor-pointer text-xl font-medium tracking-wide"
            >
              Home
            </Link>
            <Link
              onClick={() => setShowNavItems(false)}
              href="/About"
              className="lg:ml-10 mt-4 lg:mt-0 !text-[#efe0ca] hover:underline cursor-pointer text-xl font-medium tracking-wide"
            >
              About me
            </Link>
            <Link
              onClick={() => setShowNavItems(false)}
              href="/services"
              className="lg:ml-10 mt-4 lg:mt-0 !text-[#efe0ca] hover:underline cursor-pointer text-xl font-medium tracking-wide"
            >
              Services
            </Link>
            <Link
              onClick={() => setShowNavItems(false)}
              href="/blogs"
              className="lg:ml-10 mt-4 lg:mt-0 !text-[#efe0ca] hover:underline cursor-pointer text-xl font-medium tracking-wide"
            >
              Blogs
            </Link>
            <Link
              onClick={() => setShowNavItems(false)}
              href="/contact-me"
              className="lg:ml-10 mt-4 lg:mt-0 !text-[#efe0ca] hover:underline cursor-pointer text-xl font-medium tracking-wide"
            >
              Contact me
            </Link>
            <button className="!bg-[#efe0ca] text-[#001233] cursor-pointer text-xl font-medium lg:ml-10 mt-4 lg:mt-0 border border-[#efe0ca] rounded-full px-5 py-1 hover:bg-[#e71356]">
              Hire Me
            </button>
          </div>
          <div
            onClick={() => setShowNavItems(!showNavItems)}
            className="ml-auto sm:block lg:hidden"
          >
            {showNavItems ? (
              <GrClose className="h-20 ml-auto cursor-pointer " />
            ) : (
              <GoThreeBars className="h-20 ml-auto cursor-pointer " />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
