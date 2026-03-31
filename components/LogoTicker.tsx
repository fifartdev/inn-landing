"use client";

import { hotelPartners } from "@/lib/translations";

export default function LogoTicker() {
  const doubled = [...hotelPartners, ...hotelPartners];

  return (
    <div className="bg-inn-dark py-5 overflow-hidden border-y border-white/5">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-6 text-white/70 text-sm font-medium whitespace-nowrap hover:text-inn-orange transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-inn-orange/50 mr-6 shrink-0" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
