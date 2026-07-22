"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function LogoMarquee({ items, className }) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      aria-label="Partner institutions"
      role="region"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[var(--color-secondary)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[var(--color-secondary)] to-transparent" />

      <div
        className="flex gap-10 items-center animate-marquee hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
        aria-hidden="false"
      >
        {doubled.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center h-12 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.name}
                width={80}
                height={40}
                className="max-h-10 max-w-20 object-contain"
              />
            ) : (
              <span className="text-sm font-medium text-[var(--color-muted)] whitespace-nowrap">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Text-only marquee for company names
export function TextMarquee({ items, className, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      aria-label="Trusted by companies"
      role="region"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />

      <div
        className={cn(
          "flex gap-8 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "hover:[animation-play-state:paused]"
        )}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-white/60"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-60" />
            <span className="text-sm font-medium text-[var(--color-text)] opacity-70 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
