import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Εκπαιδευτικό Ταξίδι στη Γαλλία | Inn Academy",
  description:
    "Εκπαιδευτική επίσκεψη στα κορυφαία ξενοδοχεία και σχολές hospitality του Παρισιού — μια μοναδική εμπειρία για τους σπουδαστές της Inn Academy.",
  alternates: {
    canonical: "https://innacademy.gr/france",
    languages: {
      "el": "https://innacademy.gr/france",
      "en": "https://innacademy.gr/france",
      "fr": "https://innacademy.gr/france",
      "x-default": "https://innacademy.gr/france",
    },
  },
  openGraph: {
    title: "Εκπαιδευτικό Ταξίδι στη Γαλλία | Inn Academy",
    description:
      "Εκπαιδευτική επίσκεψη στα κορυφαία ξενοδοχεία και σχολές hospitality του Παρισιού — μια μοναδική εμπειρία για τους σπουδαστές της Inn Academy.",
    type: "website",
  },
};

export default function FranceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
