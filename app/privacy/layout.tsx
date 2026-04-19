import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου | Inn Academy",
  description:
    "Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων της ιστοσελίδας innacademy.gr.",
  alternates: {
    canonical: "https://innacademy.gr/privacy",
    languages: {
      "el": "https://innacademy.gr/privacy",
      "en": "https://innacademy.gr/privacy",
      "fr": "https://innacademy.gr/privacy",
      "x-default": "https://innacademy.gr/privacy",
    },
  },
  openGraph: {
    title: "Πολιτική Απορρήτου | Inn Academy",
    description:
      "Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων της ιστοσελίδας innacademy.gr.",
    type: "website",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
