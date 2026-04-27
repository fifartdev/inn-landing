"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function ThankYouPage() {
  const { t } = useLang();
  const ty = t.thankYou;

  return (
    <main className="min-h-screen bg-inn-light-grey flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl max-w-md w-full p-10 text-center">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>

        <h1 className="text-2xl font-black text-inn-dark mb-3">{ty.title}</h1>
        <p className="text-inn-teal font-semibold mb-2">{ty.subtitle}</p>
        <p className="text-slate-500 text-sm mb-8">{ty.message}</p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-inn-teal hover:bg-inn-teal-dark text-white font-bold rounded-2xl transition-colors text-sm"
        >
          {ty.back}
        </Link>
      </div>
    </main>
  );
}
