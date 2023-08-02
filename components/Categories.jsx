"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function Categories({ img, text }) {
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);

  return (
    <div
       id="category"
      className=" group cursor-pointer w-[48%] sm:max-w-[200px] md:max-w-[250px] h-[200px] md:h-[300px] p-[10px] flex flex-col justify-around items-start overflow-hidden "
    >
      <img
        src={img}
        className="w-[100%]  max-h-[150px] md:max-h-[200px] lg:max-h-[250px] object-cover rounded-l-lg rounded-br-lg"
        alt=""
      />
      <p className="my-2 capitalize font-semibold group-hover:text-[#ebb16c] group-hover:font-bold group-hover:scale-125 transition-all">
        {text}
      </p>
    </div>
  );
}

export default Categories;
