"use client";
import React from "react";
import { FloatingNav } from "../components/ui/FloatingNav";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { FcAbout } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
export function Navbar() {
  const navItems = [
    
    {
      name: "About",
      
      id: "about",
      icon: <FcAbout className="h-4 w-4" />,
    },
   
    {
      name: "Services",
    
      id: "services",
      icon: (
        <FaCartPlus className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Experience",
      
      id:"experience",
      icon: (
        <RiCustomerService2Fill className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Contact",
      
      id:"contact",
      icon: (
        <RiCustomerService2Fill className="h-4 w-4 text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

