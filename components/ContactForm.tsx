"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { Send, Calendar, Users, Shield, CheckCircle } from "lucide-react";

export default function ContactForm({ variant = "sticky" }: { variant?: "sticky" | "section" }) {
  const { t } = useLang();
  const f = t.form;

  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const isSection = variant === "section";

  return (
    <div
      id="apply"
      className={`bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden ${
        isSection ? "max-w-xl mx-auto" : ""
      }`}
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-inn-teal to-inn-teal-dark p-6">
        <h3 className="text-xl font-black text-white mb-1">{f.title}</h3>
        <p className="text-white/75 text-sm">{f.subtitle}</p>

        {/* Quick stats */}
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-inn-orange" />
            <span className="text-xs text-white/80 font-medium">{f.start}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-inn-orange" />
            <span className="text-xs text-white/80 font-medium">{f.seats}</span>
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="p-6">
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="font-bold text-inn-dark text-base mb-2">
              {f.success}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-inn-teal text-sm font-medium hover:underline mt-2"
            >
              Νέα αίτηση
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                {f.name} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={f.namePlaceholder}
                className="w-full px-4 py-3 bg-inn-light-grey border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:border-inn-teal focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                {f.phone} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={f.phonePlaceholder}
                className="w-full px-4 py-3 bg-inn-light-grey border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:border-inn-teal focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                {f.email} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={f.emailPlaceholder}
                className="w-full px-4 py-3 bg-inn-light-grey border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:border-inn-teal focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-inn-orange hover:bg-inn-orange-dark disabled:opacity-70 text-white font-black rounded-2xl transition-all shadow-sm hover:shadow-md text-sm"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {f.submitting}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {f.submit}
                </>
              )}
            </button>

            <div className="flex items-start gap-2 pt-1">
              <Shield className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400">{f.privacy}</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
