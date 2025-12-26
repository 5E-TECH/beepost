"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { dict } = useI18n();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[#FBF8F3] scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full container"
      >
        <div className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Decorative elements inside card */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
          </div>
          
          {/* Content wrapper */}
          <div className="relative z-10">
          {/* Title section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {dict.about.titleLine1}
              <br />
              {dict.about.titleLine2}
            </h2>
            
            {/* Trust badges */}
            <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-white/90 text-sm md:text-base ml-2">
                {dict.about.trust}
              </p>
            </div>
          </motion.div>

          {/* Collapsed state - CTA button */}
          <AnimatePresence mode="wait">
            {!isExpanded && (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <button
                  onClick={() => setIsExpanded(true)}
                  className="group relative inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  {dict.about.expand}
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </button>
              </motion.div>
            )}

            {/* Expanded state - Full content */}
            {isExpanded && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6 overflow-hidden"
              >
                {/* Content sections with staggered animation */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    {dict.about.missionTitle}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {dict.about.mission}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-3xl">💎</span>
                    {dict.about.whyTitle}
                  </h3>
                  <ul className="space-y-3 text-white/80 text-lg">
                    {dict.about.reasons.map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-yellow-400 text-xl mt-1">✓</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-3xl">📊</span>
                    {dict.about.achievementsTitle}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {dict.about.achievements.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">
                          {item.value}
                        </div>
                        <div className="text-white/70">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Close button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center pt-4"
                >
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="group inline-flex items-center gap-3 text-white/90 hover:text-white px-6 py-3 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    {dict.about.collapse}
                    <motion.svg
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-5 h-5 transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default memo(AboutUs);
