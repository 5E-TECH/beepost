import { memo } from "react";
import AnimatedCard from "./animatedCard";

const Qadiryatlar = () => {
  return (
    <section id="about" className="bg-[#FBF8F3] py-28">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-center text-4xl font-extrabold mb-6 text-[#1C1C1C]">
          Hiring and networking <br /> that feels human.
        </h2>

        <p className="text-center text-lg max-w-[640px] mx-auto text-[#555] mb-20">
          Liftoff amplifies human insight and facilitates connections, to help
          incredible people find each other.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <AnimatedCard
            icon="✨"
            title="Better fits"
            text="Authentic recommendations to find the right people and opportunities."
            delay={0}
          />

          <AnimatedCard
            icon="💜"
            title="Less noise"
            text="No public broadcasts or noisy feeds. Quality over quantity, always."
            delay={0.15}
          />

          <AnimatedCard
            icon="😊"
            title="More warmth"
            text="Warm intros that lead to relationships vs. transactions."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Qadiryatlar);
