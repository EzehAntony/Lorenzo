"use client"

import { MenuOpenRounded, MenuRounded, ShoppingCart, Send } from "@mui/icons-material"
import { Button, IconButton, } from "@mui/material"

const Hero = () => {


    return (
        <div className="min-h-[400px] md:h-[80vh] lg:h-[100vh] px-4  pt-[80px] lg:px-20 bg-[#FEE8C8] flex relative justify-center items-center">
            <header className="fixed bg-[#FEE8C8]  z-50 top-0 w-screen left-0 h-[60px] px-4 lg:px-20 flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-bold ">Lorenzo</h2>
                </div>

                <div>
                    <IconButton className="relative mr-2" >
                        <p className="absolute -top-[4px] -right-[0px] text-sm font-extrabold bg-[#fff] py-[1px] px-1 rounded-md">20</p>
                        <ShoppingCart />
                    </IconButton>
                    <IconButton>
                        <MenuRounded />
                    </IconButton>
                </div>
            </header>

            <main className="flex flex-col justify-around lg:flex-row lg:justify-between ">
                <div className="order-2  w-[100%] flex flex-col justify-center items-center lg:order-1">
                    <h3 className="  text-3xl font-bold text-center max-w-[85%] my-4 lg:text-6xl lg:text-left lg:max-w-none lg:mb-8">Get a fragrance that suits your personality</h3>
                    <Button endIcon={<Send className="fill-[#FEE8C8]" />} className="w-[100%] mb-4 bg-[#444444] py-2" color="primary" variant="contained">
                        <p className="text-white text-sm font-semibold py-1  lg:py-2 " >Get Now</p>



                    </Button>
                </div>

                <div id="images" className="order-1 w-[100%]  relative flex justify-center items-end lg:justify-between">
                    <div className="w-[100%]  md:w-[80%] lg:w-[100%] flex justify-center items-end ">
                        <div className="w-[60px] md:w-[100px] lg:w-[150px] flex flex-col items-center relative">
                            <img className="w-[100%]" src="/perfume4.svg" alt="" />
                        </div>
                        <div className="w-[60px]  md:w-[100px] lg:w-[120px] flex flex-col items-center relative">
                            <img className="w-[45px] md:w-[70px] lg:w-[80px]  absolute" src="/perfume1top.svg" alt="" />
                            <img className="w-[100%]" src="/perfume1down.svg" alt="" />
                        </div>
                        <div className="w-[60px] md:w-[100px] lg:w-[120px] flex flex-col items-center relative">
                            <img className="w-[100%]" src="/other2.svg" alt="" />
                        </div>
                        <div className="w-[60px] md:w-[100px] lg:w-[120px] flex flex-col items-center relative">
                            <img className="w-[45px] md:w-[70px] lg:w-[80px] absolute -top-[20px] md:-top-[30px] " src="/perfume2top.svg" alt="" />
                            <img className="w-[100%]" src="/perfume2down.svg" alt="" />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Hero