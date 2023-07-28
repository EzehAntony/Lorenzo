"use client";

import {
  MenuOpenRounded,
  MenuRounded,
  ShoppingCart,
  Send,
  DoubleArrow,
  KeyboardArrowDown,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Cart from "../components/Cart";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  const t1 = gsap.timeline({});

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#hero", { visibility: "visible" });

      //header animation
      gsap.to("header", {
        background: "#FEE8C8",
        transition: 0,
        scrollTrigger: {
          trigger: "header",
          start: "bottom 50px",
          scrub: true,
        },
      });

      //hero animation
      t1.from("#p1 img", 0.5, { yPercent: -40, opacity: 0 })
        .from("#p3 img", 0.5, { xPercent: -40, opacity: 0 }, "<80%")
        .from("#p2 img:nth-of-type(1)", 0.5, { yPercent: -40, opacity: 0 })
        .from("#p2 img:nth-of-type(2)", 0.5, { y: 40, opacity: 0 }, "<30%")
        .from("#p4 img:nth-of-type(1)", 0.5, {
          scale: 2,
          yPercent: -40,
          opacity: 0,
        })
        .from(
          "#p4 img:nth-of-type(2)",
          0.5,
          {
            yPercent: -40,
            ease: "bounce",
            opacity: 0,
          },
          "<50%"
        )
        .from("main #text", 0.5, { yPercent: -40, opacity: 0, ease: "bounce" })
        .from("main button", 0.5, {
          yPercent: 70,
          opacity: 0,
        })
        .from("main .smalltext", 0.5, { opacity: 0, xPercent: -40 });
    });

    gsap.to("#arrowDown", { y: 40, repeatDelay: .8, repeat: -1, ease: "bounce" });
    return () => ctx.revert();
  }, []);

  const [cart, setCart] = useState(false);

  return (
    <div
      ref={ref}
      id="hero"
      className="w-full invisible  min-h-[400px] md:min-h-[80vh] lg:h-[100vh] pt-[80px] lg:px-20 bg-gradient-radal flex flex-col relative justify-center items-center"
    >
      <header className="fixed z-30 top-0 w-screen left-0 h-[60px] px-4 lg:px-20 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold ">Lorenzo</h2>
        </div>

        <div>
          <IconButton
            onClick={(e) => {
              console.log(cart);
              setCart(true);
            }}
            className="relative mr-5"
          >
            <p className="absolute -top-[4px] -right-[0px] text-sm font-extrabold bg-[#fff] py-[1px] px-1 rounded-md">
              20
            </p>
            <ShoppingCart />
          </IconButton>
          <IconButton>
            <MenuRounded />
          </IconButton>
        </div>
      </header>

      <Cart setting={cart} />

      <main className="w-full flex flex-col  justify-center lg:flex-row lg:justify-between md:items-center px-4 ">
        <div className="order-2  w-full flex flex-col justify-center items-center lg:order-1 lg:items-start">
          <h3
            id="text"
            className="  text-3xl font-bold max-w-[100%] my-4 lg:text-6xl text-left lg:max-w-none lg:mb-8"
          >
            <span className="text-[#ff9617] ">Get</span> a fragrance that suits
            your personality
          </h3>
          <p className="smalltext text-[14px]   max-w-[100%] my-1 lg:text-2xl text-left lg:max-w-none lg:mb-8">
            Avilable premium-quality men's and women's perfumes, trusted by well
            known brands, with proven quality, refresh your day.
          </p>
          <button className="w-full mb-4 bg-[#ff9617] flex justify-center items-center py-2 my-2 rounded-sm ">
            <p className="text-[#FDEAC7] text-md font-bold py-1  lg:py-2 mr-2">
              Get Now
            </p>
            <ShoppingCart style={{ fill: "#FDEAC7" }} />
          </button>
        </div>

        <div
          id="images"
          className="order-1 w-[100%]  relative flex justify-center items-end lg:justify-between"
        >
          <div className="w-[100%]   md:w-[80%] lg:w-[100%] flex justify-center items-end ">
            <div
              id="p1"
              className="w-[60px] md:w-[100px] lg:w-[150px] flex flex-col items-center relative"
            >
              <img className="w-[100%]" src="/perfume4.svg" alt="" />
            </div>
            <div
              id="p2"
              className="w-[60px]  md:w-[100px] lg:w-[120px] flex flex-col items-center relative"
            >
              <img
                className="w-[45px] z-20 md:w-[70px] lg:w-[80px]  absolute"
                src="/perfume1top.svg"
                alt=""
              />

              <img className="w-[100%] z-10" src="/perfume1down.svg" alt="" />
            </div>
            <div
              id="p3"
              className="w-[60px] md:w-[100px] lg:w-[120px] flex flex-col items-center relative"
            >
              <img className="w-[100%]" src="/other2.svg" alt="" />
            </div>
            <div
              id="p4"
              className="w-[60px] md:w-[100px] lg:w-[120px] flex flex-col items-center relative"
            >
              <img
                className="w-[45px] z-20 md:w-[70px] lg:w-[80px] absolute -top-[20px] md:-top-[30px] "
                src="/perfume2top.svg"
                alt=""
              />
              <img className="w-[100%] z-10" src="/perfume2down.svg" alt="" />
            </div>
          </div>
        </div>
      </main>
      <KeyboardDoubleArrowDown
        id="arrowDown"
        className="mt-4 w-8 lg:w-[400px] lg:mt-10 "
      />
    </div>
  );
};

export default Hero;
