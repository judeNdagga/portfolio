"use client";
import { useEffect } from "react";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="bg-brown">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
}
