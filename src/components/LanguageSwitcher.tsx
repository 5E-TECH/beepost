"use client";

import { useI18n } from "@/lib/i18n";
import { Lang } from "@/lib/language";

const languages: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/70 px-2 py-1 shadow-sm backdrop-blur">
      {languages.map((item) => {
        const active = item.code === lang;
        return (
          <button
            key={item.code}
            onClick={() => setLang(item.code)}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition ${
              active ? "bg-[#2B123F] text-white shadow" : "text-[#2B123F] hover:bg-white"
            }`}
            aria-label={`Switch to ${item.label}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
