import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "InnAcademy | Diploma in Hotel Management — NextGen Hospitality Leaders",
  description:
    "Πρόγραμμα Εξειδίκευσης στη Διοίκηση Ξενοδοχειακών Επιχειρήσεων. Online εκπαίδευση, masterclasses σε 5★ ξενοδοχεία, πιστοποίηση ACTA & Paris Education. Innjobs.",
  keywords: "hotel management, ξενοδοχειακή διοίκηση, InnAcademy, Innjobs, ACTA, Paris Education, diploma hospitality",
  openGraph: {
    title: "InnAcademy | Diploma in Hotel Management",
    description: "Εξελίξου σε διοικητική θέση στον ξενοδοχειακό κλάδο. Online + Masterclasses + Career Day.",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
