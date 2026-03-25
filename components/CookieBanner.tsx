"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "inn_cookie_consent";

export default function CookieBanner() {
  const { t } = useLang();
  const cb = t.cookieBanner;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-inn-dark text-white rounded-2xl shadow-2xl border border-white/10 p-5 sm:p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-inn-teal/20 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 text-inn-teal" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              {cb.message}{" "}
              <a
                href="/privacy"
                className="text-inn-teal hover:underline font-medium"
              >
                {cb.learnMore}
              </a>
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={accept}
                className="px-5 py-2 bg-inn-teal hover:bg-inn-teal-dark text-white text-sm font-bold rounded-xl transition-all"
              >
                {cb.accept}
              </button>
              <button
                onClick={decline}
                className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl transition-all"
              >
                {cb.decline}
              </button>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={decline}
            aria-label="Close"
            className="text-white/40 hover:text-white transition-colors shrink-0 mt-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
