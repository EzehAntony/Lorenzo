"use client"
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect, useRef } from "react"
import { gsap, Bounce } from "gsap"

export default function Splash() {
  const t1 = gsap.timeline({})
  const ref = useRef(null)
  const g = gsap.utils.selector(ref)
  const router = useRouter();



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#splash", { display: "flex" });
      t1.from("#splash h1", { x: 50, opacity: 0 }, ">+1")
        .from("#splash img", { y: -50, opacity: 0, ease: "bounce" }, ">-.2")
        .from("#splash button", { x: "-90%", opacity: 0, onComplete: () => { router.push("/home") } })
    })

    return () => ctx.revert()
  }, [])
  return (
    <main ref={ref} id="splash" className="bg-[#FEE8C8] h-screen hidden flex-col justify-center items-center ">
      <h1 className="text-5xl font-bold pb-5 text-[black]">Lorenzo</h1>
      <img src="/lorenzo.svg" className="w-24" alt="" />
      <button onClick={() => router.push("/home")} className="bg-black w-[90%] justify-center items-center px-5 py-5 flex absolute bottom-5 text-white max-w-[400px] text-lgfont-semibold"><h3 className=" mr-2 ">Start shopping</h3> <i class="bi bi-cart-fill" className="text-white text-lg"></i></button>
    </main>
  )
}
