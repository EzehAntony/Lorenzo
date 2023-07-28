import React from "react";
import Hero from "../../components/Hero";
import Categories from "@/components/Categories";

function Home() {
  return (
    <div className="min-h-[2000px] bg-[#FEEBC8] flex flex-col items-center  ">
      <Hero />
      <Categories />
    </div>
  );
}

export default Home;
