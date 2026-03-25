"use client";

import { useLang } from "@/contexts/LanguageContext";
import { MapPin, Globe, Briefcase, Award, Users, ArrowRight } from "lucide-react";

const flagEmojis: Record<string, string> = {
  "Ελλάδα": "🇬🇷",
  "Κύπρος": "🇨🇾",
  "Γαλλία": "🇫🇷",
  "Ιταλία": "🇮🇹",
  "Πορτογαλία": "🇵🇹",
  "Ρουμανία": "🇷🇴",
  "Βουλγαρία": "🇧🇬",
  "Σερβία": "🇷🇸",
  "Ισραήλ": "🇮🇱",
  // English
  "Greece": "🇬🇷",
  "Cyprus": "🇨🇾",
  "France": "🇫🇷",
  "Italy": "🇮🇹",
  "Portugal": "🇵🇹",
  "Romania": "🇷🇴",
  "Bulgaria": "🇧🇬",
  "Serbia": "🇷🇸",
  "Israel": "🇮🇱",
  // French
  "Grèce": "🇬🇷",
  "Chypre": "🇨🇾",
  "Israël": "🇮🇱",
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

const featureColors = [
  "bg-inn-teal text-white",
  "bg-inn-orange text-white",
  "bg-purple-600 text-white",
  "bg-emerald-600 text-white",
];

export default function CountriesSection() {
  const { t } = useLang();
  const c = t.countries;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            {c.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">{c.title}</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{c.subtitle}</p>
        </div>

        {/* Stats row */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            { val: c.stat1, label: c.stat1label },
            { val: c.stat2, label: c.stat2label },
            { val: c.stat3, label: c.stat3label },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-inn-light-grey rounded-2xl p-6 text-center border border-slate-100"
            >
              <div className="text-3xl font-black text-inn-teal mb-1">{s.val}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Two-column content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Left: description + features */}
          <div>
            <p className="text-slate-600 leading-relaxed mb-8 text-base">{c.description}</p>
            <div className="space-y-4">
              {c.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-inn-light-grey rounded-2xl p-5 border border-slate-100"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${featureColors[i]}`}
                  >
                    {iconMap[feature.icon]}
                  </div>
                  <div>
                    <h3 className="font-bold text-inn-dark text-sm mb-1">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: country cards */}
          <div className="grid grid-cols-3 gap-3">
            {c.list.map((country) => (
              <div
                key={country}
                className="flex flex-col items-center gap-2 bg-inn-light-grey px-3 py-5 rounded-2xl border border-slate-100 hover:border-inn-teal/30 hover:shadow-md transition-all group"
              >
                <span className="text-3xl">{flagEmojis[country] || "🏳️"}</span>
                <span className="font-semibold text-slate-700 text-xs text-center group-hover:text-inn-teal transition-colors">
                  {country}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Innjobs platform CTA */}
        <div className="bg-gradient-to-br from-inn-teal to-inn-teal-dark rounded-3xl p-10 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Globe className="w-5 h-5" />
            <span className="font-bold text-lg">{c.platformTitle}</span>
          </div>
          <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
            {c.platformDesc}
          </p>
          <a
            href="/#apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-inn-teal font-bold rounded-2xl hover:bg-white/90 transition-all shadow-lg"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
