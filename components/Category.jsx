"use client";

import React from "react";
import Categories from "@/components/Categories";

const Category = () => {
  return (
    <div className="w-[100%] px-4 lg:px-20">
      <h3 className=" text-lg  mt-14 mb-4 font-bold">Categories</h3>
      <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Categories img="man.jpg" text="men" />
        <Categories img="woman.jpg" text="women" />
      </div>
      <p className="mt-4 text-[#029094] font-bold">View more</p>
    </div>
  );
};

export default Category;
