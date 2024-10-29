"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingSkills = ({
  skills,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  skills: {
    icon: React.ReactNode; // This can be any icon component or image
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  // Duplicate skills for infinite scroll effect
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  // Set direction of animation (left or right)
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  // Set speed of animation based on speed prop
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Array of Tailwind CSS color classes for the background
  const tailwindColors = [
    "bg-sky-300",
    "bg-pink-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-red-300",
    "bg-purple-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-violet-300",
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
        )}
      >
        {skills.map((skill, idx) => {
          const colorClass = tailwindColors[idx % tailwindColors.length]; // Rotate through Tailwind colors

          return (
            <li
              key={idx}
              className={cn(
                "w-[100px] h-[100px] max-w-full relative flex-shrink-0 flex items-center justify-center rounded-full",
                colorClass // Apply Tailwind color class
              )}
            >
              <div className="text-4xl text-white">{skill.icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
