"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/translations";
import { Menu, X, ChevronDown } from "lucide-react";

const langLabels: Record<Lang, string> = { gr: "ΕΛ", en: "EN", fr: "FR" };

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#program", label: t.nav.program },
    { href: "#curriculum", label: t.nav.curriculum },
    { href: "#professors", label: t.nav.professors },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/logo.png"
              alt="InnAcademy Hospitality School"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-inn-teal/10 hover:text-inn-teal ${
                  scrolled ? "text-slate-600" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border transition-all ${
                  scrolled
                    ? "border-slate-200 text-slate-600 hover:border-inn-teal hover:text-inn-teal"
                    : "border-white/30 text-white hover:border-white hover:bg-white/10"
                }`}
              >
                {langLabels[lang]}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-10">
                  {(["gr", "en", "fr"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full px-5 py-2.5 text-sm font-medium text-left transition-colors hover:bg-inn-teal/5 ${
                        lang === l ? "text-inn-teal bg-inn-teal/5 font-bold" : "text-slate-600"
                      }`}
                    >
                      {l === "gr" ? "Ελληνικά" : l === "en" ? "English" : "Français"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="#apply"
              className="hidden sm:inline-flex items-center px-5 py-2 bg-inn-orange hover:bg-inn-orange-dark text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              {t.nav.apply}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-inn-teal/5 hover:text-inn-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 bg-inn-orange text-white font-bold rounded-xl text-sm"
              >
                {t.nav.apply}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
