"use client";

const Sponsors = () => {
  return (
    <div className="w-full px-4 lg:px-20 my-6">
      <h5 className=" capitalize text-left text-lg  mt-14 mb-4 font-bold">
        our sponsors
      </h5>
      <marquee>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg font-bold ">Lorenzo</h2>
          <img src="/lorenzo.svg" className="w-[50px]" alt="" />
          <img src="/perfume2down.svg" className="w-[30px]" alt="" />
          <img src="/perfume4.svg" className="w-[20px]" alt="" />
          <img src="/perfumes.svg" className="w-[50px]" alt="" />
          <img src="/lorenzo.svg" className="w-[50px]" alt="" />
        </div>
      </marquee>
    </div>
  );
};

export default Sponsors;
