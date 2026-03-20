"use client";

import Navbar from "@/components/Navbar";
import FranceTripSection from "@/components/FranceTripSection";
import Footer from "@/components/Footer";

export default function FrancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <FranceTripSection />
      </div>
      <Footer />
    </main>
  );
}
