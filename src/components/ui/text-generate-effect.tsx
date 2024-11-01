"use client";
import { useEffect, useCallback } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate2] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (scope.current) {
      animate2(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.2),
        }
      );
    }
  }, [animate2, duration, filter, scope]);

  const renderWords = useCallback(() => {
    return (
      <motion.div ref={scope} className="flex flex-wrap gap-1">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 dark:text-white text-black"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  }, [wordsArray, filter, scope]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug tracking-wide dark:text-white text-black">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
