import React from "react";
import Hero from "../../components/Hero";
import Categories from "@/components/Categories";
import Link from "next/link";

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

      {/* Contact */}

      <div className="w-full px-4 lg:px-20 bg-[#fff8eb] py-6 my-4 ">
        <h5 className=" capitalize text-center text-2xl  mt-14 mb-4 font-bold my-4">
          contact us
        </h5>

        <p className="my-4">
          Have a question? You may find an answer in our{" "}
          <Link className="soqa" href="">FAQs</Link>
        </p>
        <p className="my-4">
          You can also contact us: <br /> call +29233994455{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
