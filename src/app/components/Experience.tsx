import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "April 2024 - September 2024",
      content: (
        <div>
          <h1 className="text-2xl md:text-6xl text-darkerBrown">OMANET</h1>
          <h2 className="text-xl md:text-2xl text-white">
            Full Stack Developer
          </h2>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <ul className="list-disc text-base md:text-xl">
              <li className="pt-10">
                Developed and deployed the educational/e-commerce website for
                OMANET Uganda with Next.js, Prisma and Tailwind.
              </li>
              <li className="pt-10">
                Integrated online payments into the website using Interswitch.
              </li>
              <li className="pt-10">
                Utilized MongoDB for high performance and scalability as well as
                Auth.js for authentication
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "January 2024 - July 2024",
      content: (
        <div>
          <h1 className="text-2xl md:text-6xl text-darkerBrown">
            PELUM UGANDA
          </h1>
          <h2 className="text-xl md:text-2xl text-white">
            Front-end Developer
          </h2>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <ul className="list-disc text-base md:text-xl">
              <li className="pt-10">
                Developed an in-house Monitoring and Evaluation System as well
                as Administrator dashboard for PELUM Uganda.
              </li>
              <li className="pt-10">
                Utilized Next.js, Typescript and Tailwind to build the
                front-end.
              </li>
              <li className="pt-10">
                Integrated the front-end with a Django back-end through Axios.
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "June 2022 - July 2023",
      content: (
        <div>
          <h1 className="text-2xl md:text-6xl text-darkerBrown">
            CLUTCH TECHNOLOGIES
          </h1>
          <h2 className="text-xl md:text-2xl text-white">
            Full Stack Developer
          </h2>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <ul className="list-disc text-base md:text-xl">
              <li className="pt-10">
                Built and deployed applications for various clientele in various
                areas like education, entertainment, transport and healthcare.
              </li>
              <li className="pt-10">
                Utilized technologies like React, React Native, Zustand, MongoDB
                and Next.js
              </li>
              <li className="pt-10">
                Focused on performance, testing and scalability since apps built
                were intended for use by a large number of clients.
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "June 2021 - October 2021",
      content: (
        <div>
          <h1 className="text-2xl md:text-6xl text-darkerBrown">
            ZIRAMBA STORES
          </h1>
          <h2 className="text-xl md:text-2xl text-white">
            Full Stack Developer
          </h2>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <ul className="list-disc text-base md:text-xl">
              <li className="pt-10">
                Worked as a junior developer and played a significant role
                developing the company’s online construction e-commerce
                platform.
              </li>
              <li className="pt-10">
                Utilized React, Redux, CSS for the front-end and Django, RESTful
                API for the back-end.
              </li>
              <li className="pt-10">
                Integrated online payments into the website.
              </li>
            </ul>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
}
