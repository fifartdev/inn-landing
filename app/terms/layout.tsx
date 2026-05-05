import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Όροι Χρήσης | Inn Academy",
  description:
    "Όροι και προϋποθέσεις χρήσης της ιστοσελίδας και των υπηρεσιών της Inn Academy.",
  alternates: {
    canonical: "https://www.innacademy.gr/terms",
    languages: {
      "el": "https://www.innacademy.gr/terms",
      "en": "https://www.innacademy.gr/terms",
      "fr": "https://www.innacademy.gr/terms",
      "x-default": "https://www.innacademy.gr/terms",
    },
  },
  openGraph: {
    title: "Όροι Χρήσης | Inn Academy",
    description:
      "Όροι και προϋποθέσεις χρήσης της ιστοσελίδας και των υπηρεσιών της Inn Academy.",
    url: "https://www.innacademy.gr/terms",
    type: "website",
    images: [{ url: "/innacademyfeatured.jpg", width: 1200, height: 627, alt: "Inn Academy — Diploma in Hotel Management" }],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
