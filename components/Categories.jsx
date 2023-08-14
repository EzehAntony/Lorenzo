"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const Categories = ({ img, text, url }) => {
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  const router = useRouter();

  return (
    <div
      onClick={() => {
        alert(url);
      }}
      id="category"
      className="group cursor-pointer sm:max-w-[200px] md:max-w-[250px] h-[200px] md:h-[300px] p-[10px] flex flex-col justify-around items-start overflow-hidden "
    >
      <img
        src={img}
        className="w-[100%]  max-h-[150px] md:max-h-[200px] lg:max-h-[250px] object-cover rounded-l-lg rounded-br-lg"
        alt=""
      />
      <p className="my-2 text-lg capitalize font-semibold group-hover:text-[#029094] group-hover:font-bold group-hover:scale-125 transition-all">
        {text}
      </p>
    </div>
  );
};

export default Categories;
