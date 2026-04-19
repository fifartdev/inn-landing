import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Καθηγητές | Inn Academy — Diploma in Hotel Management",
  description:
    "Γνωρίστε το διδακτικό μας team — επαγγελματίες και ακαδημαϊκοί με δεκαετίες εμπειρίας σε 5★ ξενοδοχεία και πολυεθνικές εταιρείες φιλοξενίας.",
  alternates: {
    canonical: "https://innacademy.gr/professors",
    languages: {
      "el": "https://innacademy.gr/professors",
      "en": "https://innacademy.gr/professors",
      "fr": "https://innacademy.gr/professors",
      "x-default": "https://innacademy.gr/professors",
    },
  },
  openGraph: {
    title: "Καθηγητές | Inn Academy — Diploma in Hotel Management",
    description:
      "Γνωρίστε το διδακτικό μας team — επαγγελματίες και ακαδημαϊκοί με δεκαετίες εμπειρίας σε 5★ ξενοδοχεία και πολυεθνικές εταιρείες φιλοξενίας.",
    type: "website",
  },
};

export default function ProfessorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
