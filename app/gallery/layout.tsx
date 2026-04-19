import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Inn Academy — Diploma in Hotel Management",
  description:
    "Φωτογραφίες από masterclasses, events και εκπαιδευτικές δραστηριότητες της Inn Academy.",
  alternates: {
    canonical: "https://innacademy.gr/gallery",
    languages: {
      "el": "https://innacademy.gr/gallery",
      "en": "https://innacademy.gr/gallery",
      "fr": "https://innacademy.gr/gallery",
      "x-default": "https://innacademy.gr/gallery",
    },
  },
  openGraph: {
    title: "Gallery | Inn Academy — Diploma in Hotel Management",
    description:
      "Φωτογραφίες από masterclasses, events και εκπαιδευτικές δραστηριότητες της Inn Academy.",
    type: "website",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
