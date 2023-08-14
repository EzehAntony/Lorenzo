import React from "react";
import Hero from "../../components/Hero";
import Categories from "@/components/Categories";
import Category from "@/components/Category";
import MostPurchased from "@/components/mostPurchased";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="bg-[#FEEBC8] flex flex-col items-center ">
      <Hero />
      <Category />
      <MostPurchased />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
