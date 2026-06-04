"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle, Clock, Monitor, MapPin, Award, Zap, Tag, Star, Calendar, Building2, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/contexts/LanguageContext";

const FNB_CATS = ["ALL", "MANAGEMENT", "HR", "F&B"] as const;
type FnbCat = typeof FNB_CATS[number];

export default function FnbProgramPage() {
  const { t } = useLang();
  const f = t.fnb;
  const [activeCat, setActiveCat] = useState<FnbCat>("ALL");

  const allCourses = [
    ...f.managementCourses.map((title: string, i: number) => ({ id: i + 1, cat: "MANAGEMENT" as FnbCat, title })),
    ...f.hrCourses.map((title: string, i: number) => ({ id: f.managementCourses.length + i + 1, cat: "HR" as FnbCat, title })),
    ...f.fbCourses.map((title: string, i: number) => ({ id: f.managementCourses.length + f.hrCourses.length + i + 1, cat: "F&B" as FnbCat, title })),
  ];

  const filtered = activeCat === "ALL" ? allCourses : allCourses.filter((c) => c.cat === activeCat);

  const catLabel: Record<FnbCat, string> = {
    ALL: f.currAll ?? "Όλα",
    MANAGEMENT: f.catManagement,
    HR: f.catHR,
    "F&B": f.catFB,
  };

  const catPillClass: Record<string, string> = {
    MANAGEMENT: "bg-inn-teal/10 text-inn-teal border border-inn-teal/20",
    HR: "bg-purple-50 text-purple-700 border border-purple-200",
    "F&B": "bg-red-50 text-red-700 border border-red-200",
  };

  const highlights = [
    { icon: <Monitor className="w-6 h-6" />, color: "bg-inn-teal text-white", title: f.onlineHours, desc: "" },
    { icon: <Building2 className="w-6 h-6" />, color: "bg-inn-orange text-white", title: f.inPersonHours, desc: "Brown Athens — Bar & Restaurant Management" },
    { icon: <Award className="w-6 h-6" />, color: "bg-purple-600 text-white", title: f.certBodies[0], desc: "" },
    { icon: <Award className="w-6 h-6" />, color: "bg-emerald-600 text-white", title: f.certBodies[1], desc: "" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[620px] flex items-center pt-20">
        <Image src="/hero-mobile.jpg" alt="F&B Management Program" fill className="object-cover object-top lg:hidden" priority />
        <Image src="/fnb-hero.jpg" alt="F&B Management Program" fill className="object-cover object-center hidden lg:block" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-inn-dark/40 via-inn-dark/60 to-inn-dark/90 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-inn-dark/95 via-inn-dark/55 to-inn-dark/10 hidden lg:block" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="w-full lg:max-w-[55%]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange rounded-full text-white text-sm font-bold mb-6">{f.badge}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">{f.title}</h1>
            <p className="text-white/85 text-lg mb-4 leading-relaxed">{f.desc1}</p>
            <p className="text-white/70 text-base mb-8 leading-relaxed">{f.desc2}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                <Clock className="w-3.5 h-3.5" />{f.totalHours}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                <MapPin className="w-3.5 h-3.5" />{f.startLabel}: {f.startVal}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-inn-orange/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                <Award className="w-3.5 h-3.5" />{f.durationLabel}: {f.durationVal}
              </span>
            </div>
            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 bg-inn-orange hover:bg-inn-orange-dark text-white font-black rounded-2xl transition-all shadow-lg text-sm">{f.cta}</a>
          </div>
        </div>
      </section>

      {/* ── Two-column grid ── */}
      <div id="apply" className="scroll-mt-20" />
      <div className="lg:grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] lg:items-start">

        <div className="min-w-0">

          {/* ── Program (same design as ProgramHighlights) ── */}
          <section id="program" className="py-20 lg:py-28 bg-inn-light-grey">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold mb-4">{f.programTag}</div>
                <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">{f.programTitle}</h2>
                <p className="text-lg text-slate-500 max-w-xl mx-auto">{f.programSubtitle}</p>
              </div>

              {/* Key info banner */}
              <div className="grid sm:grid-cols-3 gap-4 mb-14">
                {[
                  { icon: <Clock className="w-5 h-5 text-inn-teal" />, label: f.durationLabel, val: f.durationVal },
                  { icon: <Calendar className="w-5 h-5 text-inn-orange" />, label: f.startLabel, val: f.startVal },
                  { icon: <Monitor className="w-5 h-5 text-inn-teal" />, label: f.mode, val: f.modeVal },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-inn-light-grey flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium tracking-wide">{item.label}</div>
                      <div className="font-bold text-inn-dark text-sm mt-0.5">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((h, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover group">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${h.color}`}>{h.icon}</div>
                    <h3 className="font-bold text-inn-dark mb-2 text-base group-hover:text-inn-teal transition-colors">{h.title}</h3>
                    {h.desc && <p className="text-sm text-slate-500 leading-relaxed">{h.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Curriculum / Lessons ── */}
          <section className="py-20 lg:py-28 bg-white">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/10 rounded-full text-inn-orange text-sm font-semibold mb-4">{f.currTag}</div>
                <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">{f.currTitle}</h2>
              </div>

              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {FNB_CATS.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCat(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                      activeCat === cat
                        ? "bg-inn-teal text-white border-inn-teal shadow-sm"
                        : "bg-white text-slate-600 border-slate-200 hover:border-inn-teal/50 hover:text-inn-teal"
                    }`}
                  >
                    {catLabel[cat]}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-inn-dark">
                  <div className="col-span-1 text-xs font-semibold text-white/50 tracking-wider">#</div>
                  <div className="col-span-3 text-xs font-semibold text-white/50 tracking-wider hidden sm:block">{f.currTag}</div>
                  <div className="col-span-9 sm:col-span-8 text-xs font-semibold text-white/50 tracking-wider">{f.currTitle}</div>
                </div>
                <div className="divide-y divide-slate-50">
                  {filtered.map((course) => (
                    <div key={course.id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-inn-light-grey transition-colors group items-center">
                      <div className="col-span-1 text-sm font-bold text-slate-300">{course.id}</div>
                      <div className="col-span-3 hidden sm:block">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-bold ${catPillClass[course.cat]}`}>
                          {catLabel[course.cat]}
                        </span>
                      </div>
                      <div className="col-span-9 sm:col-span-8">
                        <div className="flex items-start gap-2">
                          <BookOpen className="w-4 h-4 text-inn-teal/40 mt-0.5 shrink-0 group-hover:text-inn-teal transition-colors" />
                          <span className="text-sm font-medium text-slate-700 group-hover:text-inn-teal transition-colors leading-snug">{course.title}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-6">
                <span className="text-sm text-slate-400">{filtered.length} μαθήματα</span>
              </div>
            </div>
          </section>

          {/* ── Masterclasses — exact MasterclassVenues design ── */}
          <section id="venues" className="py-20 lg:py-28 bg-inn-dark overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* Header — identical to MasterclassVenues */}
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/20 rounded-full text-inn-orange text-sm font-semibold mb-4">
                  Masterclass Venues
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
                  Βιωματική Εκπαίδευση σε 5★ Ξενοδοχεία
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
                  4 Masterclasses — Bar management, mixology και service excellence
                </p>
              </div>

              {/* Venue card — same card structure as MasterclassVenues */}
              <div className="grid lg:grid-cols-1 gap-6 mb-10">
                <div className="group relative rounded-3xl overflow-hidden card-hover">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src="/masterclasses/Aluma-Athens-Roof-Top.jpg"
                      alt="Brown Athens"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-inn-dark via-inn-dark/40 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-inn-orange text-inn-orange" />
                      ))}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-inn-teal/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                        Bar & Restaurant Management
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-1.5 mb-2">
                        <MapPin className="w-4 h-4 text-inn-orange" />
                        <span className="text-inn-orange text-xs font-semibold">Athens, Greece</span>
                      </div>
                      <h3 className="text-xl font-black text-white mb-2">Brown Athens</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Bar management, mixology και service excellence σε ένα από τα κορυφαία αστικά ξενοδοχεία.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Masterclass detail cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {f.masterclassList.map((mc: { title: string; desc: string }, i: number) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <div className="w-8 h-8 rounded-xl bg-inn-orange/20 flex items-center justify-center mb-3">
                      <span className="text-inn-orange font-black text-sm">{i + 1}</span>
                    </div>
                    <p className="font-bold text-white text-sm leading-snug mb-2">{mc.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{mc.desc}</p>
                  </div>
                ))}
              </div>

              {/* Notes — same style as MasterclassVenues bottom notes */}
              <div className="mt-2 flex flex-col items-center gap-2">
                <p className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-inn-teal font-bold">★</span>
                  <span>{f.masterclassSchedule}</span>
                </p>
              </div>

              {/* Certification */}
              <div className="mt-14 pt-10 border-t border-white/10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/20 rounded-full text-inn-orange text-sm font-semibold mb-4">{f.certTag}</div>
                <h3 className="text-2xl font-black text-white mb-8">{f.certTitle}</h3>
                <ul className="flex flex-col items-center gap-4">
                  {f.certBodies.map((body: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-4 border border-white/10 text-left w-full">
                      <CheckCircle className="w-5 h-5 text-inn-teal shrink-0" />
                      <span className="text-white/80 text-sm leading-relaxed">{body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Pricing — exact PricingSection 3-column layout ── */}
          <section className="py-20 lg:py-28 bg-white">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/10 rounded-full text-inn-orange text-sm font-semibold mb-4">{f.pricingTag}</div>
                <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">{f.pricingTitle}</h2>
                <p className="text-slate-500 max-w-xl mx-auto text-base">{f.pricingSubtitle}</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Early Bird */}
                <div className="relative bg-gradient-to-br from-inn-teal to-inn-teal-dark rounded-3xl p-8 shadow-2xl text-white lg:col-span-1">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-inn-orange rounded-full shadow-lg">
                      <Zap className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-black">{f.ebBadge}</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-black mb-1">{f.ebTitle}</h3>
                    <p className="text-white/70 text-sm mb-6">{f.ebSubtitle}</p>
                    <div className="mb-2"><span className="text-5xl font-black">{f.ebPrice}</span></div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-inn-orange/30 rounded-full mb-6">
                      <Tag className="w-3 h-3" /><span className="text-xs font-bold">{f.ebSaving}</span>
                    </div>
                    <div className="space-y-3 mb-8 pt-4 border-t border-white/20">
                      {[f.ebInst1, f.ebInst2, f.ebInst3].map((inst, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                          <span className="text-xs font-bold text-white/60 w-6 text-center">{i + 1}</span>
                          <span className="text-sm text-white/90">{inst}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#apply" className="block text-center px-6 py-4 bg-white text-inn-teal font-black rounded-2xl hover:bg-inn-orange hover:text-white transition-all shadow-lg text-sm">{f.ebCta}</a>
                  </div>
                </div>

                {/* Regular */}
                <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm lg:col-span-1">
                  <div className="inline-flex px-3 py-1 bg-slate-100 rounded-full mb-4">
                    <span className="text-xs font-bold text-slate-600">{f.regBadge}</span>
                  </div>
                  <h3 className="text-xl font-black text-inn-dark mb-1">{f.regTitle}</h3>
                  <p className="text-slate-400 text-sm mb-6">{f.regSubtitle}</p>
                  <div className="mb-6"><span className="text-5xl font-black text-inn-dark">{f.regPrice}</span></div>
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    {[f.regInst1, f.regInst2, f.regInst3].map((inst, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                        <span className="text-xs font-bold text-slate-400 w-6 text-center">{i + 1}</span>
                        <span className="text-sm text-slate-600">{inst}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#apply" className="block text-center px-6 py-4 bg-inn-dark text-white font-black rounded-2xl hover:bg-inn-teal transition-all text-sm">{f.regCta}</a>
                </div>

                {/* Includes */}
                <div className="bg-inn-light-grey rounded-3xl p-8 border border-slate-100 lg:col-span-1">
                  <h3 className="font-black text-inn-dark text-base mb-5">{f.includes}</h3>
                  <ul className="space-y-3">
                    {f.includesList.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-inn-teal shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-slate-200">
                    <p className="text-xs text-slate-400 italic">{f.vatNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ── Right: sticky form ── */}
        <aside className="hidden lg:block sticky top-20 self-start px-5 pt-10 pb-10">
          <ContactForm
            variant="sticky"
            headerOverrides={{ title: f.formTitle, subtitle: f.formSubtitle, start: f.formStart, seats: f.formSeats }}
          />
        </aside>
      </div>

      {/* Mobile form */}
      <div id="apply-mobile" className="scroll-mt-20" />
      <section className="lg:hidden py-16 px-4 bg-inn-light-grey">
        <ContactForm
          variant="section"
          headerOverrides={{ title: f.formTitle, subtitle: f.formSubtitle, start: f.formStart, seats: f.formSeats }}
        />
      </section>

      <Footer />
    </main>
  );
}
