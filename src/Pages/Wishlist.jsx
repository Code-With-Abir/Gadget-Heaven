import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Wishlist = () => {

    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("AllCart"))
      );

      const hanldeRemove = (id) => {
        const newlist = items.filter((pd) => pd.product_id != id);
        setItems(newlist);
        localStorage.setItem("AllCart", JSON.stringify(newlist));
      };

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
            Wishlist
          </h1>
          <p className="text-white font-semibold w-[65%] mx-auto text-center mt-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link
            to="/"
            className="font-semibold text-lg bg-white px-5 py-1 rounded-3xl my-6  hover:bg-gray-200 duration-150 text-[#9538E2]"
          >
            Shop Now
          </Link>

          <div className=" flex gap-x-4 py-4">
          <Link to='/dashboard'  className="px-4 text-white bg-[#7529b4] py-1 rounded-full font-bold text-lg border border-gray-300">
              Cart
            </Link>
            <Link to='/wishlist' className="px-4 text-black bg-white py-1 rounded-full font-bold text-lg border border-gray-300">
              Wishlist
            </Link>
          </div>
        </div>
      </div>
        <div className="py-6"><h1 className="font-black text-3xl text-center">Wishlist</h1></div>
      <div className="">
      {items?.map((item, i) => (
        <div key={i}>
          <div className="border border-gray-300 rounded-xl flex w-11/12 mx-auto mt-5 ">
            <div className="flex justify-between w-full mx-auto p-4">
              <div className=" flex w-[200px]">
                <img
                  className=" object-cover"
                  src={item.product_image}
                  alt=""
                />
              </div>
              <div className="justify-center items-center flex-col flex space-y-1">
                <h1 className="text-3xl font-black">{item.product_title}</h1>
                <p className="text-xl font-semibold">{item.description}</p>
                <p className="text-2xl font-bold flex items-center">
                  {item.price}
                  <RiMoneyDollarCircleLine />
                </p>
              </div>
              <div className=" flex justify-center items-center pr-10">
                <button onClick={() => hanldeRemove(item.product_id)}>
                  <MdDeleteForever className="text-4xl text-red-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

    </div>
  );
};

export default Wishlist;
