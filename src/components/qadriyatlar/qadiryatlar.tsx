"use client";

import { memo } from "react";
import { useI18n } from "@/lib/i18n";
import AnimatedCard from "./animatedCard";

const Qadiryatlar = () => {
  const { dict } = useI18n();
  return (
    <section id="values" className="bg-[#FBF8F3] py-28 scroll-mt-24">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-center text-4xl font-extrabold mb-6 text-[#1C1C1C]">
          {dict.values.title}
        </h2>

        <p className="text-center text-lg max-w-[720px] mx-auto text-[#555] mb-20">
          {dict.values.subtitle}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {dict.values.cards.map((card, idx) => (
            <AnimatedCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Qadiryatlar);
