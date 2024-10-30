"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import scrollImage from "../../public/scrollimg-2.png";
import { LinkPreview } from "./ui/link-preview";
import { Highlight } from "./ui/hero-highlight";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col bg-black overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <Highlight className="text-black dark:text-white">
            Branch Out with Me on {" "}
                <LinkPreview
                  url = "https://github.com/nandiniiiiiiii"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                  ><u>GitHub</u></LinkPreview>...<br/>
                </Highlight>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Let&#39;s Collaborate
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={scrollImage}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
