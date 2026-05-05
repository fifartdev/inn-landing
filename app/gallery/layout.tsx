import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Inn Academy — Diploma in Hotel Management",
  description:
    "Φωτογραφίες από masterclasses, events και εκπαιδευτικές δραστηριότητες της Inn Academy.",
  alternates: {
    canonical: "https://www.innacademy.gr/gallery",
    languages: {
      "el": "https://www.innacademy.gr/gallery",
      "en": "https://www.innacademy.gr/gallery",
      "fr": "https://www.innacademy.gr/gallery",
      "x-default": "https://www.innacademy.gr/gallery",
    },
  },
  openGraph: {
    title: "Gallery | Inn Academy — Diploma in Hotel Management",
    description:
      "Φωτογραφίες από masterclasses, events και εκπαιδευτικές δραστηριότητες της Inn Academy.",
    url: "https://www.innacademy.gr/gallery",
    type: "website",
    images: [{ url: "/innacademyfeatured.jpg", width: 1080, height: 1080, alt: "Inn Academy — Diploma in Hotel Management" }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
