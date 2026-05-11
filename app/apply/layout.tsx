import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Αίτηση Συμμετοχής | Inn Academy — Diploma in Hotel Management",
  description:
    "Συμπλήρωσε την αίτησή σου για το Diploma in Hotel Management της Inn Academy. Περιορισμένες θέσεις.",
  robots: { index: false, follow: false },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
