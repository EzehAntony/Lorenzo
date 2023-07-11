function Ticket() {
  return (
    <div>
      <header className="h-[70px] bg-[#1F2229] w-screen text-white flex justify-around  items-center capitalize ">
        <h3> </h3>
        <> </>
        <h3>my events</h3>
        <h3>help </h3>
      </header>

      <div className="content w-screen relative bg-[#fff] flex justify-center">
        <div className="w-[97%] bg-gray-500 h-[270px] before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-[#1F1F1F] before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30 before:bg- flex justify-center items-center ">
          <img
            src="/ticket/taylor.png"
            className="  w-[70%] max-w-[270px] "
            alt=""
          />
        </div>
      </div>

      <footer className="absolute bottom-0 w-screen h-[60px] bg-[#fff] flex justify-around items-center ">
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/discover.svg" className="w-7 mb-1" alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">Discover</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/heart.svg" className="w-7 mb-1" alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">For You</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/ticket.svg" className="w-7 mb-1" alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">My Events</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/sell.svg" className="w-7 mb-1" alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">Sell</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/ticket/profile.svg" className="w-7 mb-1" alt="" />
          <p className="text-[10px]  text-[#AAA9AF] ">My Account</p>
        </div>
      </footer>
    </div>
  );
}

export default Ticket;
