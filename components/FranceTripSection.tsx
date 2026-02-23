"use client";

import { useLang } from "@/contexts/LanguageContext";
import { CheckCircle, GraduationCap, MapPin } from "lucide-react";

export default function FranceTripSection() {
  const { t } = useLang();
  const f = t.france;

  return (
    <section id="france" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80&fit=crop"
                alt="Paris"
                className="rounded-3xl h-64 w-full object-cover shadow-xl"
              />
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&q=80&fit=crop"
                  alt="Champagne vineyard"
                  className="rounded-3xl h-28 w-full object-cover shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop"
                  alt="Wine tasting"
                  className="rounded-3xl h-28 w-full object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 left-4 bg-inn-teal text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-bold">Paris & Champagne</span>
              </div>
              <div className="text-xs text-white/70 mt-0.5">4 ημέρες εκπαίδευση</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold">
                {f.tag}
              </span>
              <span className="px-3 py-1.5 bg-inn-orange/10 rounded-full text-inn-orange text-xs font-semibold">
                {f.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mt-4 mb-2 leading-tight">
              {f.title}
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">{f.subtitle}</p>

            <ul className="space-y-3 mb-8">
              {f.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-inn-teal shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Graduation box */}
            <div className="bg-gradient-to-br from-inn-teal to-inn-teal-dark rounded-2xl p-6 text-white">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">{f.graduation}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {f.graduationDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
