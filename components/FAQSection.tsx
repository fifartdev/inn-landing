"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const { t } = useLang();
  const f = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold mb-4">
            {f.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">
            {f.title}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">{f.subtitle}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {f.items.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all overflow-hidden ${
                openIndex === i
                  ? "border-inn-teal/30 shadow-sm"
                  : "border-slate-100 hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 transition-colors ${
                      openIndex === i
                        ? "bg-inn-teal text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`font-semibold text-sm leading-snug transition-colors ${
                      openIndex === i ? "text-inn-teal" : "text-slate-700"
                    }`}
                  >
                    {item.q}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 mt-0.5 transition-transform text-slate-400 ${
                    openIndex === i ? "rotate-180 text-inn-teal" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="pl-9">
                    <div className="h-px bg-slate-100 mb-4" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 bg-inn-light-grey rounded-3xl border border-slate-100">
          <p className="text-slate-600 text-sm mb-4">
            Δεν βρήκες απάντηση στην ερώτησή σου;
          </p>
          <a
            href="#apply"
            className="inline-flex items-center px-6 py-3 bg-inn-teal text-white font-bold rounded-xl text-sm hover:bg-inn-teal-dark transition-colors"
          >
            Επικοινώνησε μαζί μας
          </a>
        </div>
      </div>
    </section>
  );
}
