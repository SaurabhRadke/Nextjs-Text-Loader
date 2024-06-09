"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Merriweather } from 'next/font/google'
 
const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  useGSAP(
    () => {

        gsap.to('.loader-1', { width:"75%",duration:1.7,delay:0.1 });
        gsap.to('.loader-2', { width:"25%",duration:1.7,delay:1 });
        gsap.to('.counter-3', { top:"-1220%",duration:0.2,delay:0.08,repeat:9});
        gsap.to('.counter-1', { top:"-140%",left:"5%",duration:0.3,delay:2.4 });
        gsap.to('.counter-2', { top:"-1220%",duration:3.1,delay:0.1 });
        gsap.to('.loader-1', { rotate: 90, transformOrigin: "100% 00%", duration: 1, delay: 3.2 });
        gsap.to('.loader-1', { rotate: 110, duration: 1,transformOrigin: "50% 50%", delay: 5 }) // Additional 20 degrees rotation
        gsap.to('.loader-1', { scale: 50, transformOrigin: "50% 50%", duration: 3.4, delay: 5 }); 
        gsap.from('.tex-1', {y:100,duration:0.4, delay: 6.3 });
        gsap.from('.tex-2', { y:100,duration:0.6, delay: 6.6 });
    }
  );
  return (
    <main className={`${merriweather.className}  flex h-screen w-screen text-zinc-100 bg-zinc-900`} >
      <div className="loader fixed top-0 left-0 border-zinc-100 w-full h-full">
      <div className="website-content absolute w-full h-full top-0 left-0 flex justify-center items-center">
        <div className="header relative w-full h-full gap-10 text-zinc-950 tracking-widest flex flex-col justify-center items-center z-40">
          <div className="flex overflow-hidden  gap-10 ">
            <h1 className=" tex-1 text-[2.5rem]  sm:text-[3.5rem] md:text-[5rem] text-center relative  uppercase font-semibold ">Website</h1>
            <h1 className=" tex-2 text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] text-center relative  uppercase font-semibold">Content</h1>
          </div>
          
        </div>
      </div>

      <div className="loading-screen">
        <div className="loader absolute top-[50%] left-[50%] w-[20rem] sm:w-[23rem] flex h-[4rem] -translate-x-[50%] -translate-y-[50%]">
          <div className="loader-1 bar h-full relative bg-white w-[0%] "></div>
          <div className="loader-2 bar h-full relative  w-[2%] bg-white"></div>
        </div>
        <div className="counter fixed left-[2rem] bottom-[2rem] overflow-hidden text-white border-zinc-900 h-[80px] flex text-8xl font-semibold ">

          <div className="counter-1 digit relative bottom-1 left-1">
            <div className="num"> 0</div>
            <div className="num "> 1</div>
          </div>
          <div className="counter-2 digit relative bottom-1 ">
            <div className="num"> 0</div>
            <div className="num"> 1</div>  
            <div className="num"> 2</div>
            <div className="num"> 3</div>
            <div className="num"> 4</div>
            <div className="num"> 5</div>
            <div className="num"> 6</div>
            <div className="num"> 7</div>
            <div className="num"> 8</div>
            <div className="num"> 9</div>
            <div className="num"> 0</div>
          </div>
          <div className="counter-3 digit relative bottom-1">
            <div className="num"> 0</div>
            <div className="num "> 1</div>
            <div className="num"> 2</div>
            <div className="num"> 3</div>
            <div className="num"> 4</div>
            <div className="num"> 5</div>
            <div className="num"> 6</div>
            <div className="num"> 7</div>
            <div className="num"> 8</div>
            <div className="num"> 9</div>
            <div className="num"> 0</div>
          </div>
        </div>
      </div>
      </div>
      
    </main>
  );
}
