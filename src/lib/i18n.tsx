"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Dictionary, type Locale } from "./dictionary";

const STORAGE_KEY = "gk-locale";

type I18nValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") {
      setLocaleState(saved);
      return;
    }
    if (!navigator.language.toLowerCase().startsWith("pt")) {
      setLocaleState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next = current === "pt" ? "en" : "pt";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <I18nContext.Provider
      value={{ locale, t: dictionary[locale] as Dictionary, setLocale, toggleLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n precisa estar dentro de um I18nProvider");
  }
  return context;
}
