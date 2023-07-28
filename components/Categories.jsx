function Categories() {
  return (
    <>
      <h3 className="text-lg mt-14 mb-4 font-bold">Categories</h3>
      <div className="w-[100%] px-4 flex justify-around items-center">
        <div className="max-w-[200px] min-h-[150px] p-[10px] flex flex-col justify-around items-start">
          <img
            src="man.jpg"
            className="w-[150px] max-h-[150px] object-cover"
            alt=""
          />
          <p className="my-2">Men</p>
        </div>
        <div className="max-w-[200px] min-h-[150px] p-[10px] flex flex-col justify-around items-start ">
          <img
            src="woman.jpg"
            className="w-[150px]  max-h-[150px] object-cover"
            alt=""
          />
          <p className="my-2">Women</p>
        </div>
      </div>
    </>
  );
}

export default Categories;
