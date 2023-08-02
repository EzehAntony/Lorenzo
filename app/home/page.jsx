import React from "react";
import Hero from "../../components/Hero";
import Categories from "@/components/Categories";

function Home() {
  return (
    <div className="min-h-[2000px] bg-[#FEEBC8] flex flex-col items-center  ">
      <Hero />
      <div className="w-full ">
        <h3 className="ml-4 lg:ml-20 text-lg  mt-14 mb-4 font-bold">
          Categories
        </h3>
        <div className="w-[100%] lg:px-20 flex flex-wrap justify-around md:justify-start lg:justify-start items-center">
          <Categories img="man.jpg" text="men" />
          <Categories img="woman.jpg" text="women" />
        </div>
      </div>
    </div>
  );
}

export default Home;
