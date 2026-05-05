import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου | Inn Academy",
  description:
    "Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων της ιστοσελίδας innacademy.gr.",
  alternates: {
    canonical: "https://www.innacademy.gr/privacy",
    languages: {
      "el": "https://www.innacademy.gr/privacy",
      "en": "https://www.innacademy.gr/privacy",
      "fr": "https://www.innacademy.gr/privacy",
      "x-default": "https://www.innacademy.gr/privacy",
    },
  },
  openGraph: {
    title: "Πολιτική Απορρήτου | Inn Academy",
    description:
      "Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων της ιστοσελίδας innacademy.gr.",
    url: "https://www.innacademy.gr/privacy",
    type: "website",
    images: [{ url: "/innacademyfeatured.jpg", width: 1200, height: 627, alt: "Inn Academy — Diploma in Hotel Management" }],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
