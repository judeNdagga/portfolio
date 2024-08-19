"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Hello, I'm Jude Ndagga
`;

export function Intro() {
  return (
    <div className="h-[30em] sm:h-screen content-center sm:ml-0">
      <TextGenerateEffect words={words} />
    </div>
  );
}
