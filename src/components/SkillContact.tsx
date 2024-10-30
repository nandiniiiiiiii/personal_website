"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';

const content = [
  {
    title: "About Me",
    description:
      "Hey! I’m a tech enthusiast fueled by curiosity and a passion for all things digital. From cracking code challenges to exploring the latest gadgets, I’m all about discovering what’s next in tech. With a mix of creativity and logic, I love building sleek designs and solving puzzles. If it’s innovative or even a bit quirky, I’m in!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        About Me
      </div>
    ),
  },
  {
    title: "Tech Stuff",
    description:
      "I’m all about exploring tech—from building projects in MERN and Next.js to diving into AI/ML and mastering Docker and Kubernetes. Now, I’m exploring Web3 to see what the future holds. Every new tool feels like a power-up, and I’m here for it!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Tech Stuff
      </div>
    ),
  },
  {
    title: "Education & History",
    description:
      "I'm from Uttar Pradesh, with roots in the stunning hills of Uttarakhand. After completing my high school and 12th grade in Bareilly, I pursued a BCA with a specialization in AI/ML at UPES, Dehradun. This blend of rich culture and cutting-edge technology has fueled my passion for learning and innovation!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Education & History
      </div>
    ),
  },
  {
    title: "Creative side",
    description:
      "I’m a creative soul who believes in trying everything that piques my interest! From strumming my guitar to dancing like nobody's watching, I embrace it all. I’ve dabbled in sports like badminton and swimming, and my hobbies range from drawing, skitting and reading to origami, crafting, and photography. If it sparks joy, you can bet I’ve given it a shot!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Creative side
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black overflow-hidden text-white">
      {/* Background effects */}
      <StarsBackground />
      <ShootingStars />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center max-w-3xl p-10 space-y-6 text-center">
        <h1 className="relative text-6xl font-bold mb-6 pt-20">
          About Me
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-br from-pink-500 to-indigo-500" />
        </h1>
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
