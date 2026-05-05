import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Εκπαιδευτικό Ταξίδι στη Γαλλία | Inn Academy",
  description:
    "Εκπαιδευτική επίσκεψη στα κορυφαία ξενοδοχεία και σχολές hospitality του Παρισιού — μια μοναδική εμπειρία για τους σπουδαστές της Inn Academy.",
  alternates: {
    canonical: "https://www.innacademy.gr/france",
    languages: {
      "el": "https://www.innacademy.gr/france",
      "en": "https://www.innacademy.gr/france",
      "fr": "https://www.innacademy.gr/france",
      "x-default": "https://www.innacademy.gr/france",
    },
  },
  openGraph: {
    title: "Εκπαιδευτικό Ταξίδι στη Γαλλία | Inn Academy",
    description:
      "Εκπαιδευτική επίσκεψη στα κορυφαία ξενοδοχεία και σχολές hospitality του Παρισιού — μια μοναδική εμπειρία για τους σπουδαστές της Inn Academy.",
    url: "https://www.innacademy.gr/france",
    type: "website",
    images: [{ url: "/innacademyfeatured.jpg", width: 1080, height: 1080, alt: "Inn Academy — Diploma in Hotel Management" }],
  },
};

export default function FranceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
