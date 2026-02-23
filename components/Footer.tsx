"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inn-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="bg-white rounded-2xl p-2 inline-block">
                <img
                  src="/logo.png"
                  alt="InnAcademy Hospitality School"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {f.tagline}
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <span>{f.poweredBy}</span>
              <a
                href="https://innjobs.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inn-orange hover:text-inn-orange/80 font-bold flex items-center gap-1 transition-colors"
              >
                Innjobs
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm text-white/60 uppercase tracking-wider mb-5">
              {f.links}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#program", label: f.program },
                { href: "#curriculum", label: t.nav.curriculum },
                { href: "#professors", label: f.professors },
                { href: "#pricing", label: f.pricing },
                { href: "#faq", label: f.faq },
                { href: "#apply", label: t.nav.apply },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-inn-orange text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h4 className="font-bold text-sm text-white/60 uppercase tracking-wider mb-5">
              Πιστοποιήσεις
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { src: "/accrediations/acta.jpg", alt: "ACTA" },
                { src: "/accrediations/Paris-Education.png", alt: "Paris Education" },
              ].map((logo) => (
                <div key={logo.alt} className="bg-white rounded-xl p-2 flex items-center justify-center w-28 h-14">
                  <img src={logo.src} alt={logo.alt} className="max-h-10 max-w-full object-contain" />
                </div>
              ))}
            </div>

            {/* Proud member of */}
            <div className="mt-6">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Proud member of</p>
              <div className="bg-white rounded-xl p-2 flex items-center justify-center w-28 h-14">
                <img
                  src="/member/ellino-galliko-epimelitirio.jpg"
                  alt="Ελληνογαλλικό Επιμελητήριο"
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-white/60 uppercase tracking-wider mb-5">
              {f.contact}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:academy@innjobs.net"
                  className="flex items-center gap-3 text-white/60 hover:text-inn-orange text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-inn-orange/20 flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  academy@innjobs.net
                </a>
              </li>
              <li>
                <a
                  href="tel:+302100000000"
                  className="flex items-center gap-3 text-white/60 hover:text-inn-orange text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-inn-orange/20 flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  +30 210 000 0000
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  Αθήνα, Ελλάδα
                </div>
              </li>
              <li className="pt-2">
                <a
                  href="https://innjobs.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-inn-orange text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-inn-orange/20 flex items-center justify-center transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  innjobs.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">
              © {year} InnAcademy by Innjobs. {f.rights}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                Πολιτική Απορρήτου
              </a>
              <span className="text-white/10">|</span>
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                Όροι Χρήσης
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
