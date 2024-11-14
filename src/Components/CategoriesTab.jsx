/* eslint-disable react/prop-types */

const CategoriesTab = ({ tabData, tab, setTab , handleFilter }) => {
  console.log("tabdata?>>1122", tabData);
  return (
    <div className=" space-y-4 border rounded border-gray-400 text-center p-6
    ">
      <button
        onClick={() => handleFilter("all")}
        className={` flex space-y-3 text-center w-full justify-center items-center font-bold rounded-3xl px-2 py-1 ${tab == "all" ? "bg-[#9538E2]  text-white" : "bg-gray-100"}`}
      >
        All Product
      </button>
      {tabData &&
        tabData.map((categ) => (
          <button
            onClick={() => handleFilter(categ.category)}
            className={`flex space-y-3 text-center w-full justify-center items-center font-bold rounded-3xl px-2 py-1 ${
              tab == categ.category ? "bg-[#9538E2]  text-white" : "bg-gray-100"
            }  `}
            key={categ.category}
          >
            {categ.category}
          </button>
        ))}
    </div>
  );
};

export default CategoriesTab;
