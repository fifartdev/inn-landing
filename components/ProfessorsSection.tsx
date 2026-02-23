"use client";

import { useLang } from "@/contexts/LanguageContext";
import { professorsData, categoryColors } from "@/lib/translations";

export default function ProfessorsSection() {
  const { t } = useLang();
  const p = t.professors;

  return (
    <section id="professors" className="py-20 lg:py-28 bg-inn-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold mb-4">
            {p.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">
            {p.title}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">{p.subtitle}</p>
        </div>

        {/* Professor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {professorsData.map((prof, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm card-hover group text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-inn-teal/20 to-inn-teal/5 border-2 border-inn-teal/10 group-hover:border-inn-teal/30 transition-colors">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(prof.name)}&background=0a7ea4&color=fff&size=80&font-size=0.4&bold=true`}
                  alt={prof.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-bold text-inn-dark text-sm leading-tight mb-2 group-hover:text-inn-teal transition-colors">
                {prof.name}
              </h3>

              {/* Subject */}
              <p className="text-xs text-slate-500 leading-snug mb-3">{prof.subject}</p>

              {/* Category pill */}
              <span
                className={`category-pill text-[10px] ${
                  (categoryColors as Record<string, string>)[prof.category] ||
                  "bg-slate-100 text-slate-600 border-slate-200"
                }`}
              >
                {prof.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
