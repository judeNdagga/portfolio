"use client";
import React from "react";
import { FloatingNav } from "../components/ui/FloatingNav";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from "next/link";
export function Navbar() {
  const navItems = [
    
    {
      name: "About",
      
      id: "about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
   
    {
      name: "Services",
    
      id: "services",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      
      id:"contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

