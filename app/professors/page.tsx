"use client";

import Navbar from "@/components/Navbar";
import ProfessorsSection from "@/components/ProfessorsSection";
import Footer from "@/components/Footer";

export default function ProfessorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <ProfessorsSection />
      </div>
      <Footer />
    </main>
  );
}
