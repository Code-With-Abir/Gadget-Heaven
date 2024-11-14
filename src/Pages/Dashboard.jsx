import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";

import { useState } from "react";
const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate()

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("AllCart"))
  );
  console.log(items);
  const hanldeRemove = (id) => {
    const newlist = items.filter((pd) => pd.product_id != id);
    setItems(newlist);
    localStorage.setItem("AllCart", JSON.stringify(newlist));
  };

  const showModal = () => {
    localStorage.removeItem("AllCart");
    setModal(true);
  };

  const totalPrice = items?.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="">
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
            Dashboard
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
            <Link
              to="/dashboard"
              className="px-4 text-black py-1 rounded-full bg-white font-bold text-lg border border-gray-300"
            >
              Cart
            </Link>
            <Link
              to="/wishlist"
              className="px-4 text-white py-1 rounded-full bg-[#7529b4] font-bold text-lg border border-gray-300"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>

      <div className="w-11/12 flex justify-between mx-auto items-center py-5 ">
        <h1 className="font-bold text-xl">Cart</h1>
        <div className=" flex gap-x-4 items-center">
          <h1 className="font-bold flex items-center ">
            Total Cost: {totalPrice} <RiMoneyDollarCircleLine />
          </h1>
          <button className="font-bold flex items-center gap-x-2 duration-200 bg-[#9538E2] hover:bg-[#8631cc] px-2 py-1 rounded-full text-white ">
            Short By Price <FaSortAmountUpAlt />
          </button>
          <button
            onClick={() => showModal()}
            className="bg-[#9538e2] hover:bg-[#8631cc] duration-200  font-bold text-white px-3 py-1 rounded-full"
          >
            Purchase
          </button>
        </div>
      </div>

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

      {modal ? (
        <div className="fixed top-0 left-0 w-full h-full bg-[#11111144]">
          <div className="w-4/12 text-center mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border bg-white p-6 rounded-lg z-10">
            <div className=" border-b-2">
              <h1 className="text-4xl ">🤝</h1>
              <h1 className=" text-3xl font-black mb-6">
                Payment Successfully
              </h1>
            </div>
            <p className="my-2 text-xl font-semibold">Thanks for Purchasing</p>
            <h1 className="font-black">Total: {totalPrice}</h1>
            <button
            onClick={() => navigate(`/`)}
             className="font-black bg-gray-400 text-white px-6 my-4 py-1 rounded-full">
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
