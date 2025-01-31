"use client";
import React from "react";
import { FloatingNav } from "../components/ui/FloatingNav";
import { AiFillInfoCircle } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
export function Navbar() {
  const navItems = [
    {
      name: "About",

      id: "about",
      icon: <AiFillInfoCircle className="h-6 w-6" />,
    },

    {
      name: "Services",

      id: "services",
      icon: <GrUserWorker className="h-6 w-6 text-white" />,
    },
    {
      name: "Experience",

      id: "experience",
      icon: <FaHistory className="h-6 w-6 text-white" />,
    },
    {
      name: "Contact",

      id: "contact",
      icon: <RiCustomerService2Fill className="h-6 w-6 text-white" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
