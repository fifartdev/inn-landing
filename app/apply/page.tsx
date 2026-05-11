"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-inn-light-grey flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Inn Academy"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </div>
        <ContactForm variant="section" />
      </div>
    </main>
  );
}
