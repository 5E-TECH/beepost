"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  delay?: number;
}

const AnimatedCard = ({ icon, title, text, delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className="text-center"
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/60 backdrop-blur flex items-center justify-center text-3xl shadow-sm">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-[#666]">{text}</p>
    </motion.div>
  );
};

export default AnimatedCard;
