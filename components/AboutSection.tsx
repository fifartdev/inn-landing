"use client";

import { useLang } from "@/contexts/LanguageContext";
import { ArrowRight, Users, Building2, Globe, Award } from "lucide-react";

export default function AboutSection() {
  const { t } = useLang();
  const a = t.about;

  const stats = [
    { val: a.stat1, label: a.stat1label, icon: <Building2 className="w-5 h-5" /> },
    { val: a.stat2, label: a.stat2label, icon: <Award className="w-5 h-5" /> },
    { val: a.stat3, label: a.stat3label, icon: <Globe className="w-5 h-5" /> },
    { val: a.stat4, label: a.stat4label, icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold mb-4">
              {a.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-2 leading-tight">
              {a.title}
            </h2>
            <p className="text-lg text-inn-orange font-semibold mb-6">
              {a.subtitle}
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
            </div>

            <div className="mt-6 p-4 bg-inn-teal/5 border-l-4 border-inn-teal rounded-r-xl">
              <p className="font-bold text-inn-teal italic text-lg">
                &ldquo;InnAcademy – {a.motto}&rdquo;
              </p>
            </div>

            {/* Innjobs connection */}
            <div className="mt-8 flex items-center gap-4 p-5 bg-inn-dark rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-inn-teal flex items-center justify-center shrink-0">
                <span className="text-white font-black text-xl">ij</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  Powered by <span className="text-inn-orange">Innjobs</span>
                </p>
                <p className="text-white/60 text-xs mt-0.5">
                  Η #1 πλατφόρμα εργασίας για τον ξενοδοχειακό κλάδο
                </p>
              </div>
              <a
                href="https://innjobs.net"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-inn-orange hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                innjobs.net
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Stats + Image */}
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&fit=crop"
                alt="Hotel manager"
                className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="text-3xl font-black text-inn-teal">20+</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  Συνεργαζόμενα Hotels
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-inn-orange rounded-2xl shadow-xl p-5 text-white">
                <div className="text-3xl font-black">5★</div>
                <div className="text-xs font-medium mt-0.5 text-white/80">
                  Masterclass Hotels
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="p-5 bg-inn-light-grey rounded-2xl border border-slate-100 hover:border-inn-teal/30 transition-colors group"
                >
                  <div className="text-inn-teal/60 mb-2 group-hover:text-inn-teal transition-colors">
                    {s.icon}
                  </div>
                  <div className="text-2xl font-black text-inn-dark">
                    {s.val}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
