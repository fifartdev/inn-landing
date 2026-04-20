"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

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
                  alt="Inn Academy Hospitality School"
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
            <h4 className="font-bold text-sm text-white/60 mb-5">
              {f.links}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/#program", label: f.program },
                { href: "/#curriculum", label: t.nav.curriculum },
                { href: "/professors", label: f.professors },
                { href: "/#pricing", label: f.pricing },
                { href: "/faq", label: f.faq },
                { href: "/countries", label: t.nav.countries },
                { href: "/france", label: t.nav.france },
                { href: "/guests", label: t.nav.guests },
                { href: "/#apply", label: t.nav.apply },
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
            <h4 className="font-bold text-sm text-white/60 mb-5">
              Πιστοποιήσεις
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { src: "/accrediations/logo_ist.svg", alt: "IST College" },
                { src: "/accrediations/Paris-Education.png", alt: "Paris Education" },
              ].map((logo) => (
                <div key={logo.alt} className="bg-white rounded-xl p-2 flex items-center justify-center w-28 h-14">
                  <img src={logo.src} alt={logo.alt} className="max-h-10 max-w-full object-contain" />
                </div>
              ))}
            </div>

            {/* Proud member of */}
            <div className="mt-6">
              <p className="text-white/40 text-xs mb-3">Proud member of</p>
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
            <h4 className="font-bold text-sm text-white/60 mb-5">
              {f.contact}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@innacademy.gr"
                  className="flex items-center gap-3 text-white/60 hover:text-inn-orange text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-inn-orange/20 flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  info@innacademy.gr
                </a>
              </li>
              <li>
                <a
                  href="tel:+302102204187"
                  className="flex items-center gap-3 text-white/60 hover:text-inn-orange text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-inn-orange/20 flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  210 2204187
                </a>
              </li>
              <li>
                <a
                  href="tel:+306973434146"
                  className="flex items-center gap-3 text-white/60 hover:text-inn-orange text-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-inn-orange/20 flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  697 34 34 146
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  Πανεπιστημίου 63, 10564, Αθήνα
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
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
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
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-inn-orange/20 text-white/50 hover:text-inn-orange flex items-center justify-center transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">
              © {year} Inn Academy by Innjobs. {f.rights}
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                Πολιτική Απορρήτου
              </a>
              <span className="text-white/10">|</span>
              <a href="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                Όροι Χρήσης
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
