"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "./SpotlightCard"; 

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      setStart(true);
    }
  }

  const getSpeed = () => {
    if (speed === "fast") return "20s";
    if (speed === "normal") return "40s";
    return "80s";
  };

  const getDirection = () => {
    return direction === "left" ? "normal" : "reverse";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
        style={{
          animation: `scroll ${getSpeed()} linear infinite`,
          animationDirection: getDirection(),
          animationPlayState: pauseOnHover ? "running" : undefined,
        }}
        onMouseEnter={() => {
          if (pauseOnHover) scrollerRef.current?.style.setProperty("animation-play-state", "paused");
        }}
        onMouseLeave={() => {
          if (pauseOnHover) scrollerRef.current?.style.setProperty("animation-play-state", "running");
        }}
      >
        {items.map((item, idx) => (
          <SpotlightCard
            key={`${item.name}-${idx}`}
            className="w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 px-8 py-6 md:w-[450px] group overflow-hidden"
            spotlightColor="#ffffff30" // Spotlight color (can be customized)
          >
            {/* Meteor Effect */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100">
              {Array.from({ length: 10 }).map((_, meteorIdx) => {
                const randomColor = Math.random() > 0.5 ? "#ffffff" : "#00A7E1"; // Randomize meteor color
                return (
                  <span
                    key={`meteor-${idx}-${meteorIdx}`}
                    className="absolute h-0.5 w-0.5 rounded-full rotate-[215deg] animate-meteor"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      backgroundColor: randomColor, // Assign random color
                    }}
                  ></span>
                );
              })}
            </div>

            {/* Card Content */}
            <blockquote className="relative z-20">
              <span className="text-[1.14rem] leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-[1.14rem] leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-[1.14rem] leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </SpotlightCard>
        ))}
      </ul>

   {/* Add custom keyframes for scrolling and meteor effect */}
   <style jsx>{`
        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes meteor {
          0% {
            transform: translate(0, 0) rotate(215deg);
            opacity: 0; /* Start invisible */
            background-color: var(theme-color-1); /* Random starting color */
          }
          10% {
            opacity: 1; /* Gradually appear */
            background-color: var(theme-color-1); /* Maintain starting color */
          }
          30% {
            background-color: var(--foreground); /* Gradually change to the end color */
            opacity: 0.8; /* Flicker effect */
          }
          50% {
            opacity: 0.6; /* Flicker effect */
            background-color: var(theme-color-1); /* Switch back to starting color */
          }
          75% {
            background-color: var(--foreground); /* Switch back to end color */
            opacity: 0.4; /* Dimmer flicker */
          }
          100% {
            transform: translate(calc(100% + 200px), calc(100% + 200px)) rotate(215deg); /* Move out of bounds */
            opacity: 0; /* Fade out */
            background-color: var(theme-color-1);
          }
        }

        .animate-meteor {
          animation: meteor var(--meteor-duration, 5s) linear infinite;
        }

        .animate-meteor::before {
          content: '';
          position: absolute;
          top: calc(50%);
          transform: translateY(-50%);
          width: calc(var(--meteor-trail-length, 50px)); /* Length of the trail */
          height: calc(var(--meteor-width, 1px)); /* Thickness of the trail */
          background-image: linear-gradient(90deg, currentColor, transparent); /* Gradient trail */
        }
      `}</style>
    </div>
  );
};
