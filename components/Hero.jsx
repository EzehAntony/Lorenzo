"use client";

import {
  MenuOpenRounded,
  MenuRounded,
  ShoppingCart,
  Send,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "header",
      start: "top -10%",
      scrub: 1,
    },
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      //perfume animation
      t1.to("#p1 img", { yPercent: -40, opacity: 0 })
        .to("#p2 img:nth-of-type(1)", {
          yPercent: -40,
          opacity: 0,
        })
        .to("#p2 img:nth-of-type(2)", { y: 40, opacity: 0 }, "<-2")
        .to("#p3 img", { xPercent: -40, opacity: 0 })
        .to("#p4 img:nth-of-type(1)", { yPercent: -40, opacity: 0 })
        .to("#p4 img:nth-of-type(2)", {
          yPercent: -40,
          ease: "bounce",
          opacity: 0,
        });

      /*       gsap.to("main #text", { xPercent: -40, opacity: 0 }).to("main button", {
        yPercent: 40,
        opacity: 0,
      }); */
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-[400px] md:h-[80vh] lg:h-[100vh] px-4  pt-[80px] lg:px-20 bg-gradient-radal flex relative justify-center items-center"
    >
      <header className="fixed z-50 top-0 w-screen left-0 h-[60px] px-4 lg:px-20 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold ">Lorenzo</h2>
        </div>

        <div>
          <IconButton className="relative mr-2">
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

      <main className="flex flex-col justify-around lg:flex-row lg:justify-between ">
        <div className="order-2  w-[100%] flex flex-col justify-center items-center lg:order-1 lg:items-start">
          <h3
            id="text"
            className="  text-3xl font-bold text-center max-w-[85%] my-4 lg:text-6xl lg:text-left lg:max-w-none lg:mb-8"
          >
            Get a fragrance that suits your personality
          </h3>
          <Button
            endIcon={<Send className="fill-[#FEE8C8]" />}
            className="w-[100%] lg:w-[70%] mb-4 bg-[#444444] fill-[#444444] py-2"
            color="primary"
            variant="contained"
          >
            <p className="text-white text-sm font-semibold py-1  lg:py-2 ">
              Get Now
            </p>
          </Button>
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
    </div>
  );
};

export default Hero;
