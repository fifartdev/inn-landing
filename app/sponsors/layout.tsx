import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Χορηγοί & Συνεργάτες | Inn Academy",
  description:
    "Οι εταιρείες και οργανισμοί που στηρίζουν το πρόγραμμα Diploma in Hotel Management της Inn Academy.",
  alternates: {
    canonical: "https://www.innacademy.gr/sponsors",
    languages: {
      "el": "https://www.innacademy.gr/sponsors",
      "en": "https://www.innacademy.gr/sponsors",
      "fr": "https://www.innacademy.gr/sponsors",
      "x-default": "https://www.innacademy.gr/sponsors",
    },
  },
  openGraph: {
    title: "Χορηγοί & Συνεργάτες | Inn Academy",
    description:
      "Οι εταιρείες και οργανισμοί που στηρίζουν το πρόγραμμα Diploma in Hotel Management της Inn Academy.",
    type: "website",
  },
};

export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
