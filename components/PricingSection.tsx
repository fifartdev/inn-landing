"use client";

import { useLang } from "@/contexts/LanguageContext";
import { CheckCircle, Zap, Tag } from "lucide-react";

export default function PricingSection() {
  const { t } = useLang();
  const p = t.pricing;

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/10 rounded-full text-inn-orange text-sm font-semibold mb-4">
            {p.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">
            {p.title}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">{p.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Early Bird card */}
          <div className="relative bg-gradient-to-br from-inn-teal to-inn-teal-dark rounded-3xl p-8 shadow-2xl text-white lg:col-span-1">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-inn-orange rounded-full shadow-lg">
                <Zap className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-black uppercase tracking-wide">
                  {p.earlyBird.badge}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-black mb-1">{p.earlyBird.title}</h3>
              <p className="text-white/70 text-sm mb-6">{p.earlyBird.subtitle}</p>

              <div className="mb-2">
                <span className="text-5xl font-black">{p.earlyBird.price}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-inn-orange/30 rounded-full mb-6">
                <Tag className="w-3 h-3" />
                <span className="text-xs font-bold">{p.earlyBird.saving}</span>
              </div>

              <div className="space-y-3 mb-8 pt-4 border-t border-white/20">
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                  <span className="text-xs font-bold text-white/60 w-6 text-center">1</span>
                  <span className="text-sm text-white/90">{p.earlyBird.installment1}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                  <span className="text-xs font-bold text-white/60 w-6 text-center">2</span>
                  <span className="text-sm text-white/90">{p.earlyBird.installment2}</span>
                </div>
              </div>

              <a
                href="#apply"
                className="block text-center px-6 py-4 bg-white text-inn-teal font-black rounded-2xl hover:bg-inn-orange hover:text-white transition-all shadow-lg text-sm"
              >
                {p.earlyBird.cta}
              </a>
            </div>
          </div>

          {/* Regular card */}
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm lg:col-span-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full mb-4">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                {p.regular.badge}
              </span>
            </div>
            <h3 className="text-xl font-black text-inn-dark mb-1">{p.regular.title}</h3>
            <p className="text-slate-400 text-sm mb-6">{p.regular.subtitle}</p>

            <div className="mb-6">
              <span className="text-5xl font-black text-inn-dark">{p.regular.price}</span>
            </div>

            <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <span className="text-xs font-bold text-slate-400 w-6 text-center">1</span>
                <span className="text-sm text-slate-600">{p.regular.installment1}</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <span className="text-xs font-bold text-slate-400 w-6 text-center">2</span>
                <span className="text-sm text-slate-600">{p.regular.installment2}</span>
              </div>
            </div>

            <a
              href="#apply"
              className="block text-center px-6 py-4 bg-inn-dark text-white font-black rounded-2xl hover:bg-inn-teal transition-all text-sm"
            >
              {p.regular.cta}
            </a>
          </div>

          {/* Includes list */}
          <div className="bg-inn-light-grey rounded-3xl p-8 border border-slate-100 lg:col-span-1">
            <h3 className="font-black text-inn-dark text-base mb-5">{p.includes}</h3>
            <ul className="space-y-3">
              {p.includesList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-inn-teal shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-200">
              <p className="text-xs text-slate-400 italic">{p.franceExtra}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
