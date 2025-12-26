"use client";

import { memo, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Lang } from "@/lib/language";

const emojisByLang: Record<Lang, string[]> = {
  uz: ["❤️", "✨", "🚀", "😊", "📦", "📬", "🤝", "🛡️", "⚡"],
  en: ["❤️", "✨", "🚀", "😊", "📦", "📬", "🤝", "🛡️", "⚡"],
  ru: ["❤️", "✨", "🚀", "😊", "📦", "📬", "🤝", "🛡️", "⚡"],
};

const Footer = () => {
  const { dict, lang } = useI18n();
  const emojis = emojisByLang[lang] || emojisByLang.uz;
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setPrevIndex(emojiIndex);
      setEmojiIndex((prev) => (prev + 1) % emojis.length);
    }, 2200);
    return () => clearInterval(id);
  }, [emojiIndex, emojis.length]);

  useEffect(() => {
    const timer = setTimeout(() => setPrevIndex(null), 400);
    return () => clearTimeout(timer);
  }, [emojiIndex]);

  return (
    <footer className="bg-[#120b1c] text-white py-5">
      <div className="container mx-auto px-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Beepost logo" className="h-8 w-8" />
          <div>
            <p className="text-lg font-semibold">BEEPOST</p>
            <p className="text-sm text-white/70">{dict.footer.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              className="h-6 w-6 group-hover:scale-105 transition"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="ig" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f58529" />
                  <stop offset="0.5" stopColor="#dd2a7b" />
                  <stop offset="1" stopColor="#8134af" />
                </linearGradient>
              </defs>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#ig)" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.5" stroke="url(#ig)" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="#fbbc04" />
            </svg>
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              className="h-6 w-6 group-hover:scale-105 transition"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 4.5L18.1 19.2c-.16.82-.94 1.26-1.66.89l-4.09-2.08-1.98 2.22c-.5.56-1.4.31-1.56-.44L7.75 14 3.6 12.2c-.77-.33-.77-1.43.01-1.74L20.06 3.1C20.76 2.81 21.38 3.44 21 4.1Z"
                fill="#2AA8E0"
              />
              <path
                d="M9.5 14.3 17.5 7.5"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              className="h-6 w-6 group-hover:scale-105 transition"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.92 3.58 9 8.26 9.87v-6.98H7.9v-2.89h2.22V9.41c0-2.2 1.32-3.42 3.34-3.42.97 0 1.98.17 1.98.17v2.17h-1.12c-1.1 0-1.44.69-1.44 1.39v1.67h2.45l-.39 2.89h-2.06v6.98c4.68-.87 8.26-4.95 8.26-9.87Z"
                fill="#1773EA"
              />
            </svg>
          </a>
        </div>

        <div className="text-xs text-white/60 flex items-center gap-1">
          {dict.footer.builtByPrefix}
          <span className="relative inline-block h-6 w-6 overflow-hidden align-middle">
            {prevIndex !== null && (
              <span
                key={`out-${prevIndex}-${emojiIndex}`}
                className="absolute inset-0 flex items-center justify-center text-lg leading-6 text-center animate-emojiSlideOut"
              >
                {emojis[prevIndex]}
              </span>
            )}
            <span
              key={`in-${emojiIndex}`}
              className="absolute inset-0 flex items-center justify-center text-lg leading-6 text-center animate-emojiSlideIn"
            >
              {emojis[emojiIndex]}
            </span>
          </span>
          {dict.footer.builtBySuffix || ""}
        </div>
      </div>
      <style jsx>{`
        @keyframes emojiSlideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes emojiSlideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        .animate-emojiSlideIn {
          animation: emojiSlideIn 0.35s ease-out forwards;
        }
        .animate-emojiSlideOut {
          animation: emojiSlideOut 0.35s ease-in forwards;
        }
      `}</style>
    </footer>
  );
};

export default memo(Footer);
