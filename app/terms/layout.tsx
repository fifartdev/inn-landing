import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Όροι Χρήσης | Inn Academy",
  description:
    "Όροι και προϋποθέσεις χρήσης της ιστοσελίδας και των υπηρεσιών της Inn Academy.",
  alternates: {
    canonical: "https://innacademy.gr/terms",
    languages: {
      "el": "https://innacademy.gr/terms",
      "en": "https://innacademy.gr/terms",
      "fr": "https://innacademy.gr/terms",
      "x-default": "https://innacademy.gr/terms",
    },
  },
  openGraph: {
    title: "Όροι Χρήσης | Inn Academy",
    description:
      "Όροι και προϋποθέσεις χρήσης της ιστοσελίδας και των υπηρεσιών της Inn Academy.",
    type: "website",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
