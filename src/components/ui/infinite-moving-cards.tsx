"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { WavyBackground } from "./wavy-background";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    about: string;
    link: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    function plusAnimations() {
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

    function getDirection() {
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
    }

    function getSpeed() {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    }

    plusAnimations();
  }, [direction, speed]);

  const words = [
    {
      text: "P",
      className: "text-5xl",
    },
    {
      text: "R",
      className: "text-5xl",
    },
    {
      text: "O",
      className: "text-5xl",
    },
    {
      text: "J",
      className: "text-5xl",
    },
    {
      text: "E",
      className: "text-5xl",
    },
    {
      text: "C",
      className: "text-5xl",
    },
    {
      text: "T",
      className: "text-5xl",
    },
    {
      text: "S",
      className: "text-5xl",
    },
  ];

  return (
    <>
      <WavyBackground>
        <div>
          <TypewriterEffectSmooth words={words} />
        </div>

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
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {items.map((item) => (
              <li
                className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                }}
                key={item.title}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className="relative z-20 text-2xl leading-[1.6] text-gray-100 font-normal">
                    {item.title}
                  </span>
                  <div className="relative z-20 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                        {item.about}
                      </span>
                      <a
                        href={item.link}
                        className="pt-10 leading-[1.6] text-gray-400 font-normal"
                      >
                        <h1>
                          <u>Click Me</u>
                        </h1>
                      </a>
                    </span>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </WavyBackground>
    </>
  );
};
