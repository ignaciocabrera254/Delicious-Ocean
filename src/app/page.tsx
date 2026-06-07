"use client";

import SEO from '../components/SEO';
import { Header, Footer, Hero } from '../components/CoreUI';
import { OffersSection, FishSection, SeafoodSection } from '../components/ProductsUI';
import { AboutSection, TestimonialSection, FAQSection, ContactSection } from '../components/InfoUI';

export default function Home() {
  return (
    <>
      {/* Inject JSON-LD Scripts for Local SEO */}
      <SEO />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <OffersSection />
          <FishSection />
          <SeafoodSection />
          <AboutSection />
          <TestimonialSection />
          <ContactSection />
          <FAQSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
