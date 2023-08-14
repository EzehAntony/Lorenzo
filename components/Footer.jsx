"use client";

import React from "react";
import Categories from "@/components/Categories";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import { ChatBubble } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="w-full px-4 lg:px-20 bg-[#fff8eb] py-6  ">
      <h5 className=" capitalize text-center text-xl  mt-14 mb-4 font-semibold my-4">
        contact us
      </h5>

      <p className="my-4">
        Have a question? You may find an answer in our{" "}
        <Link className="text-[#029094] font-semibold" href="">
          FAQs
        </Link>
      </p>
      <p className="my-4">
        You can also contact us: <br /> call +29233994455
      </p>

      <button className=" p-4 br- h-[50px] text-white bg-[#029094] flex justify-center items-center ">
        <p className="font-semibold">Live Chat</p>
        <ChatBubble className="fill-white ml-2" />
      </button>
    </div>
  );
};

export default Footer;
