function Categories() {
  return (
    <>
      <h3 className="text-lg mt-14 mb-4 font-bold">Categories</h3>
      <div className="w-[100%] px-4 flex justify-around items-center">
        <div className="group cursor-pointer w-[48%] max-w-[300px] min-h-[250px] p-[10px] flex flex-col justify-around items-start">
          <img
            src="man.jpg"
            className="w-[100%] max-h-[150px] lg:max-h-[250px] object-cover"
            alt=""
          />
          <p className="my-2 group-hover:text-[#FF9617] group-hover:scale-125 transition-all">
            Men
          </p>
        </div>
        <div className="group cursor-pointer w-[48%] max-w-[300px] min-h-[250px] p-[10px] flex flex-col justify-around items-start ">
          <img
            src="woman.jpg"
            className="w-[100%] max-h-[150px] lg:max-h-[250px] object-cover"
            alt=""
          />
          <p className="my-2 group-hover:text-[#FF9617] group-hover:scale-125 transition-all">
            Women
          </p>
        </div>
      </div>
    </>
  );
}

export default Categories;
