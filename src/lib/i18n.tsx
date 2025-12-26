"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries } from "./dictionaries";
import { Lang, detectLangFromString, parseLangParam } from "./language";

type Context = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dict: (typeof dictionaries)[Lang];
};

const LanguageContext = createContext<Context | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    const fromQuery = typeof window !== "undefined" ? parseLangParam(window.location.search) : null;
    const browser = typeof navigator !== "undefined" ? navigator.language : null;
    const detected = fromQuery || (stored as Lang | null) || detectLangFromString(browser);
    setLangState(detected);
    if (fromQuery) {
      localStorage.setItem("lang", fromQuery);
    } else if (stored) {
      localStorage.setItem("lang", stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => setLangState(l),
      dict: dictionaries[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
};
