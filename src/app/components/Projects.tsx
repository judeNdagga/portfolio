"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import ziramba from "/public/ziramba.png";
import mama from "/public/mama.png";
import pelum from "/public/pelum.png";
import mitsu from "/public/mitsubishi.png";
import busstop from "/public/busstop.png";
import omanet from "/public/omanet.png";
import { AnimatedText2 } from "./ui/AnimatedText2";
import ZirambaCenterImage from "./parallax/ZirambaCenterImage";
import ZirambaParallaxImages from "./parallax/ZirambaParallaxImages";
import OmanetCenterImage from "./parallax/OmanetCenterImage";
import OmanetParallaxImages from "./parallax/OmanetParallaxImages";
import PelumCenterImage from "./parallax/PelumCenterImage";
import PelumParallaxImages from "./parallax/PelumParallaxImages";

export function Projects() {
  const ShrinkAnimation = {
    initial: {
      scale: 0.6,
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
  return (
    <div className="text-white">
      <AnimatedText2 text="projects" />
      <Project1 />
      <Project4 />
      <Project2 />
      <h1 className="text-center text-4xl sm:text-7xl">MORE PROJECTS</h1>
      <div className="xl:flex">
        <Project3 />
        <Project5 />
      </div>
    </div>
  );
}
const section_height = 1500;
const Project1 = () => {
  return (
    <div
      className="relative w-full sm:p-10"
      style={{ height: `calc(${section_height}px + 100vh)` }}
    >
      <ZirambaCenterImage />
      <ZirambaParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const Project2 = () => {
  return (
    <div
      className="relative w-full sm:p-10"
      style={{ height: `calc(${section_height}px + 100vh)` }}
    >
      <PelumCenterImage />
      <PelumParallaxImages />
    </div>
  );
};

const Project3 = () => {
  return (
    <div className="relative w-full p-10">
      <a
        className="card w-full h-[22em] mb-20 shadow-xl"
        href="https://play.google.com/store/apps/details?id=com.scaron.mama&hl=en_US&gl=US"
      >
        <Image
          src={mama}
          className=" brightness-75 hover:brightness-50 transition duration-500"
          width={1920}
          height={1080}
          alt="image"
        />
        <h1 className="relative sm:bottom-[3%] text-2xl sm:ml-10">
          MAMA LEARNING PLATFORM
        </h1>
      </a>
    </div>
  );
};

const Project4 = () => {
  return (
    <div
      className="relative w-full sm:p-10"
      style={{ height: `calc(${section_height}px + 100vh)` }}
    >
      <OmanetCenterImage />
      <OmanetParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const Project5 = () => {
  return (
    <div className="relative w-full p-10">
      <a
        className="card w-full h-[22em] mb-20 shadow-xl"
        href="https://mitsubishi-ug.vercel.app/"
      >
        <Image
          src={mitsu}
          className=" brightness-75 hover:brightness-50 transition duration-500"
          width={1920}
          height={1080}
          alt="image"
        />
        <h1 className="relative sm:bottom-[3%] text-2xl sm:ml-10">
          MITSUBISHI DEMO
        </h1>
      </a>
    </div>
  );
};
