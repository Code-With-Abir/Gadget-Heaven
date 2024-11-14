/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Header = ({h1 , p}) => {
    return (
        <div>
            <div className=" bg-[#9538E2] rounded-md">
                
                 <div className="banner flex flex-col items-center justify-center">
                     <h1 className="text-center font-bold text-xl  md:text-2xl lg:text-4xl w-[60%] text-white mt-10 mx-auto">{h1}</h1>
                     <p className="text-white font-semibold w-[65%] mx-auto text-center mt-5" >{p}</p>
                     <Link to="/" className="font-semibold text-lg bg-white px-5 py-1 rounded-3xl my-6 mb-52 lg:mb-60 hover:bg-gray-200 duration-150 text-[#9538E2]">Shop Now</Link>
                 </div>
             </div>
        </div>
    );
};

export default Header;