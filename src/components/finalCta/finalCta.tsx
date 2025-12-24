import { memo } from "react";

const FinalCta = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fbf7ef]">
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
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 py-20">
        {/* Center hero */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-[#15111a] sm:text-6xl md:text-7xl">
            Networking
            <br />
            without the noise.
          </h1>

          <button className="mt-10 rounded-full bg-[#15111a] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:opacity-95 active:scale-[0.98]">
            Request access
          </button>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2">
          {/* Left info */}
          <div>
            <div className="text-xl font-black tracking-tight text-[#15111a]">
              LIFTOFF
            </div>
            <div className="mt-2 text-sm font-semibold text-[#15111a]/80">
              Get in touch
            </div>
            <a
              href="mailto:support@liftoff.xyz"
              className="mt-1 block text-sm text-[#15111a]/60 hover:underline"
            >
              support@liftoff.xyz
            </a>
          </div>

          {/* Glass card */}
          <div className="rounded-3xl border border-white/40 bg-white/35 p-6 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-4">
              {/* Signal */}
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9d9d9]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6a3d]" />
                <span className="relative h-2.5 w-16 overflow-hidden rounded-full bg-[#eae6f2]">
                  <span className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#ff5fb7]" />
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#15111a]">
                  Subscribe to our Substack, Warm Intro
                </p>
                <p className="mt-1 text-xs text-[#15111a]/55">
                  Hear from leaders we admire on building phenomenal teams and
                  how to find an incredible fit
                </p>
              </div>

              {/* Arrow */}
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/60 shadow hover:bg-white/80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="#15111a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(FinalCta);
