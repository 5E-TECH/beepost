"use client"

import { memo } from "react";
import HeroAnimation from "./HeroAnimation";
import HeroButtons from "./HeroButtons";
import { useI18n } from "@/lib/i18n";

const Hero = () => {
  const { dict } = useI18n();
  return (
    <section className="relative h-screen overflow-hidden flex items-center bg-gradient-to-b from-purple-50/30 to-white">
      {/* Left side - Illustration - Positioned Lower */}
      <div className="absolute left-0 top-[60%] -translate-y-1/2 w-1/4 xl:w-1/3 hidden lg:block pointer-events-none">
        <div className="relative">
          {/* Decorative boxes/packages */}
          <div className="absolute top-10 left-8 xl:left-20 w-16 xl:w-24 h-16 xl:h-24 bg-purple-100 rounded-2xl transform rotate-12 opacity-60" />
          <div className="absolute top-28 left-12 xl:left-32 w-12 xl:w-16 h-12 xl:h-16 bg-yellow-100 rounded-xl transform -rotate-6 opacity-70" />
          <div className="absolute bottom-20 left-10 xl:left-24 w-16 xl:w-20 h-16 xl:h-20 bg-pink-100 rounded-2xl transform rotate-45 opacity-50" />
          
          {/* Main delivery illustration */}
          <div className="relative z-10 pl-4 xl:pl-16">
            <svg viewBox="0 0 200 200" className="w-48 xl:w-72 h-48 xl:h-72">
              {/* Delivery box */}
              <rect x="50" y="80" width="100" height="80" fill="#8B5CF6" rx="8" opacity="0.9"/>
              <rect x="50" y="80" width="100" height="30" fill="#7C3AED" rx="8"/>
              <line x1="100" y1="80" x2="100" y2="110" stroke="#fff" strokeWidth="3"/>
              <line x1="50" y1="95" x2="150" y2="95" stroke="#fff" strokeWidth="3"/>
              
              {/* Location pin */}
              <circle cx="160" cy="50" r="15" fill="#EC4899" opacity="0.9"/>
              <circle cx="160" cy="50" r="8" fill="#fff"/>
              <line x1="160" y1="65" x2="160" y2="80" stroke="#EC4899" strokeWidth="2" strokeDasharray="2,2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Right side - Illustration - Positioned Lower */}
      <div className="absolute right-0 top-[60%] -translate-y-1/2 w-1/4 xl:w-1/3 hidden lg:block pointer-events-none">
        <div className="relative pr-4 xl:pr-16">
          {/* Decorative elements */}
          <div className="absolute top-8 right-10 xl:right-24 w-20 xl:w-28 h-20 xl:h-28 bg-purple-100 rounded-full opacity-40" />
          <div className="absolute bottom-16 right-12 xl:right-32 w-16 xl:w-20 h-16 xl:h-20 bg-yellow-100 rounded-full opacity-50" />
          
          {/* Route path illustration */}
          <svg viewBox="0 0 200 200" className="w-48 xl:w-72 h-48 xl:h-72">
            {/* Dotted path */}
            <path d="M 30 100 Q 100 50 170 100" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeDasharray="5,5" opacity="0.6"/>
            
            {/* Start point */}
            <circle cx="30" cy="100" r="12" fill="#8B5CF6"/>
            <text x="30" y="105" fontSize="16" fill="#fff" textAnchor="middle">A</text>
            
            {/* End point */}
            <circle cx="170" cy="100" r="12" fill="#EC4899"/>
            <text x="170" y="105" fontSize="16" fill="#fff" textAnchor="middle">B</text>
            
            {/* Moving vehicle */}
            <g className="animate-delivery">
              <rect x="95" y="35" width="30" height="20" fill="#FBBF24" rx="4"/>
              <circle cx="102" cy="58" r="5" fill="#374151"/>
              <circle cx="118" cy="58" r="5" fill="#374151"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 py-32 text-center">
        <HeroAnimation>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1E0E2F] md:text-6xl lg:text-6xl xl:text-7xl leading-tight">
            {dict.hero.title1} <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {dict.hero.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-6 lg:mt-8 max-w-2xl text-lg sm:text-xl text-[#5E5168] leading-relaxed">
            {dict.hero.description}
          </p>

          {/* Stats */}
          <div className="mt-8 lg:mt-12 flex justify-center gap-6 lg:gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-purple-600">
                {dict.hero.stats[0].value}
              </div>
              <div className="text-xs lg:text-sm text-gray-600 mt-1">
                {dict.hero.stats[0].label}
              </div>
            </div>
            <div className="w-px h-10 lg:h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-pink-600">
                {dict.hero.stats[1].value}
              </div>
              <div className="text-xs lg:text-sm text-gray-600 mt-1">
                {dict.hero.stats[1].label}
              </div>
            </div>
            <div className="w-px h-10 lg:h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-yellow-600">
                {dict.hero.stats[2].value}
              </div>
              <div className="text-xs lg:text-sm text-gray-600 mt-1">
                {dict.hero.stats[2].label}
              </div>
            </div>
          </div>

          <HeroButtons />
        </HeroAnimation>
      </div>

      {/* Subtle blur effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/3 h-64 lg:h-96 w-64 lg:w-96 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-64 lg:h-96 w-64 lg:w-96 rounded-full bg-pink-200/20 blur-3xl" />
      </div>

      <style jsx>{`
        @keyframes delivery {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(70px);
          }
        }
        .animate-delivery {
          animation: delivery 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default memo(Hero);
