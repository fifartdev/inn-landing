"use client";

import Navbar from "@/components/Navbar";
import CountriesSection from "@/components/CountriesSection";
import Footer from "@/components/Footer";

export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <CountriesSection />
      </div>
      <Footer />
    </main>
  );
}
