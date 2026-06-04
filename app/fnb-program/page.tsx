"use client";

import Image from "next/image";
import { CheckCircle, Clock, Monitor, Users, MapPin, Award, Zap, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/contexts/LanguageContext";

export default function FnbProgramPage() {
  const { t } = useLang();
  const f = t.fnb;

  const curriculum = [
    { cat: f.catManagement, color: "bg-inn-teal/10 text-inn-teal border-inn-teal/20", courses: f.managementCourses },
    { cat: f.catHR, color: "bg-purple-50 text-purple-700 border-purple-200", courses: f.hrCourses },
    { cat: f.catFB, color: "bg-red-50 text-red-700 border-red-200", courses: f.fbCourses },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[620px] flex items-center pt-20">
        {/* Mobile portrait image */}
        <Image
          src="/hero-mobile.jpg"
          alt="F&B Management Program"
          fill
          className="object-cover object-top lg:hidden"
          priority
        />
        {/* Desktop landscape image */}
        <Image
          src="/fnb-hero.jpg"
          alt="F&B Management Program"
          fill
          className="object-cover object-center hidden lg:block"
          priority
        />
        {/* Mobile: gradient bottom-heavy so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-inn-dark/40 via-inn-dark/60 to-inn-dark/90 lg:hidden" />
        {/* Desktop: gradient left→right, dark left for text, transparent right for face */}
        <div className="absolute inset-0 bg-gradient-to-r from-inn-dark/95 via-inn-dark/55 to-inn-dark/10 hidden lg:block" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="w-full lg:max-w-[55%]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange rounded-full text-white text-sm font-bold mb-6">
              {f.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {f.title}
            </h1>
            <p className="text-white/85 text-lg mb-4 leading-relaxed">{f.desc1}</p>
            <p className="text-white/70 text-base mb-10 leading-relaxed">{f.desc2}</p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                <Clock className="w-4 h-4 text-inn-orange" />
                <span className="text-white text-sm font-semibold">{f.totalHours}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                <MapPin className="w-4 h-4 text-inn-orange" />
                <span className="text-white text-sm font-semibold">{f.startLabel}: {f.startVal}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                <Award className="w-4 h-4 text-inn-orange" />
                <span className="text-white text-sm font-semibold">{f.durationLabel}: {f.durationVal}</span>
              </div>
            </div>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-inn-orange hover:bg-inn-orange-dark text-white font-black rounded-2xl transition-all shadow-lg text-sm"
            >
              {f.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Program overview */}
      <section className="py-16 bg-inn-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {/* Online */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-inn-teal/10 flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5 text-inn-teal" />
                </div>
                <span className="font-black text-inn-dark text-base">Online</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{f.onlineHours}</p>
            </div>

            {/* In-person */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-inn-orange/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-inn-orange" />
                </div>
                <span className="font-black text-inn-dark text-base">Masterclasses</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">{f.inPersonHours}</p>
            </div>
          </div>

          {/* Venue image + 4 Masterclasses */}
          <div className="grid lg:grid-cols-5 gap-4">
            {/* Browns venue photo */}
            <div className="relative rounded-2xl overflow-hidden lg:col-span-2 h-52 lg:h-auto">
              <img
                src="/masterclasses/Aluma-Athens-Roof-Top.jpg"
                alt="Brown Athens"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inn-dark/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-black text-sm">Brown Athens</p>
                <p className="text-white/70 text-xs">Bar & Restaurant Management</p>
              </div>
            </div>
            {/* 4 masterclass cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {f.masterclassList.map((mc: { title: string; desc: string }, i: number) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-inn-orange/10 flex items-center justify-center mb-3">
                    <span className="text-inn-orange font-black text-sm">{i + 1}</span>
                  </div>
                  <p className="font-bold text-inn-dark text-sm leading-snug mb-1">{mc.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{mc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/10 rounded-full text-inn-orange text-sm font-semibold mb-4">
              {f.currTag}
            </div>
            <h2 className="text-3xl font-black text-inn-dark">{f.currTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {curriculum.map(({ cat, color, courses }) => (
              <div key={cat} className="bg-inn-light-grey rounded-2xl p-6 border border-slate-100">
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border mb-5 ${color}`}>
                  {cat}
                </div>
                <ul className="space-y-3">
                  {courses.map((course: string) => (
                    <li key={course} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-inn-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 leading-snug">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-inn-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/10 rounded-full text-inn-orange text-sm font-semibold mb-4">
              {f.pricingTag}
            </div>
            <h2 className="text-3xl font-black text-inn-dark">{f.pricingTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Early Bird */}
            <div className="relative bg-gradient-to-br from-inn-teal to-inn-teal-dark rounded-3xl p-8 shadow-2xl text-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1.5 px-4 py-2 bg-inn-orange rounded-full shadow-lg">
                  <Zap className="w-3.5 h-3.5 text-white" />
                  <span className="text-white text-xs font-black">{f.ebBadge}</span>
                </div>
              </div>
              <div className="pt-4">
                <div className="mb-2">
                  <span className="text-5xl font-black">{f.ebPrice}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-inn-orange/30 rounded-full mb-6">
                  <Tag className="w-3 h-3" />
                  <span className="text-xs font-bold">{f.ebSaving}</span>
                </div>
                <div className="space-y-3 mb-8 pt-4 border-t border-white/20">
                  {[f.ebInst1, f.ebInst2, f.ebInst3].map((inst, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                      <span className="text-xs font-bold text-white/60 w-6 text-center">{i + 1}</span>
                      <span className="text-sm text-white/90">{inst}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#apply"
                  className="block text-center px-6 py-4 bg-white text-inn-teal font-black rounded-2xl hover:bg-inn-orange hover:text-white transition-all shadow-lg text-sm"
                >
                  {f.ebCta}
                </a>
              </div>
            </div>

            {/* Regular */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full mb-4">
                <span className="text-xs font-bold text-slate-600">{f.regBadge}</span>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-black text-inn-dark">{f.regPrice}</span>
              </div>
              <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                {[f.regInst1, f.regInst2, f.regInst3].map((inst, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                    <span className="text-xs font-bold text-slate-400 w-6 text-center">{i + 1}</span>
                    <span className="text-sm text-slate-600">{inst}</span>
                  </div>
                ))}
              </div>
              <a
                href="#apply"
                className="block text-center px-6 py-4 bg-inn-dark text-white font-black rounded-2xl hover:bg-inn-teal transition-all text-sm"
              >
                {f.regCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-teal/10 rounded-full text-inn-teal text-sm font-semibold mb-6">
            {f.certTag}
          </div>
          <h2 className="text-2xl font-black text-inn-dark mb-6">{f.certTitle}</h2>
          <ul className="space-y-4 mb-8">
            {f.certBodies.map((body: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-inn-teal shrink-0 mt-0.5" />
                <span className="text-slate-700 text-base leading-relaxed">{body}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-sm text-slate-500 bg-inn-light-grey rounded-xl px-4 py-3">
            <span className="text-inn-orange font-bold shrink-0">★</span>
            <span>{f.masterclassSchedule}</span>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-16 bg-gradient-to-br from-inn-teal to-inn-teal-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
              {f.applyTag}
            </div>
            <h2 className="text-3xl font-black text-white mb-3">{f.applyTitle}</h2>
            <p className="text-white/75 text-base">{f.applySubtitle}</p>
          </div>
          <div className="max-w-lg mx-auto">
            <ContactForm
              variant="section"
              headerOverrides={{
                title: f.formTitle,
                subtitle: f.formSubtitle,
                start: f.formStart,
                seats: f.formSeats,
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
