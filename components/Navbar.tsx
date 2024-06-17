import React, { useState } from "react";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  const [showNavItems, setShowNavItems] = useState(false);

  return (
    <div className=" bg-[#001233] group h-[80px] flex items-center justify-center sticky px-5 lg:px-20 2xl:px-60 top-0 left-0 right-0 w-full z-50 ">
      <div className="w-full flex m-auto items-center justify-between space-x-8">
        <span className="flex flex-row items-center cursor-pointer">
          <FaRegLightbulb className="h-12 w-[100px] !text-[#efe0ca] top-0" />
          <span className="text-white font-[800] text-[1.3rem]">
            DevSam
          </span>
        </span>
        <div className="w-full justify-start pl-10 flex gap-4 relative items-center">
          <div
            className={`
        absolute lg:static flex-col w-[200px] ml-20 shadow-lg p-3 items-center lg:shadow-none lg:p-0 lg:w-auto transition-all duration-150 ease-linear lg:transition-none
        lg:flex-row bg-white lg:bg-transparent lg:items-end top-[80px] rounded-b-lg -right-5
        ${showNavItems ? "flex" : "hidden lg:flex"}
        `}
          >
            <Link
              onClick={() => setShowNavItems(false)}
              href="/"
              className="lg:ml-7 mt-4 lg:mt-0 !text-[#bc60fb] hover:underline !lg:text-white  cursor-pointer text-xl font-medium tracking-wide"
            >
              Home
            </Link>
            <Link
              onClick={() => setShowNavItems(false)}
              href="/About"
              className="lg:ml-7 mt-4 lg:mt-0 !text-[#bc60fb] hover:underline cursor-pointer text-xl font-medium whitespace-nowrap xl:tracking-wide"
            >
              About me
            </Link>
            <Link
              onClick={() => setShowNavItems(false)}
              href="/Contact"
              className="lg:ml-7 mt-4 lg:mt-0 !text-[#bc60fb] hover:underline cursor-pointer text-xl font-medium whitespace-nowrap tracking-wide"
            >
              Contact me
            </Link>
          </div>
          <div
            onClick={() => setShowNavItems(!showNavItems)}
            className="ml-auto sm:block lg:hidden"
          >
            {showNavItems ? (
              <MdClose className="h-20 ml-auto cursor-pointer text-2xl font-[700] text-[#bc60fb]" />
            ) : (
              <GoThreeBars className="h-20 ml-auto cursor-pointer text-[#bc60fb] " />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
