import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Συχνές Ερωτήσεις | Inn Academy — Diploma in Hotel Management",
  description:
    "Απαντήσεις για το Diploma in Hotel Management: διάρκεια, κόστος, πιστοποιήσεις ACTA & Paris Education, masterclasses και επαγγελματικές προοπτικές.",
  alternates: {
    canonical: "https://www.innacademy.gr/faq",
    languages: {
      "el": "https://www.innacademy.gr/faq",
      "en": "https://www.innacademy.gr/faq",
      "fr": "https://www.innacademy.gr/faq",
      "x-default": "https://www.innacademy.gr/faq",
    },
  },
  openGraph: {
    title: "Συχνές Ερωτήσεις | Inn Academy — Diploma in Hotel Management",
    description:
      "Απαντήσεις για το Diploma in Hotel Management: διάρκεια, κόστος, πιστοποιήσεις ACTA & Paris Education, masterclasses και επαγγελματικές προοπτικές.",
    type: "website",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
