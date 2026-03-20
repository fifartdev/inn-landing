"use client";

import Navbar from "@/components/Navbar";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <SponsorsSection />
      </div>
      <Footer />
    </main>
  );
}
