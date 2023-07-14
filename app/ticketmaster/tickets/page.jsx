"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Tickets() {
  const router = useRouter();

  const [data, setData] = useState({
    week: "sat",
    month: "july",
    day: 22,
    time: "6:30pm",
    location: "Lumen Field",
    ticket: 6,
  });

  return (
    <div>
      <header className="h-[70px] bg-[#1F2229] w-screen text-white flex justify-around  items-center capitalize ">
        <h3> </h3>
        <> </>
        <h3>my events</h3>
        <h3>help </h3>
      </header>

      <Swiper
        className="bg-transparent w-full mt-8 "
        slidesPerView={"auto"}
        spaceBetween={50}
        centeredSlides={true}
      >
        <div>
          <SwiperSlide className="bg-transparentrounded-xl w-2/4 max-w-[90%] ">
            <p className="text-sm text-white text-center rounded-t-xl p-2 w-full bg-[#0E5BC8]">
              TaylorSwiftTix Presale Powered by Verified Fan
            </p>
            <div className="bg-[#0361DD] flex justify-around items-center py-6">
              <div className="group text-white">
                <p className="text-sm font-light">SEC</p>
                <h3 className="font-bold text-lg">FL-7</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">ROW</p>
                <h3 className="font-bold text-lg">15</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">SEAT</p>
                <h3 className="font-bold text-lg">7</h3>
              </div>
            </div>

            <div className="w-full flex relative justify-center items-center before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-[#1F1F1F] before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30">
              <img
                src="/ticket/taylor.png"
                className="w-[80%] max-w-[300px] my-4 "
                alt=""
              />

              <div className="text w-[97%] px-2 absolute bottom-0 py-2 flex justify-center items-center flex-col">
                <h1 className="text-xl  text-white drop-shadow-[2px_2px_5px_black] font-bold">
                  Taylor Swift | The Eras Tour
                </h1>
                <p className="text-sm text-white capitalize font-semibold drop-shadow-[2px_2px_5px_black] ">
                  {data.day}, {data.month} {data.day}, {data.time} .{" "}
                  {data.location}
                </p>
              </div>

              <div></div>
            </div>

            <div className="w-full flex justify-center rounded-b-xl items-center border-x-[1px] border-black flex-col">
              <p className="w-full text-center my-4 text-sm font-bold">
                SOUTH-GATE
              </p>

              <div className="h-[50px] w-[70%] flex justify-center items-center text-sm font-bold bg-black rounded-xl my-4">
                <p className="text-white">Add to Apple Wallet</p>
              </div>

              <div className="w-full flex px-3 font-semibold justify-between py-4 text-[#1170F2] text-sm ">
                <p>View Barcode</p>
                <p>Ticket Details</p>
              </div>

              <div className="bg-[#0957C4] w-full flex py-3 rounded-b-xl justify-center items-center ">
                <img src="/ticket/ticket.svg" className="w-[20px]" alt="" />
                <p className="text-white font-bold py-3 text-sm">ticketmaster.verified</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-transparentrounded-xl w-2/4 max-w-[90%] ">
            <p className="text-sm text-white text-center rounded-t-xl p-2 w-full bg-[#0E5BC8]">
              TaylorSwiftTix Presale Powered by Verified Fan
            </p>
            <div className="bg-[#0361DD] flex justify-around items-center py-6">
              <div className="group text-white">
                <p className="text-sm font-light">SEC</p>
                <h3 className="font-bold text-lg">FL-7</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">ROW</p>
                <h3 className="font-bold text-lg">15</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">SEAT</p>
                <h3 className="font-bold text-lg">7</h3>
              </div>
            </div>

            <div className="w-full flex relative justify-center items-center before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-[#1F1F1F] before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30">
              <img
                src="/ticket/taylor.png"
                className="w-[80%] max-w-[300px] my-4 "
                alt=""
              />

              <div className="text w-[97%] px-2 absolute bottom-0 py-2 flex justify-center items-center flex-col">
                <h1 className="text-xl  text-white drop-shadow-[2px_2px_5px_black] font-bold">
                  Taylor Swift | The Eras Tour
                </h1>
                <p className="text-sm text-white capitalize font-semibold drop-shadow-[2px_2px_5px_black] ">
                  {data.day}, {data.month} {data.day}, {data.time} .{" "}
                  {data.location}
                </p>
              </div>

              <div></div>
            </div>

            <div className="w-full flex justify-center rounded-b-xl items-center border-x-[1px] border-black flex-col">
              <p className="w-full text-center my-4 text-sm font-bold">
                SOUTH-GATE
              </p>

              <div className="h-[50px] w-[70%] flex justify-center items-center text-sm font-bold bg-black rounded-xl my-4">
                <p className="text-white">Add to Apple Wallet</p>
              </div>

              <div className="w-full flex px-3 font-semibold justify-between py-4 text-[#1170F2] text-sm ">
                <p>View Barcode</p>
                <p>Ticket Details</p>
              </div>

              <div className="bg-[#0957C4] w-full flex py-3 rounded-b-xl justify-center items-center ">
                <img src="/ticket/ticket.svg" className="w-[20px]" alt="" />
                <p className="text-white font-bold py-3 text-sm">ticketmaster.verified</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-transparentrounded-xl w-2/4 max-w-[90%] ">
            <p className="text-sm text-white text-center rounded-t-xl p-2 w-full bg-[#0E5BC8]">
              TaylorSwiftTix Presale Powered by Verified Fan
            </p>
            <div className="bg-[#0361DD] flex justify-around items-center py-6">
              <div className="group text-white">
                <p className="text-sm font-light">SEC</p>
                <h3 className="font-bold text-lg">FL-7</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">ROW</p>
                <h3 className="font-bold text-lg">15</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">SEAT</p>
                <h3 className="font-bold text-lg">7</h3>
              </div>
            </div>

            <div className="w-full flex relative justify-center items-center before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-[#1F1F1F] before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30">
              <img
                src="/ticket/taylor.png"
                className="w-[80%] max-w-[300px] my-4 "
                alt=""
              />

              <div className="text w-[97%] px-2 absolute bottom-0 py-2 flex justify-center items-center flex-col">
                <h1 className="text-xl  text-white drop-shadow-[2px_2px_5px_black] font-bold">
                  Taylor Swift | The Eras Tour
                </h1>
                <p className="text-sm text-white capitalize font-semibold drop-shadow-[2px_2px_5px_black] ">
                  {data.day}, {data.month} {data.day}, {data.time} .{" "}
                  {data.location}
                </p>
              </div>

              <div></div>
            </div>

            <div className="w-full flex justify-center rounded-b-xl items-center border-x-[1px] border-black flex-col">
              <p className="w-full text-center my-4 text-sm font-bold">
                SOUTH-GATE
              </p>

              <div className="h-[50px] w-[70%] flex justify-center items-center text-sm font-bold bg-black rounded-xl my-4">
                <p className="text-white">Add to Apple Wallet</p>
              </div>

              <div className="w-full flex px-3 font-semibold justify-between py-4 text-[#1170F2] text-sm ">
                <p>View Barcode</p>
                <p>Ticket Details</p>
              </div>

              <div className="bg-[#0957C4] w-full flex py-3 rounded-b-xl justify-center items-center ">
                <img src="/ticket/ticket.svg" className="w-[20px]" alt="" />
                <p className="text-white font-bold py-3 text-sm">ticketmaster.verified</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-transparentrounded-xl w-2/4 max-w-[90%] ">
            <p className="text-sm text-white text-center rounded-t-xl p-2 w-full bg-[#0E5BC8]">
              TaylorSwiftTix Presale Powered by Verified Fan
            </p>
            <div className="bg-[#0361DD] flex justify-around items-center py-6">
              <div className="group text-white">
                <p className="text-sm font-light">SEC</p>
                <h3 className="font-bold text-lg">FL-7</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">ROW</p>
                <h3 className="font-bold text-lg">15</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">SEAT</p>
                <h3 className="font-bold text-lg">7</h3>
              </div>
            </div>

            <div className="w-full flex relative justify-center items-center before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-[#1F1F1F] before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30">
              <img
                src="/ticket/taylor.png"
                className="w-[80%] max-w-[300px] my-4 "
                alt=""
              />

              <div className="text w-[97%] px-2 absolute bottom-0 py-2 flex justify-center items-center flex-col">
                <h1 className="text-xl  text-white drop-shadow-[2px_2px_5px_black] font-bold">
                  Taylor Swift | The Eras Tour
                </h1>
                <p className="text-sm text-white capitalize font-semibold drop-shadow-[2px_2px_5px_black] ">
                  {data.day}, {data.month} {data.day}, {data.time} .{" "}
                  {data.location}
                </p>
              </div>

              <div></div>
            </div>

            <div className="w-full flex justify-center rounded-b-xl items-center border-x-[1px] border-black flex-col">
              <p className="w-full text-center my-4 text-sm font-bold">
                SOUTH-GATE
              </p>

              <div className="h-[50px] w-[70%] flex justify-center items-center text-sm font-bold bg-black rounded-xl my-4">
                <p className="text-white">Add to Apple Wallet</p>
              </div>

              <div className="w-full flex px-3 font-semibold justify-between py-4 text-[#1170F2] text-sm ">
                <p>View Barcode</p>
                <p>Ticket Details</p>
              </div>

              <div className="bg-[#0957C4] w-full flex py-3 rounded-b-xl justify-center items-center ">
                <img src="/ticket/ticket.svg" className="w-[20px]" alt="" />
                <p className="text-white font-bold py-3 text-sm">ticketmaster.verified</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-transparentrounded-xl w-2/4 max-w-[90%] ">
            <p className="text-sm text-white text-center rounded-t-xl p-2 w-full bg-[#0E5BC8]">
              TaylorSwiftTix Presale Powered by Verified Fan
            </p>
            <div className="bg-[#0361DD] flex justify-around items-center py-6">
              <div className="group text-white">
                <p className="text-sm font-light">SEC</p>
                <h3 className="font-bold text-lg">FL-7</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">ROW</p>
                <h3 className="font-bold text-lg">15</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">SEAT</p>
                <h3 className="font-bold text-lg">7</h3>
              </div>
            </div>

            <div className="w-full flex relative justify-center items-center before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-[#1F1F1F] before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30">
              <img
                src="/ticket/taylor.png"
                className="w-[80%] max-w-[300px] my-4 "
                alt=""
              />

              <div className="text w-[97%] px-2 absolute bottom-0 py-2 flex justify-center items-center flex-col">
                <h1 className="text-xl  text-white drop-shadow-[2px_2px_5px_black] font-bold">
                  Taylor Swift | The Eras Tour
                </h1>
                <p className="text-sm text-white capitalize font-semibold drop-shadow-[2px_2px_5px_black] ">
                  {data.day}, {data.month} {data.day}, {data.time} .{" "}
                  {data.location}
                </p>
              </div>

              <div></div>
            </div>

            <div className="w-full flex justify-center rounded-b-xl items-center border-x-[1px] border-black flex-col">
              <p className="w-full text-center my-4 text-sm font-bold">
                SOUTH-GATE
              </p>

              <div className="h-[50px] w-[70%] flex justify-center items-center text-sm font-bold bg-black rounded-xl my-4">
                <p className="text-white">Add to Apple Wallet</p>
              </div>

              <div className="w-full flex px-3 font-semibold justify-between py-4 text-[#1170F2] text-sm ">
                <p>View Barcode</p>
                <p>Ticket Details</p>
              </div>

              <div className="bg-[#0957C4] w-full flex py-3 rounded-b-xl justify-center items-center ">
                <img src="/ticket/ticket.svg" className="w-[20px]" alt="" />
                <p className="text-white font-bold py-3 text-sm">ticketmaster.verified</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-transparentrounded-xl w-2/4 max-w-[90%] ">
            <p className="text-sm text-white text-center rounded-t-xl p-2 w-full bg-[#0E5BC8]">
              TaylorSwiftTix Presale Powered by Verified Fan
            </p>
            <div className="bg-[#0361DD] flex justify-around items-center py-6">
              <div className="group text-white">
                <p className="text-sm font-light">SEC</p>
                <h3 className="font-bold text-lg">FL-7</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">ROW</p>
                <h3 className="font-bold text-lg">15</h3>
              </div>
              <div className="group text-white">
                <p className="text-sm font-light">SEAT</p>
                <h3 className="font-bold text-lg">7</h3>
              </div>
            </div>

            <div className="w-full flex relative justify-center items-center before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-[#1F1F1F] before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30">
              <img
                src="/ticket/taylor.png"
                className="w-[80%] max-w-[300px] my-4 "
                alt=""
              />

              <div className="text w-[97%] px-2 absolute bottom-0 py-2 flex justify-center items-center flex-col">
                <h1 className="text-xl  text-white drop-shadow-[2px_2px_5px_black] font-bold">
                  Taylor Swift | The Eras Tour
                </h1>
                <p className="text-sm text-white capitalize font-semibold drop-shadow-[2px_2px_5px_black] ">
                  {data.day}, {data.month} {data.day}, {data.time} .{" "}
                  {data.location}
                </p>
              </div>

              <div></div>
            </div>

            <div className="w-full flex justify-center rounded-b-xl items-center border-x-[1px] border-black flex-col">
              <p className="w-full text-center my-4 text-sm font-bold">
                SOUTH-GATE
              </p>

              <div className="h-[50px] w-[70%] flex justify-center items-center text-sm font-bold bg-black rounded-xl my-4">
                <p className="text-white">Add to Apple Wallet</p>
              </div>

              <div className="w-full flex px-3 font-semibold justify-between py-4 text-[#1170F2] text-sm ">
                <p>View Barcode</p>
                <p>Ticket Details</p>
              </div>

              <div className="bg-[#0957C4] w-full flex py-3 rounded-b-xl justify-center items-center ">
                <img src="/ticket/ticket.svg" className="w-[20px]" alt="" />
                <p className="text-white font-bold py-3 text-sm">ticketmaster.verified</p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      <footer className="absolute py-8 bottom-0 w-screen h-[60px] bg-[#fff] flex justify-around items-center ">
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/discover.svg" className="w-7 mb-[2px] " alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">Discover</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/heart.svg" className="w-7 mb-[2px] " alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">For You</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/ticket.svg" className="w-7 mb-[2px] " alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">My Events</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/sell.svg" className="w-7 mb-[2px] " alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">Sell</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/profile.svg" className="w-7 mb-[2px] " alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">My Account</p>
        </div>
      </footer>
    </div>
  );
}

export default Tickets;
