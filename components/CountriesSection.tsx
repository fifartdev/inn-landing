"use client";

import { useLang } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

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

export default function CountriesSection() {
  const { t } = useLang();
  const c = t.countries;

  return (
    <section className="py-16 bg-inn-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            {c.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-inn-dark mb-2">{c.title}</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">{c.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {c.list.map((country) => (
            <div
              key={country}
              className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm hover:border-inn-teal/30 hover:shadow-md transition-all group"
            >
              <span className="text-xl">{flagEmojis[country] || "🏳️"}</span>
              <span className="font-semibold text-slate-700 text-sm group-hover:text-inn-teal transition-colors">
                {country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
