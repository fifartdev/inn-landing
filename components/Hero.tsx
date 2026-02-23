"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Calendar, MapPin, Wifi, Star, ChevronDown } from "lucide-react";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85&fit=crop"
          alt="Hotel lobby"
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-inn-orange/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Star className="w-3.5 h-3.5 fill-current" />
            {h.badge}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-3">
            {h.title}
          </h1>
          <p className="text-xl sm:text-2xl font-light text-inn-orange/90 mb-6 tracking-wide">
            {h.subtitle}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
            {h.description}
          </p>

          {/* Badges row */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
              <Wifi className="w-3.5 h-3.5" />
              {h.online}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
              <Calendar className="w-3.5 h-3.5" />
              {h.start}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-inn-orange/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              {h.seats}
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { val: h.stat1, label: h.stat1sub },
              { val: h.stat2, label: h.stat2sub },
              { val: h.stat3, label: h.stat3sub },
              { val: h.stat4, label: h.stat4sub },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 stat-number">
                  {s.val}
                </div>
                <div className="text-xs text-white/75 font-medium leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-inn-orange hover:bg-inn-orange-dark text-white font-bold text-base rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {h.cta}
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold text-base rounded-2xl transition-all"
            >
              {h.ctaSub}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
