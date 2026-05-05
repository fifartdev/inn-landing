import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Χώρες Εργασίας | Inn Academy — Diploma in Hotel Management",
  description:
    "Οι απόφοιτοί μας εργάζονται σε ξενοδοχεία παγκοσμίως. Ανακάλυψε τις χώρες όπου η Inn Academy και η Innjobs ανοίγουν πόρτες για διεθνή καριέρα.",
  alternates: {
    canonical: "https://www.innacademy.gr/countries",
    languages: {
      "el": "https://www.innacademy.gr/countries",
      "en": "https://www.innacademy.gr/countries",
      "fr": "https://www.innacademy.gr/countries",
      "x-default": "https://www.innacademy.gr/countries",
    },
  },
  openGraph: {
    title: "Χώρες Εργασίας | Inn Academy — Diploma in Hotel Management",
    description:
      "Οι απόφοιτοί μας εργάζονται σε ξενοδοχεία παγκοσμίως. Ανακάλυψε τις χώρες όπου η Inn Academy και η Innjobs ανοίγουν πόρτες για διεθνή καριέρα.",
    url: "https://www.innacademy.gr/countries",
    type: "website",
    images: [{ url: "/innacademyfeatured.jpg", width: 1080, height: 1080, alt: "Inn Academy — Diploma in Hotel Management" }],
  },
};

export default function CountriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
