"use client";

import { memo, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const FinalCta = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const DURATION = 4500;
  const { dict } = useI18n();
  const cards = dict.pricing.cards;

  useEffect(() => {
    const timer = setTimeout(() => goTo("next"), DURATION);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const goTo = (direction: "prev" | "next" | number) => {
    setPrevIndex(index);
    setIndex((prev) => {
      if (typeof direction === "number") return direction;
      if (direction === "next") return (prev + 1) % cards.length;
      return (prev - 1 + cards.length) % cards.length;
    });
    setTimeout(() => setPrevIndex(null), 500);
  };

  const current = cards[index];
  const renderSlide = (item: (typeof cards)[number], idx: number) => (
    <div className="h-full space-y-2">
      <p className="text-sm font-semibold text-[#ff5fb7] uppercase tracking-wide">
        {dict.pricing.tariffLabel} #{idx + 1}
      </p>
      <div className="flex flex-wrap items-baseline gap-2">
        <h3 className="text-lg font-bold text-[#15111a]">{item.title}</h3>
        <span className="rounded-full bg-[#15111a] px-3 py-1 text-xs font-semibold text-white">
          {item.price}
        </span>
      </div>
      <p className="text-sm text-[#15111a]/75 leading-relaxed">{item.info}</p>
      <p className="text-xs text-[#15111a]/55">{item.note}</p>
    </div>
  );

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#fbf7ef] scroll-mt-24 py-16"
    >
      {/* BACKGROUND — matches screenshot layout */}
      <div className="pointer-events-none absolute inset-0">
        {/* base soft warm tint from right */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_85%_30%,rgba(255,192,120,0.25),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_25%,rgba(214,232,255,0.18),transparent_65%)]" />

        {/* MAIN band (bottom-ish) */}
        {/* LEFT blue */}
        <div className="absolute inset-0 bg-[radial-gradient(980px_520px_at_14%_62%,rgba(135,170,255,0.85),transparent_62%)]" />
        {/* CENTER purple */}
        <div className="absolute inset-0 bg-[radial-gradient(980px_520px_at_45%_60%,rgba(171,142,214,0.75),transparent_62%)]" />
        {/* RIGHT orange/yellow */}
        <div className="absolute inset-0 bg-[radial-gradient(980px_520px_at_86%_60%,rgba(255,154,84,0.88),transparent_62%)]" />

        {/* soften edges (like screenshot “mist”) */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_64%,rgba(255,255,255,0.55),transparent_68%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6">
        {/* Center hero */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-[#15111a] sm:text-6xl md:text-7xl text-center">
            {dict.pricing.heading}
          </h1>

          <button className="mt-10 rounded-full bg-[#15111a] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:opacity-95 active:scale-[0.98]">
            {dict.pricing.contactCta}
          </button>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2">
          {/* Left info */}
          <div>
            <div className="text-xl font-black tracking-tight text-[#15111a]">
              {dict.pricing.footerLeftTitle}
            </div>
            <div className="mt-2 text-sm font-semibold text-[#15111a]/80">
              {dict.pricing.footerLeftContact}
            </div>
            <a
              href="mailto:support@beepost.uz"
              className="mt-1 block text-sm text-[#15111a]/60 hover:underline"
            >
              support@beepost.uz
            </a>
            <a
              href="tel:+998781234567"
              className="mt-1 block text-sm text-[#15111a]/60 hover:underline"
            >
              +998 (78) 123-45-67
            </a>
          </div>

          {/* Glass card swiper */}
          <div className="rounded-3xl border border-white/40 bg-white/35 p-6 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3">
              {cards.map((_, i) => {
                const isActive = i === index;
                return (
                  <div
                    key={i}
                    className={`relative h-2 rounded-full overflow-hidden border border-white/60 shadow-sm transition-all duration-300 ${
                      isActive ? "flex-1 min-w-[140px]" : "w-12 bg-white/30"
                    } ${!isActive ? "bg-white/40" : "bg-[#efe7ff]"}`}
                  >
                    <div
                      key={isActive ? `bar-${index}` : `idle-${i}`}
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#7c5cff] via-[#a35fff] to-[#ff5fb7]"
                      style={
                        isActive
                          ? { animation: `fill ${DURATION}ms linear forwards` }
                          : { width: 0 }
                      }
                    />
                  </div>
                );
              })}

              <div className="flex items-center gap-2">
                <button
                  aria-label="Oldingi tarif"
                  onClick={() => goTo("prev")}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-[#15111a] shadow hover:bg-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Keyingi tarif"
                  onClick={() => goTo("next")}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-[#15111a] shadow hover:bg-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-5 relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm min-h-[190px]">
              {prevIndex !== null && (
                <div
                  key={`out-${prevIndex}-${index}`}
                  className="absolute inset-0 animate-slideOut px-6 py-5"
                >
                  {renderSlide(cards[prevIndex], prevIndex)}
                </div>
              )}
              <div
                key={`in-${index}`}
                className="absolute inset-0 animate-slideIn px-6 py-5"
              >
                {renderSlide(current, index)}
              </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateX(120%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-120%);
            opacity: 0;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.45s ease-out forwards;
        }
        .animate-slideOut {
          animation: slideOut 0.45s ease-in forwards;
        }
      `}</style>
    </section>
  );
};

export default memo(FinalCta);
