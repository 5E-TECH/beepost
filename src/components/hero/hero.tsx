import { memo } from "react";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden flex items-center">
      {" "}
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[#1E0E2F] md:text-6xl">
          Ishonchli va tezkor <br />
          <span className="text-[#3B1D5A]">pochta xizmati</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#5E5168]">
          Marketing, transactional va newsletter xabarlarni bitta platformada
          yuboring. Yetib borish darajasi yuqori, sozlash esa juda oson.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-[#2B123F] px-6 py-3 text-white transition hover:opacity-90">
            Boshlash
          </button>
          <button className="rounded-xl border border-[#2B123F] px-6 py-3 text-[#2B123F] transition hover:bg-[#2B123F] hover:text-white">
            Demo ko‘rish
          </button>
        </div>
      </div>
      {/* Blur effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-yellow-400/40 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-orange-400/40 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-400/40 blur-3xl" />
      </div>
    </section>
  );
};

export default memo(Hero);
