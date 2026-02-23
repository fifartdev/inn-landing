"use client";

import { useLang } from "@/contexts/LanguageContext";

const sponsors = [
  {
    name: "Nef-Nef",
    subtitle: "Hotel Linen & Textiles",
    logo: "/sponsors/nef-nef.png",
  },
  {
    name: "Delifrance",
    subtitle: "Bakery & Pastry Solutions",
    logo: "/sponsors/delifrance.png",
  },
  {
    name: "Fillos Sea of Nature",
    subtitle: "Natural Products",
    logo: "/sponsors/fillos.png",
  },
  {
    name: "Ernest Berat Champagne",
    subtitle: "Maison de Champagne",
    logo: "/sponsors/ernest-berat.png",
  },
];

export default function SponsorsSection() {
  const { t } = useLang();
  const s = t.sponsors;

  return (
    <section className="py-16 bg-inn-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-white/70 text-sm font-semibold mb-3">
            {s.tag}
          </div>
          <h3 className="text-xl font-black text-white">{s.title}</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="bg-white hover:bg-slate-50 border border-white/10 rounded-2xl p-6 text-center card-hover group transition-all"
            >
              <div className="h-14 flex items-center justify-center mx-auto mb-3">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
              <div className="font-bold text-slate-800 text-sm group-hover:text-inn-orange transition-colors">
                {sponsor.name}
              </div>
              <div className="text-slate-400 text-xs mt-1">{sponsor.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
