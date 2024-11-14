/* eslint-disable react/prop-types */
import { FaOpencart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ textColor }) => {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("AllCart"))
  );
  return (
    <div className="flex items-center lg:justify-around justify-evenly  pt-4 flex-wrap">
      <Link
        to="/"
        className={`font-bold text-2xl hover:bg-[#a5a5a5] px-2 py-1 rounded-md ${textColor}`}
      >
        Gadget Heaven
      </Link>
      <div className="flex lg:gap-x-6 gap-x-1">
        <Link
          to="/"
          className={`font-semibold ${textColor} duration-200 hover:bg-[#7529b4] px-2 py-1 rounded-md }`}
        >
          Home
        </Link>
        <Link
          to="/statistics"
          className={`font-semibold  hover:bg-[#7529b4] duration-200 ${textColor} px-2 py-1 rounded-md `}
        >
          Statistics
        </Link>
        <Link
          to="/dashboard"
          className={`${textColor} font-semibold duration-200 hover:bg-[#7529b4] px-2 py-1 rounded-md `}
        >
          Dashboard
        </Link>
        <Link
          to="/explore"
          className={`font-semibold hover:bg-[#7529b4] duration-200 px-2 py-1 rounded-md ${textColor}`}
        >
          Explore
        </Link>
      </div>
      <div className="flex gap-x-3 p-3">
        <div className=" items-center flex ">
          <button>
            <FaOpencart className={`text-2xl ${textColor}`} />
          </button>
          <div className="p-2 bg-white rounded-full mt-[-15px]"><p className="text-green-500 text-[5px] md:text-[10px] font-bold">{items?.length}</p></div>
        </div>
        <div className=" items-center flex ">
          <button>
            <CiHeart className={`text-2xl ${textColor}`} />
          </button>
          <div className="p-2 bg-white rounded-full mt-[-15px]"><p className="text-green-500 text-[5px] md:text-[10px] font-bold">{items?.length}</p></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
