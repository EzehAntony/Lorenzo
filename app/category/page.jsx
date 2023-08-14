"use client";

import { useEffect } from "react";
import Header from "@/components/Header";

const page = () => {
  useEffect(() => {
    window.scrollY > 100 ? console.log(true) : console.log(false);
  }, [window.scrolly]);

  return (
    <div className="min-h-[2000px]">
      <Header />
    </div>
  );
};

export default page;
