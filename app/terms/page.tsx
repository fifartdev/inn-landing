"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/contexts/LanguageContext";

export default function TermsPage() {
  const { t } = useLang();
  const p = t.terms;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-inn-dark mb-2">{p.title}</h1>
          <p className="text-sm text-slate-400 mb-12">{p.lastUpdated}</p>

          <div className="space-y-10">
            {p.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-base font-bold text-inn-dark mb-2">{section.heading}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
