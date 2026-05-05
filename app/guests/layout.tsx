import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Speakers | Inn Academy — Diploma in Hotel Management",
  description:
    "Κορυφαίοι επαγγελματίες του κλάδου μοιράζονται την εμπειρία τους με τους σπουδαστές μας. Masterclasses από C-level στελέχη ξενοδοχειακών ομίλων.",
  alternates: {
    canonical: "https://www.innacademy.gr/guests",
    languages: {
      "el": "https://www.innacademy.gr/guests",
      "en": "https://www.innacademy.gr/guests",
      "fr": "https://www.innacademy.gr/guests",
      "x-default": "https://www.innacademy.gr/guests",
    },
  },
  openGraph: {
    title: "Guest Speakers | Inn Academy — Diploma in Hotel Management",
    description:
      "Κορυφαίοι επαγγελματίες του κλάδου μοιράζονται την εμπειρία τους με τους σπουδαστές μας. Masterclasses από C-level στελέχη ξενοδοχειακών ομίλων.",
    type: "website",
  },
};

export default function GuestsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
