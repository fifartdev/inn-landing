"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/translations";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const langLabels: Record<Lang, string> = { gr: "ΕΛ", en: "EN", fr: "FR" };

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const isTransparentHeroPage = pathname === "/" || pathname === "/fnb-program";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [programMobileOpen, setProgramMobileOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const programCloseTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      e.preventDefault();
      setApplyModalOpen(true);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = () => setApplyModalOpen(true);
    document.addEventListener("open-apply-modal", handler);
    return () => document.removeEventListener("open-apply-modal", handler);
  }, []);

  const isScrolledStyle = scrolled || !isTransparentHeroPage;

  const applyHref = pathname === "/" ? "#apply" : pathname === "/fnb-program" ? "#apply-mobile" : "/#apply";

  const desktopLinks = [
    { href: "/#curriculum", label: t.nav.curriculum },
    { href: "/professors", label: t.nav.professors },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/faq", label: t.nav.faq },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/sponsors", label: t.nav.sponsors },
  ];

  const mobileLinks = [
    { href: "/#curriculum", label: t.nav.curriculum },
    { href: "/professors", label: t.nav.professors },
    { href: "/guests", label: t.nav.guests },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/faq", label: t.nav.faq },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/sponsors", label: t.nav.sponsors },
    { href: "/countries", label: t.nav.countries },
    { href: "/france", label: t.nav.france },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledStyle
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Inn Academy Hospitality School"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <a
              href="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-inn-teal/10 hover:text-inn-teal ${
                isScrolledStyle ? "text-slate-600" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.nav.home}
            </a>

            {/* Program dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (programCloseTimer.current) clearTimeout(programCloseTimer.current);
                setProgramOpen(true);
              }}
              onMouseLeave={() => {
                programCloseTimer.current = setTimeout(() => setProgramOpen(false), 120);
              }}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-inn-teal/10 hover:text-inn-teal ${
                  isScrolledStyle ? "text-slate-600" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {t.nav.program}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {programOpen && (
                <div className="absolute top-full left-0 z-20 pt-2 w-44">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                  <a
                    href="/"
                    className="flex items-start gap-2 px-3 py-2 text-xs text-slate-700 hover:bg-inn-teal/5 hover:text-inn-teal transition-colors border-b border-slate-100"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-inn-orange shrink-0 mt-0.5" />
                    <span>{t.nav.programDiploma}</span>
                  </a>
                  <a
                    href="/fnb-program"
                    className="flex items-start gap-2 px-3 py-2 text-xs text-slate-700 hover:bg-inn-teal/5 hover:text-inn-teal transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-inn-orange shrink-0 mt-0.5" />
                    <span>{t.nav.programFnb}</span>
                  </a>
                </div>
                </div>
              )}
            </div>
            {desktopLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-inn-teal/10 hover:text-inn-teal ${
                  isScrolledStyle ? "text-slate-600" : "text-white/90 hover:text-white hover:bg-white/10"
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
                  isScrolledStyle
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
              href={applyHref}
              onClick={handleApplyClick}
              className="hidden sm:inline-flex items-center px-5 py-2 bg-inn-orange hover:bg-inn-orange-dark text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              {t.nav.apply}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolledStyle ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <ContactFormModal open={applyModalOpen} onClose={() => setApplyModalOpen(false)} />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {/* Αρχική */}
            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-inn-teal/5 hover:text-inn-teal transition-colors"
            >
              {t.nav.home}
            </a>

            {/* Πρόγραμμα collapsible */}
            <div>
              <button
                onClick={() => setProgramMobileOpen(!programMobileOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-inn-teal/5 hover:text-inn-teal transition-colors"
              >
                {t.nav.program}
                <ChevronDown className={`w-4 h-4 transition-transform ${programMobileOpen ? "rotate-180" : ""}`} />
              </button>
              {programMobileOpen && (
                <div className="ml-4 mt-0.5 space-y-0.5 border-l-2 border-slate-100 pl-3">
                  <a
                    href="/"
                    onClick={() => { setMobileOpen(false); setProgramMobileOpen(false); }}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-inn-teal/5 hover:text-inn-teal transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-inn-orange shrink-0" />
                    {t.nav.programDiploma}
                  </a>
                  <a
                    href="/fnb-program"
                    onClick={() => { setMobileOpen(false); setProgramMobileOpen(false); }}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-inn-teal/5 hover:text-inn-teal transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-inn-orange shrink-0" />
                    {t.nav.programFnb}
                  </a>
                </div>
              )}
            </div>

            {/* Remaining links */}
            {mobileLinks.map((link) => (
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
                href={applyHref}
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 bg-inn-orange text-white font-bold rounded-xl text-sm"
              >
                {t.nav.apply}
              </a>
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-slate-100">
                {[
                  { href: "https://www.facebook.com/innacademygreece", Icon: FacebookIcon, label: "Facebook" },
                  { href: "https://www.instagram.com/innacademygreece", Icon: InstagramIcon, label: "Instagram" },
                  { href: "https://www.linkedin.com/company/inn-academy-greece", Icon: LinkedInIcon, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    onClick={() => setMobileOpen(false)}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-inn-teal/10 text-slate-500 hover:text-inn-teal flex items-center justify-center transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
