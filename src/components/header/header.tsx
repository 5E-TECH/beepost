"use client";

import { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/shared/assets/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed w-full z-50 transition-all duration-300
        ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <h2 className="font-bold text-2xl">BEEPOST</h2>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
          <a href="#about" className="hover:text-purple-600 transition">
            Biz haqimizda
          </a>
          <a href="#services" className="hover:text-purple-600 transition">
            Xizmatlar
          </a>
          <a href="#pricing" className="hover:text-purple-600 transition">
            Narxlar
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            Tizimga kirish
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            <span
              className="block w-6 h-0.5 bg-gray-800 mb-1 transition-transform duration-300"
              style={{
                transform: mobileMenuOpen
                  ? "rotate(45deg) translateY(8px)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 bg-gray-800 mb-1 transition-opacity duration-300"
              style={{ opacity: mobileMenuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-gray-800 transition-transform duration-300"
              style={{
                transform: mobileMenuOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (AnimatePresence + motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-md w-full absolute top-16 left-0 px-4 py-6 flex flex-col gap-4"
          >
            <a
              href="#about"
              className="text-gray-800 font-medium hover:text-purple-600 transition"
            >
              Biz haqimizda
            </a>
            <a
              href="#services"
              className="text-gray-800 font-medium hover:text-purple-600 transition"
            >
              Xizmatlar
            </a>
            <a
              href="#pricing"
              className="text-gray-800 font-medium hover:text-purple-600 transition"
            >
              Narxlar
            </a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition mt-2">
              Tizimga kirish
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Header);
