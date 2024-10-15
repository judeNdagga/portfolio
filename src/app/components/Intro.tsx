"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Hello, I'm Jude Ndagga
`;

export function Intro() {
  return (
    <div className="h-screen content-center">
      <TextGenerateEffect words={words} />
    </div>
  );
}
