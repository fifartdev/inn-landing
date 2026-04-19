import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Χώρες Εργασίας | Inn Academy — Diploma in Hotel Management",
  description:
    "Οι απόφοιτοί μας εργάζονται σε ξενοδοχεία παγκοσμίως. Ανακάλυψε τις χώρες όπου η Inn Academy και η Innjobs ανοίγουν πόρτες για διεθνή καριέρα.",
  alternates: {
    canonical: "https://innacademy.gr/countries",
    languages: {
      "el": "https://innacademy.gr/countries",
      "en": "https://innacademy.gr/countries",
      "fr": "https://innacademy.gr/countries",
      "x-default": "https://innacademy.gr/countries",
    },
  },
  openGraph: {
    title: "Χώρες Εργασίας | Inn Academy — Diploma in Hotel Management",
    description:
      "Οι απόφοιτοί μας εργάζονται σε ξενοδοχεία παγκοσμίως. Ανακάλυψε τις χώρες όπου η Inn Academy και η Innjobs ανοίγουν πόρτες για διεθνή καριέρα.",
    type: "website",
  },
};

export default function CountriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
