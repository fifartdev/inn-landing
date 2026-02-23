"use client";

import { useLang } from "@/contexts/LanguageContext";
import { Shield, Award, GraduationCap, CheckCircle } from "lucide-react";

export default function CertificationsBar() {
  const { t } = useLang();
  const c = t.certBar;

  const items = [
    {
      icon: <Shield className="w-5 h-5 text-inn-teal" />,
      label: c.acta,
      sub: "Αναγνωρισμένη Πιστοποίηση",
    },
    {
      icon: <Award className="w-5 h-5 text-inn-orange" />,
      label: c.paris,
      sub: "Institut Paris Education",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-inn-teal" />,
      label: c.kdvm,
      sub: "Κέντρο Δια Βίου Μάθησης",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-inn-orange" />,
      label: c.graduation,
      sub: "Τελετή Αποφοίτησης στο Παρίσι",
    },
  ];

  return (
    <div className="bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest hidden sm:block">
            {c.title}
          </span>
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:block w-px h-8 bg-slate-200" />
              )}
              <div className="flex items-center gap-2">
                {item.icon}
                <div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight">
                    {item.sub}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
