"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Lang } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations["gr"];
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "gr",
  setLang: () => {},
  t: translations["gr"],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("gr");

  useEffect(() => {
    const stored = localStorage.getItem("inn_lang") as Lang | null;
    if (stored && ["gr", "en", "fr"].includes(stored)) {
      setLang(stored);
    }
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("inn_lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
