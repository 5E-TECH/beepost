"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const HeroButtons = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-10 flex justify-center gap-4 flex-wrap"
    >
      <button
        onClick={createRipple}
        className="group relative rounded-xl bg-[#2B123F] px-8 py-4 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <span>Hoziroq boshlash</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>

        {/* Hover gradient background */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" /> */}

        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute block rounded-full bg-white/30 pointer-events-none ripple-animation"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </button>

      <button className="group rounded-xl border-2 border-[#2B123F] px-8 py-4 text-[#2B123F] font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <span className="flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          <span>Narxlarni ko'rish</span>
        </span>
      </button>

      <style jsx>{`
        @keyframes ripple {
          from {
            width: 0;
            height: 0;
            opacity: 0.6;
          }
          to {
            width: 600px;
            height: 600px;
            opacity: 0;
          }
        }

        .ripple-animation {
          animation: ripple 0.8s ease-out;
        }
      `}</style>
    </motion.div>
  );
};

export default HeroButtons;
