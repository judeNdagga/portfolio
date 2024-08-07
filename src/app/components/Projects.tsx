"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export function Projects(){
    const ShrinkAnimation = {
        initial: {
          scale: 0.6
        },
        animate: {
          scale: 1,
          transition: {
            delay: 0.4,
            type: "easeInOut",
          },
        },
      };
    useEffect(() => {
        (async () => {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          const locomotiveScroll = new LocomotiveScroll();
        })();
      }, []);
    return(
      <div>
        <h1 className="text-center text-5xl uppercase pt-14">Some Projects I've Worked On</h1>
        <div className="sm:flex p-10 sm:gap-10">
          

            {/* 1st row */}
            <div className="sm:w-[48%]">
            <motion.a
            className="card h-[22em] mb-20 shadow-xl hover:text-green-300"
            
            variants={ShrinkAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="relative sm:bottom-[3%] text-2xl sm:ml-10">
              CONSULTANCY
            </h1>
          </motion.a>

          <a
            className="card w-full h-[22em] mb-20 shadow-xl hover:text-green-300"
            
            
          >
            <Image
              src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="relative sm:bottom-[3%] text-2xl sm:ml-10">
              CONSULTANCY
            </h1>
          </a>

          <a
            className="card w-full h-[22em] mb-20 shadow-xl hover:text-green-300"
            
            
          >
            <Image
              src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="relative sm:bottom-[3%] text-2xl sm:ml-10">
              CONSULTANCY
            </h1>
          </a>
         
            </div>




            {/* 2nd row */}
            <div className="sm:w-[48%]" data-scroll data-scroll-speed="0">
            <a
            className="card w-full h-[22em] mb-20 shadow-xl hover:text-green-300"
            
            
          >
            <Image
              src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="relative sm:bottom-[3%] text-2xl sm:ml-10">
              CONSULTANCY
            </h1>
          </a>


          <a
            className="card w-full h-[22em] mb-20 shadow-xl hover:text-green-300"
            
            
          >
            <Image
              src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="relative sm:bottom-[3%] text-2xl sm:ml-10">
              CONSULTANCY
            </h1>
          </a>


          <a
            className="card w-full h-[22em] mb-20 shadow-xl hover:text-green-300"
            
            
          >
            <Image
              src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="relative sm:bottom-[3%] text-2xl sm:ml-10">
              CONSULTANCY
            </h1>
          </a>
          
            </div>
        </div>
        </div>
    )
}