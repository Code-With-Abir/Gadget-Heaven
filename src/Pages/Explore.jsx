import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Explore = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("AllCart"))
  );
  return (
    <div>
      <div className="flex items-center justify-around pt-4 flex-wrap">
        <Link
          to="/"
          className={`font-bold text-2xl hover:bg-[#a5a5a5] px-2 py-1 rounded-md text-black`}
        >
          Gadget Heaven
        </Link>
        <div className="flex lg:gap-x-6 gap-x-1">
          <Link
            to="/"
            className={`font-semibold text-black duration-200 hover:bg-[#7529b4] px-2 py-1 rounded-md }`}
          >
            Home
          </Link>
          <Link
            to="/statistics"
            className={`font-semibold  hover:bg-[#7529b4] duration-200 text-black px-2 py-1 rounded-md `}
          >
            Statistics
          </Link>
          <Link
            to="/dashboard"
            className={`text-black font-semibold duration-200 hover:bg-[#7529b4] px-2 py-1 rounded-md `}
          >
            Dashboard
          </Link>
          <Link
            to="/explore"
            className={`font-semibold hover:bg-[#7529b4] duration-200 px-2 py-1 rounded-md text-black`}
          >
            Explore
          </Link>
        </div>

        <div className="flex gap-x-3 p-3">
          <div className=" items-center flex ">
            <button>
              <FaOpencart className={`text-2xl text-black`} />
            </button>
            <div className="p-2 bg-white rounded-full mt-[-15px]">
              <p className="text-green-500 text-[5px] md:text-[10px] font-bold">
                {items?.length}
              </p>
            </div>
          </div>
          <div className=" items-center flex ">
            <button>
              <CiHeart className={`text-2xl text-black`} />
            </button>
            <div className="p-2 bg-white rounded-full mt-[-15px]">
              <p className="text-green-500 text-[5px] md:text-[10px] font-bold">
              {items?.length}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#9538E2] rounded-md">
        <div className="banner flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-xl  md:text-2xl lg:text-4xl w-[60%] text-white mt-10 mx-auto">
            Explore Now
          </h1>
          <p className="text-white font-semibold w-[65%] mx-auto text-center mt-5">
            {" "}
            Welcome To Gadget Heaven
          </p>
          <Link
            to="/"
            className="font-semibold text-lg bg-white px-5 py-1 rounded-3xl my-6  hover:bg-gray-200 duration-150 text-[#9538E2]"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
