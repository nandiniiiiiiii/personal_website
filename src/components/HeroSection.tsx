"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import profileImage from "../../public/profile.jpeg";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function BackgroundBoxesDemo() {
  const words = `Full-stack wizard in MERN & Next.js, deploying dreams and dabbling in AI magic!`
  return (
    <div className="h-[592px] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <div className="w-40 h-40 md:w-56 md:h-56 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Image
              src={profileImage} // Ensure this path is correct
              alt="Nandini Negi"
              width={208} // 52 * 4 (Next.js Image uses width and height in pixels)
              height={208}
              className="w-36 h-36 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-lg transition transform hover:scale-105"
              priority
            />
          </div>
        </div>

        <div className="mt-5 flex justify-center items-center flex-col ">
          <h1 className={cn("md:text-6xl text-2xl text-white relative z-20")}>
            NANDINI NEGI
          </h1>
          <TextGenerateEffect words={words} />
            
        </div>
      </div>
  );
}
