"use client";

import { useLang } from "@/contexts/LanguageContext";
import { MapPin, Star } from "lucide-react";

const venueImages = [
  "/masterclasses/Grand-Hyatt-Athens.webp",
  "/masterclasses/electra-metropolis.jpg",
  "/masterclasses/Aluma-Athens-Roof-Top.jpg",
];

export default function MasterclassVenues() {
  const { t } = useLang();
  const v = t.venues;

  return (
    <section id="venues" className="py-20 lg:py-28 bg-inn-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/20 rounded-full text-inn-orange text-sm font-semibold mb-4">
            {v.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {v.title}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            {v.subtitle}
          </p>
        </div>

        {/* Venue cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {v.venues.map((venue, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={venueImages[i]}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inn-dark via-inn-dark/40 to-transparent" />

                {/* Stars */}
                <div className="absolute top-4 right-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-inn-orange text-inn-orange" />
                  ))}
                </div>

                {/* Area badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-inn-teal/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                    {venue.area}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="w-4 h-4 text-inn-orange" />
                  <span className="text-inn-orange text-xs font-semibold uppercase tracking-wide">
                    Athens, Greece
                  </span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">{venue.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{venue.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            + Εκπαιδευτικές επισκέψεις στη{" "}
            <span className="text-white font-semibold">Nef-Nef</span> (Λινά &
            Housekeeping) και στην{" "}
            <span className="text-white font-semibold">Delifrance</span> (Κουζίνα &
            Πρωινά)
          </p>
        </div>
      </div>
    </section>
  );
}
