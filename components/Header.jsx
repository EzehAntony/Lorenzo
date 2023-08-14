"use client";

import { Button, IconButton } from "@mui/material";
import { MenuRounded, ShoppingCart } from "@mui/icons-material";

function Header() {
  return (
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
          <p className="absolute -top-[4px] -right-[0px] text-sm font-semibold text-white bg-[#029094] px-[0.25rem] rounded-md">
            20
          </p>
          <ShoppingCart />
        </IconButton>
        <IconButton>
          <MenuRounded />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
