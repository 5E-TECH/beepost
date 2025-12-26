export type Lang = "uz" | "en" | "ru";

export const detectLangFromString = (value: string | null | undefined): Lang => {
  if (!value) return "uz";
  const lower = value.toLowerCase();
  if (lower.startsWith("ru")) return "ru";
  if (lower.startsWith("en")) return "en";
  if (lower.startsWith("uz")) return "uz";
  return "uz";
};

export const parseLangParam = (search: string): Lang | null => {
  try {
    const params = new URLSearchParams(search);
    const lang = params.get("lang");
    if (lang === "uz" || lang === "en" || lang === "ru") return lang;
    return null;
  } catch {
    return null;
  }
};
