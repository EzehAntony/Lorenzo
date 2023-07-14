"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const metadata = {
  themeColor: "#1F2229",
  title: "ticket Master by Nazville",
};

function Ticket() {
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

      <div
        onClick={() => router.push("/ticketmaster/tickets")}
        className="content w-screen relative bg-[#fff] flex justify-center"
      >
        <div className="w-[97%] bg-gray-500 h-[270px] before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-[#1F1F1F] before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30 before:bg- flex justify-center items-center ">
          <img
            src="/ticket/taylor.png"
            className="  w-[80%] max-w-[300px] "
            alt=""
          />
        </div>

        <div className="text w-[97%] px-2 absolute bottom-0 py-2">
          <h1 className="text-xl  text-white drop-shadow-[2px_2px_5px_black] font-bold">
            Taylor Swift | The Eras Tour
          </h1>
          <p className="text-sm text-white capitalize font-semibold drop-shadow-[2px_2px_5px_black] ">
            {data.day}, {data.month} {data.day}, {data.time} . {data.location}
          </p>
          <div className="flex text-white  items-center">
            <i className="bi bi-ticket-fill mr-2 text-[10px] -rotate-45"></i>
            <p className="text-sm text-white drop-shadow-[2px_2px_5px_black] capitalize font-semibold">
              {data.ticket} tickets
            </p>
          </div>
        </div>
      </div>

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

export default Ticket;
