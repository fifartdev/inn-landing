import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Καθηγητές | Inn Academy — Diploma in Hotel Management",
  description:
    "Γνωρίστε το διδακτικό μας team — επαγγελματίες και ακαδημαϊκοί με δεκαετίες εμπειρίας σε 5★ ξενοδοχεία και πολυεθνικές εταιρείες φιλοξενίας.",
  alternates: {
    canonical: "https://www.innacademy.gr/professors",
    languages: {
      "el": "https://www.innacademy.gr/professors",
      "en": "https://www.innacademy.gr/professors",
      "fr": "https://www.innacademy.gr/professors",
      "x-default": "https://www.innacademy.gr/professors",
    },
  },
  openGraph: {
    title: "Καθηγητές | Inn Academy — Diploma in Hotel Management",
    description:
      "Γνωρίστε το διδακτικό μας team — επαγγελματίες και ακαδημαϊκοί με δεκαετίες εμπειρίας σε 5★ ξενοδοχεία και πολυεθνικές εταιρείες φιλοξενίας.",
    url: "https://www.innacademy.gr/professors",
    type: "website",
    images: [{ url: "/innacademyfeatured.jpg", width: 1200, height: 627, alt: "Inn Academy — Diploma in Hotel Management" }],
  },
};

export default function ProfessorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
