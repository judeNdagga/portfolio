"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import { Link } from "react-scroll";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;

    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0 || direction > 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "bg-veryLightBrown bg-opacity-40 backdrop-filter backdrop-blur-sm flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`id=${idx}`}
            to={navItem.id}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`relative items-center flex space-x-1 px-4 
                hover:cursor-pointer text-darkerBrown font-semibold
               hover:scale-125 transition duration-300 
               `}
            onClick={closeMenu}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-base">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
