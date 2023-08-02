import React from "react";
import Hero from "../../components/Hero";
import Categories from "@/components/Categories";

function Home() {
  return (
    <div className="min-h-[2000px] bg-[#FEEBC8] flex flex-col items-center  ">
      <Hero />
      {/* categories */}
      <div className="w-full ">
        <h3 className="ml-4 lg:ml-20 text-lg  mt-14 mb-4 font-bold">
          Categories
        </h3>
        <div className="w-[100%] lg:px-20 flex flex-wrap justify-around md:justify-start lg:justify-start items-center">
          <Categories img="man.jpg" text="men" />
          <Categories img="woman.jpg" text="women" />
        </div>
      </div>

      {/* Most purchased */}
      <div className="w-full ">
        <h3 className="ml-4 lg:ml-20 text-lg capitalize  mt-14 mb-4 font-bold">
          Most purchased
        </h3>
        <div className="w-[100%] lg:px-20 flex flex-wrap justify-around md:justify-start lg:justify-start items-center">
          <Categories img="man.jpg" text="men" />
          <Categories img="woman.jpg" text="women" />
        </div>
      </div>

      {/* marquee */}

      <div className="w-full px-4 lg:px-20">
        <h5 className=" capitalize text-left text-lg  mt-14 mb-4 font-bold">
          our sponsors
        </h5>
        <marquee className="flex flex-row items-center">
          <h2 className="text-lg font-bold ">Lorenzo</h2>

          <img src="/lorenzo.svg" className="w-[50px]" alt="" />
        </marquee>
      </div>
    </div>
  );
}

export default Home;
