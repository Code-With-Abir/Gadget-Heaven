// /* eslint-disable react/prop-types */
import img from "../assets/banner.jpg";
import Header from "./Header";
import Navbar from "./Navbar";

const Banner = () => {
  const navbarTextColor = "text-white";
  
  return (
    <div className="">
      <div className="p-2 w-11/12 mx-auto bg-slate-100 rounded-md border-gray-500 border mt-8">
        <div className=" bg-[#9538E2] rounded-md">
          <Navbar textColor={navbarTextColor} />
          <Header
            h1="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
            p="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          />
        </div>
      </div>

      {/* <div className=" top-[75%] lg:top-[65%] left-[8%] absolute w-10/12 mx-auto p-2 border border-black rounded-md "> */}
      <div className="mt-[-200px] w-10/12 mx-auto p-2 border border-black rounded-md ">
        <img
          className="lg:h-[80vh] h-[40vh] rounded-md w-full object-fill"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
