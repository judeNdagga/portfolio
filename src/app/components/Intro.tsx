"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const words = `HELLO, I'M JUDE NDAGGA
`;
const wordsForTypeWriter = [
  {
    text: "Nice",
    className: "font-light",
  },
  {
    text: "to",
    className: "font-light",
  },
  {
    text: "meet",
    className: "font-light",
  },

  {
    text: "YOU.",
    className: "text-darkerBrown font-bold",
  },
];
export function Intro() {
  return (
    <div className="h-screen content-center">
      {/* <audio autoPlay loop>
        <source src="/lofi.mp3" type="audio/mpeg" />
      </audio> */}
      <TextGenerateEffect words={words} />
      <TypewriterEffectSmooth words={wordsForTypeWriter} />
    </div>
  );
}
