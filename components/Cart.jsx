"use client";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const Cart = ({ setting }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(setting);
    console.log(open);
  }, [setting]);

  return (
    <div
      className={
        open
          ? "absolute top-4 rounded-lg right-4 p-2 w-[calc(100%-2rem)] z-40 bg-white h-60 md:max-w-[600px]"
          : "invisible"
      }
    >
      <IconButton
        onClick={() => {
          setOpen(false);
        }}
        className="absolute right-2"
      >
        <Close />
      </IconButton>
    </div>
  );
};

export default Cart;
