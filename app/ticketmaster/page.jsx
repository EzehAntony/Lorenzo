function Ticket() {
  return (
    <div>
      <header className="h-[90px] bg-[#1F2229] w-screen text-white flex justify-around  items-center capitalize ">
        <h3> </h3>
        <> </>
        <h3>my events</h3>
        <h3>help </h3>
      </header>

      <div className="content w-screen relative bg-[#fff] flex justify-center">
        <div className="w-[97%] bg-gray-500 h-[200px] before:content-[''] before:w-[97%] before:h-[100px] bg-gradient-to-b from-white to-black before:absolute before:bottom-0 before:left-[1.5%] before:bg-opacity-30 before:bg- flex justify-center items-center ">
          <img src="/taylor.png" className="  w-[70%] max-w-[250px] " alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
