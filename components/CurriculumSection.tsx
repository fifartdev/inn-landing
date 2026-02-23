"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { courseData, categoryColors } from "@/lib/translations";
import { BookOpen, User } from "lucide-react";

const categoryOrder = ["MANAGEMENT", "HR", "MARKETING", "SALES", "F&B", "FRONT OFFICE", "HOUSEKEEPING"];

export default function CurriculumSection() {
  const { t } = useLang();
  const c = t.curriculum;
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", ...categoryOrder];

  const filtered =
    activeCategory === "ALL"
      ? courseData
      : courseData.filter((course) => course.category === activeCategory);

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-inn-orange/10 rounded-full text-inn-orange text-sm font-semibold mb-4">
            {c.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-inn-dark mb-3">
            {c.title}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">{c.subtitle}</p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-inn-teal text-white border-inn-teal shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-inn-teal/50 hover:text-inn-teal"
              }`}
            >
              {cat === "ALL"
                ? "Όλα τα Μαθήματα"
                : (c.categories as Record<string, string>)[cat] || cat}
            </button>
          ))}
        </div>

        {/* Courses table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-inn-dark">
            <div className="col-span-1 text-xs font-semibold text-white/50 uppercase tracking-wider">
              #
            </div>
            <div className="col-span-3 text-xs font-semibold text-white/50 uppercase tracking-wider hidden sm:block">
              Κατηγορία
            </div>
            <div className="col-span-9 sm:col-span-5 text-xs font-semibold text-white/50 uppercase tracking-wider">
              {c.course}
            </div>
            <div className="col-span-2 hidden lg:block text-xs font-semibold text-white/50 uppercase tracking-wider">
              {c.instructor}
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-50">
            {filtered.map((course, i) => (
              <div
                key={course.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-inn-light-grey transition-colors group items-center"
              >
                <div className="col-span-1 text-sm font-bold text-slate-300">
                  {course.id}
                </div>
                <div className="col-span-3 hidden sm:block">
                  <span
                    className={`category-pill ${
                      (categoryColors as Record<string, string>)[course.category] ||
                      "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    {(c.categories as Record<string, string>)[course.category] ||
                      course.category}
                  </span>
                </div>
                <div className="col-span-9 sm:col-span-5">
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-inn-teal/40 mt-0.5 shrink-0 group-hover:text-inn-teal transition-colors" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-inn-teal transition-colors leading-snug">
                      {course.title}
                    </span>
                  </div>
                </div>
                <div className="col-span-2 hidden lg:flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-inn-teal/10 flex items-center justify-center shrink-0">
                    <User className="w-3 h-3 text-inn-teal" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {course.instructor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Count badge */}
        <div className="text-center mt-6">
          <span className="text-sm text-slate-400">
            {filtered.length} μαθήματα
          </span>
        </div>
      </div>
    </section>
  );
}
