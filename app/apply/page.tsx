"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <section className="py-8 px-4 bg-inn-light-grey">
          <div className="w-full max-w-lg mx-auto">
            <ContactForm variant="section" />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
