"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useLayoutEffect, useRef } from "react"



function Home() {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    const g = gsap.utils.selector(ref)
    const t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#images",
            start: "top 50px",
            end: "top -50px",
            scrub: 1,

        }
    })

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            t1.to(("#p1"), { opacity: .5, x: -40 })
                .to(("#p21"), { opacity: .5, y: -30 })
                .to(("#p22"), { opacity: .5, y: 10 })
                .to(("#p31"), { opacity: .5, y: -30, rotate: 20 })
                .to(("#p32"), { opacity: .5, x: 30, })
                .to(("#p4"), { opacity: .5, y: -30, ease: "bounce" })


        });
        return () => ctx.revert();
    }, []);



    return (
        <main id="home" ref={ref} className="home overflow-x-hidden home min-h-[2000px]">
            <div className="hero flex w-screen overflow-hidden py-4 lg:h-screen -md:justify-center -md:flex-col  overflow-x-hidden relative md:h-[50vh] min-h-[500px]  justify-center items-center bg-[#fee8c8]">

                <header className="lg:px-24 px-8 bg-primary bg-[transparent] h-[60px] flex top-0 left-0  justify-between items-center z-[3] fixed w-screen">
                    <div className="flex justify-center items-center">
                        <img src="/lorenzo.svg" className="w-[40px] h-[60px] lg:w-[50px]" alt="" />
                        <h3 className="pl-2 text-[20px] hidden lg:block md:block text-black font-bold">Lorenzo</h3>
                    </div>
                    <div>
                        <i className="hover:text-[#F7941D] text-black bi bi-cart-fill cursor-pointer text-2xl mr-8"></i>
                        <i className="text-2xl hover:text-[#F7941D] cursor-pointer text-black bi bi-heart-fill"></i>
                    </div>
                </header>


                <div className="w-screen h-[100%]  -md:max-w-[200px] flex flex-col justify-center items-center lg:px-20  mt-[60px] lg:flex-row" >
                    <div className=" -md:text-center flex -md:justify-center -md:items-center flex-col sm:mt-8 lg:w-[60%] -md:order-2 w-screen">
                        <h3 className="text-black -sm:mx-4 font-bold text-6xl max-w-[700px] -md:max-w-[500px] -sm:mt-4  -md:text-3xl capitalize  ">Get a fragrance that suits your personality</h3>
                        <button className=" text-white hover:bg-[#F7941D] transition delay-75 bg-[#000] mt-8 py-3 px-8 w-[300px] -md:w-[90%] outline-none capitalize" >Check now</button>
                    </div>
                    <div id="images" className="images order-1 flex lg:w-[40%] -md:mt-8 -md:w-[130%] justify-end items-end ">
                        <div className="w-[25%] flex flex-col items-center">
                            <img id="p1" src="perfume4.svg" className="w-[100%]" alt="" />
                        </div>
                        <div className="w-[25%] flex flex-col items-center relative">
                            <img id="p21" src="perfume1top.svg" className="z-10 w-[70%] absolute -top-2 " alt="" />
                            <img id="p22" src="perfume1down.svg" className="w-[100%]" alt="" />
                        </div>
                        <div className="w-[25%] flex flex-col items-center relative">
                            <img id="p31" src="other.svg" className="z-10 w-[80%] absolute -top-6 lg:-top-12" alt="" />
                            <img id="p32" src="perfume2down.svg" className="w-[100%]" alt="" />
                        </div>
                        <div className="w-[25%] flex flex-col items-center">
                            <img id="p4" src="other2.svg" className="w-[100%]" alt="" />
                        </div>

                    </div>
                </div>
            </div >
        </main>
    )
}

export default Home;