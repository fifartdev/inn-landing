"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Monitor, Building2, Plane, Briefcase, Award, Globe, Clock, Calendar, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6" />,
  Building: <Building2 className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

const highlightColors = [
  "bg-inn-teal text-white",
  "bg-inn-orange text-white",
  "bg-purple-600 text-white",
  "bg-emerald-600 text-white",
  "bg-inn-teal text-white",
  "bg-inn-orange text-white",
];

export default function ProgramHighlights() {
  const { t } = useLang();
  const p = t.program;

  return (
    <section id="program" className="py-20 lg:py-28 bg-inn-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold mb-4">
            {p.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">
            {p.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{p.subtitle}</p>
        </div>

        {/* Key info banner */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {[
            { icon: <Clock className="w-5 h-5 text-inn-teal" />, label: p.duration, val: p.durationVal },
            { icon: <Calendar className="w-5 h-5 text-inn-orange" />, label: p.start, val: p.startVal },
            { icon: <Monitor className="w-5 h-5 text-inn-teal" />, label: p.mode, val: p.modeVal },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-inn-light-grey flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="font-bold text-inn-dark text-sm mt-0.5">
                  {item.val}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {p.highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover group"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${highlightColors[i]}`}
              >
                {iconMap[h.icon]}
              </div>
              <h3 className="font-bold text-inn-dark mb-2 text-base group-hover:text-inn-teal transition-colors">
                {h.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-inn-teal/10 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle className="w-5 h-5 text-inn-teal" />
            </div>
            <div>
              <h3 className="font-bold text-inn-dark text-lg mb-4">
                {p.requirements}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-inn-teal/10 text-inn-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <span className="text-slate-600 text-sm leading-relaxed">{p.req1}</span>
                </div>
                <div className="flex items-center gap-3 pl-9">
                  <span className="text-inn-orange font-bold text-sm uppercase tracking-wide">{p.reqOr}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-inn-teal/10 text-inn-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <span className="text-slate-600 text-sm leading-relaxed">{p.req2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
