// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Banner from "../Components/Banner";
import CategoriesTab from "../Components/CategoriesTab";
import tabData from "../assets/Categories.json";
import allProducts from "../assets/Products.json";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const Home = () => {
  // const categories = useLoaderData()
  // console.log(categories)
  const [tab, setTab] = useState("all");
  const [products, setProduct] = useState(allProducts.products);
  


  const navigate = useNavigate()

  const handleFilter = (cat) => {
    setTab(cat);
    if (cat == "all") {
      setProduct(allProducts.products);
    } else {
      const newList = allProducts.products.filter((pd) => pd.category == cat);
      setProduct(newList);
    }
  };

  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      {/* Product Tab */}
      <div className="grid grid-cols-[20%,80%] gap-x-2 w-11/12 mx-auto mt-12">
        <div className="">
          <CategoriesTab
            handleFilter={handleFilter}
            tab={tab}
            setTab={setTab}
            tabData={tabData.categories}
          />
        </div>
        <div className="grid grid-cols-3 px-3 gap-4">
          {products?.map((item, i) => (
            <div key={i} className="border border-gray-200 p-4 rounded-lg">
              <img
                className="w-full h-[200px] object-cover"
                src={item?.product_image}
                alt=""
              />
              <h1 className="font-bold text-xl">{item.product_title}</h1>
              <h1 className="flex items-center pr-1 mt-4 font-bold pl-1 ">
                {item.price}
                <RiMoneyDollarCircleLine />
              </h1>
              <button
                onClick={() => navigate(`/view-details/${item.product_id}`)}
                className="bg-[#9538E2] hover:bg-[#903cd4] duration-200  px-4 mt-3 py-1 text-white font-bold rounded-2xl
                            "
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Dynamic Nested Component */}
    </div>
  );
};

export default Home;
