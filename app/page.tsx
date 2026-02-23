"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import CertificationsBar from "@/components/CertificationsBar";
import AboutSection from "@/components/AboutSection";
import ProgramHighlights from "@/components/ProgramHighlights";
import CurriculumSection from "@/components/CurriculumSection";
import MasterclassVenues from "@/components/MasterclassVenues";
import FranceTripSection from "@/components/FranceTripSection";
import ProfessorsSection from "@/components/ProfessorsSection";
import PricingSection from "@/components/PricingSection";
import CountriesSection from "@/components/CountriesSection";
import FAQSection from "@/components/FAQSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Partner logos ticker */}
      <LogoTicker />

      {/* Certifications bar */}
      <CertificationsBar />

      {/* Main content area — CSS Grid two-column layout */}
      <div className="lg:grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] lg:items-start">

        {/* Left: all content sections */}
        <div className="min-w-0">
          <AboutSection />
          <ProgramHighlights />
          <CurriculumSection />
          <MasterclassVenues />
          <FranceTripSection />
          <ProfessorsSection />
          <PricingSection />
          <CountriesSection />
          <FAQSection />
        </div>

        {/* Right: sticky form sidebar — sticky works on a grid item with self-start */}
        <aside className="hidden lg:block sticky top-20 self-start px-5 pt-10 pb-10">
          <ContactForm variant="sticky" />
        </aside>
      </div>

      {/* Mobile contact form */}
      <section className="lg:hidden py-16 px-4 bg-inn-light-grey">
        <ContactForm variant="section" />
      </section>

      <SponsorsSection />
      <Footer />
    </main>
  );
}
