import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://innacademy.gr"),
  title: "Inn Academy | Diploma in Hotel Management — NextGen Hospitality Leaders",
  description:
    "Πρόγραμμα Εξειδίκευσης στη Διοίκηση Ξενοδοχειακών Επιχειρήσεων. Online εκπαίδευση, masterclasses σε 5★ ξενοδοχεία, πιστοποίηση ACTA & Paris Education. Innjobs.",
  keywords: "hotel management, ξενοδοχειακή διοίκηση, Inn Academy, Innjobs, ACTA, Paris Education, diploma hospitality, σπουδές διοίκησης ξενοδοχείων, hotel management diploma greece, εκπαίδευση στελεχών τουρισμού, inn academy innjobs, επαγγελματική εξειδίκευση, hospitality, εκπαίδευση hospitality",
  alternates: {
    canonical: "https://innacademy.gr",
    languages: {
      "el": "https://innacademy.gr",
      "en": "https://innacademy.gr",
      "fr": "https://innacademy.gr",
      "x-default": "https://innacademy.gr",
    },
  },
  openGraph: {
    title: "Inn Academy | Diploma in Hotel Management",
    description: "Εξέλιξε την καριέρα σου σε θέση διοίκησης στον ξενοδοχειακό κλάδο. Online + Masterclasses.",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Inn Academy — Diploma in Hotel Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inn Academy | Diploma in Hotel Management",
    description: "Εξέλιξε την καριέρα σου σε θέση διοίκησης στον ξενοδοχειακό κλάδο. Online + Masterclasses.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body>
        <Analytics />
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
