import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Inn Academy | Diploma in Hotel Management — NextGen Hospitality Leaders",
  description:
    "Πρόγραμμα Εξειδίκευσης στη Διοίκηση Ξενοδοχειακών Επιχειρήσεων. Online εκπαίδευση, masterclasses σε 5★ ξενοδοχεία, πιστοποίηση ACTA & Paris Education. Innjobs.",
  keywords: "hotel management, ξενοδοχειακή διοίκηση, Inn Academy, Innjobs, ACTA, Paris Education, diploma hospitality",
  openGraph: {
    title: "Inn Academy | Diploma in Hotel Management",
    description: "Εξέλιξε την καριέρα σου σε θέση διοίκησης στον ξενοδοχειακό κλάδο. Online + Masterclasses + Career Day.",
    type: "website",
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
