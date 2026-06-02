import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inn Academy | F&B Management Program",
  description:
    "Εξειδικευμένο πρόγραμμα στον τομέα του Food & Beverage Management. Online εκπαίδευση, 2 Masterclasses στην Αθήνα, γαλλική πιστοποίηση από το Paris Education.",
  robots: { index: false, follow: false },
};

export default function FnbLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
