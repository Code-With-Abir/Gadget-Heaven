import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import allProducts from "../assets/Products.json";
import { FaOpencart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(
    allProducts.products.find((pd) => pd.product_id == id)
  );

  const addcart = (product) => {
    const oldCart = localStorage.getItem("AllCart");
    console.log("oldCart>>>>", JSON.parse(oldCart));
    toast.success(`${product.product_title} add to cart`, {
      position: "top-center",
    });

    if (oldCart) {
      localStorage.setItem(
        "AllCart",
        JSON.stringify([...JSON.parse(oldCart), product])
      );
    } else {
      localStorage.setItem("AllCart", JSON.stringify([product]));
    }
  };

  const addwishlist = (product) => {
    const oldCart = localStorage.getItem("AllCart");
    console.log("oldCart>>>>", JSON.parse(oldCart));
    toast.success(`${product.product_title} add to Wishlist`, {
      position: "top-center",
    });

    if (oldCart) {
      localStorage.setItem(
        "AllCart",
        JSON.stringify([...JSON.parse(oldCart), product])
      );
    } else {
      localStorage.setItem("AllCart", JSON.stringify([product]));
    }
  };

  return (
    <div>
      <ToastContainer />
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
                2
              </p>
            </div>
          </div>
          <div className=" items-center flex ">
            <button>
              <CiHeart className={`text-2xl text-black`} />
            </button>
            <div className="p-2 bg-white rounded-full mt-[-15px]">
              <p className="text-green-500 text-[5px] md:text-[10px] font-bold">
                2
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#9538E2] rounded-md pb-32">
        <div className="banner flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-xl  md:text-2xl lg:text-4xl w-[60%] text-white mt-10 mx-auto">
            Product Details
          </h1>
          <p className="text-white font-semibold w-[65%] mx-auto text-center mt-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link
            to="/"
            className="font-semibold text-lg bg-white px-5 py-1 rounded-3xl my-6 hover:bg-gray-200 duration-150 text-[#9538E2]"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-7 w-8/12 mx-auto mt-[-140px] rounded-lg shadow-lg bg-white">
        <div className="flex justify-center items-center col-span-3 ">
          <img
            className=" w-full h-[70%] items-center object-cover"
            src={product.product_image}
            alt=""
          />
        </div>

        <div className="col-span-4 bg-white p-4 py-4">
          <h1 className="font-bold text-3xl mt-3">{product.product_title}</h1>
          <div className="pt-6">
            <h1
              className={` px-3 text-center font-bold rounded-full border border-green-600 w-[100px] py-1 bg-green-200 ${
                product.availability == !true ? "hidden" : "block"
              }`}
            >
              In Stock
            </h1>
            <h1
              className={` px-3 text-center font-bold rounded-full border border-red-600 w-[100px] py-1 bg-red-200 ${
                product.availability == !true ? "block" : "hidden"
              }`}
            >
              Out Stock
            </h1>
          </div>
          <h1 className="flex font-semibold text-xl items-center pt-3">
            Price: {product.price}
            <RiMoneyDollarCircleLine />
          </h1>

          <p className="font-semibold text-md text-gray-600">
            <span className=" text-lg font-black text-black">Description:</span>{" "}
            {product.description}
          </p>
          <h1 className="font-bold py-2">
            Specification: <span className="font-black">{product.brand}</span>{" "}
            <ul className=" space-y-[2px] pt-3">
              <li className="font-bold">{product.specifications.Processor}</li>
              <li className="font-bold">{product.specifications.RAM}</li>
              <li className="font-bold">{product.specifications.Storage}</li>
              <li className="font-bold">{product.specifications.ScreenSize}</li>
              <li className="font-bold">{product.specifications.Camera}</li>
              <li className="font-bold">{product.specifications.Battery}</li>
              <li className="font-bold">{product.specifications.Storage}</li>
              <li className="font-bold">{product.specifications.Type}</li>
              <li className="font-bold">
                {product.specifications.Connectivity}
              </li>
              <li className="font-bold">
                {product.specifications.NoiseCancellation}
              </li>
              <li className="font-bold">
                {product.specifications.BatteryLife}
              </li>
              <li className="font-bold">{product.specifications.CaseSize}</li>
              <li className="font-bold">{product.specifications.GPS}</li>
              <li className="font-bold">
                {product.specifications.WaterResistance}
              </li>
              <li className="font-bold">
                {product.specifications.Compatibility}
              </li>
            </ul>
          </h1>

          <h1 className="font-bold">
            Rating: <span className="font-black">({product.rating})</span>
          </h1>
          <div className=" flex gap-x-2 py-4">
            <button
              onClick={() => addcart(product)}
              className="flex text-lg font-bold bg-[#9538E2] hover:bg-gray-300 hover:text-black duration-200 text-white px-3 py-1 rounded-full bg items-center gap-2"
            >
              Add To cart <FaOpencart />
            </button>
            <button
              onClick={() => addwishlist(product)}
              className="text-2xl p-2 bg-gray-300 rounded-full duration-200 font-bold hover:bg-gray-200"
            >
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
