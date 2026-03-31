"use client";

import { useLang } from "@/contexts/LanguageContext";
import { professorsData, categoryColors } from "@/lib/translations";

export default function ProfessorsSection() {
  const { t, lang } = useLang();
  const p = t.professors;

  const regularProfessors = professorsData
    .map((prof, i) => ({ prof, i }))
    .filter(({ prof }) => !prof.guestSpeaker);

  const renderCard = ({ prof, i }: { prof: typeof professorsData[0]; i: number }) => {
    const displayName = lang === "gr" ? prof.name : prof.nameLatin;
    return (
      <a
        key={i}
        href={prof.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm card-hover group text-center block"
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-inn-teal/20 to-inn-teal/5 border-2 border-inn-teal/10 group-hover:border-inn-teal/30 transition-colors">
          <img
            src={prof.image}
            alt={displayName}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-bold text-inn-dark text-sm leading-tight mb-2 group-hover:text-inn-teal transition-colors">
          {displayName}
        </h3>

        <p className="text-xs text-slate-500 leading-snug mb-3">{p.professorSubjects[i]}</p>

        <span
          className={`category-pill text-[10px] ${
            (categoryColors as Record<string, string>)[prof.category] ||
            "bg-slate-100 text-slate-600 border-slate-200"
          }`}
        >
          {prof.category}
        </span>
      </a>
    );
  };

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {regularProfessors.map(renderCard)}
        </div>

        {/* Link to guest speakers page */}
        <div className="mt-14 text-center">
          <a
            href="/guests"
            className="inline-flex items-center gap-2 px-6 py-3 bg-inn-teal/10 hover:bg-inn-teal/20 text-inn-teal font-semibold rounded-xl transition-colors text-sm"
          >
            {p.guestTitle} →
          </a>
        </div>
      </div>
    </section>
  );
}
