"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroAnimationProps {
  children: ReactNode;
}

const HeroAnimation = ({ children }: HeroAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default HeroAnimation;