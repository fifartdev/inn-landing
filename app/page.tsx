"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import CertificationsBar from "@/components/CertificationsBar";
import AboutSection from "@/components/AboutSection";
import ProgramHighlights from "@/components/ProgramHighlights";
import CurriculumSection from "@/components/CurriculumSection";
import MasterclassVenues from "@/components/MasterclassVenues";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  useEffect(() => {
    const scrollToApplyMobile = () => {
      if (window.innerWidth < 1024) {
        document.getElementById("apply-mobile")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Handle initial load from another page via /#apply
    if (window.location.hash === "#apply") {
      setTimeout(scrollToApplyMobile, 100);
    }

    // Intercept same-page #apply clicks on mobile
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href="#apply"], a[href="/#apply"]');
      if (!anchor || window.innerWidth >= 1024) return;
      e.preventDefault();
      scrollToApplyMobile();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Partner logos ticker */}
      <LogoTicker />

      {/* Certifications bar */}
      <CertificationsBar />

      {/* Main content area — CSS Grid two-column layout */}
      {/* Desktop anchor: #apply scrolls here, sidebar form is immediately visible on the right */}
      <div id="apply" className="scroll-mt-20" />
      <div className="lg:grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] lg:items-start">

        {/* Left: all content sections */}
        <div className="min-w-0">
          <AboutSection />
          <ProgramHighlights />
          <CurriculumSection />
          <MasterclassVenues />
          <PricingSection />
        </div>

        {/* Right: sticky form sidebar — sticky works on a grid item with self-start */}
        <aside className="hidden lg:block sticky top-20 self-start px-5 pt-10 pb-10">
          <ContactForm variant="sticky" />
        </aside>
      </div>

      {/* Mobile contact form — just before footer, JS scrolls here on mobile */}
      <div id="apply-mobile" className="scroll-mt-20" />
      <section className="lg:hidden py-16 px-4 bg-inn-light-grey">
        <ContactForm variant="section" />
      </section>

      <Footer />
    </main>
  );
}
