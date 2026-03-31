"use client";

import Navbar from "@/components/Navbar";
import GuestSpeakersSection from "@/components/GuestSpeakersSection";
import Footer from "@/components/Footer";

export default function GuestsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <GuestSpeakersSection />
      </div>
      <Footer />
    </main>
  );
}
