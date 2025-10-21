"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// --- Components loaded immediately (Above the fold) ---
import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';

// --- Dynamically import components that are below the fold ---
const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'));
const Faq = dynamic(() => import('@/components/Faq'));
const Contact = dynamic(() => import('@/components/Contact'));
const MapSection = dynamic(() => import('@/components/MapSection'));
const Footer = dynamic(() => import('@/components/Footer'));

// --- JSON-LD FOR LOCAL BUSINESS SEO ---
function addJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dazzle Cleaning",
      "image": "https://www.dazzlecleaning.com.au/assets/logo.png",
      "url": "https://www.dazzlecleaning.com.au",
      "telephone": "+61 424 298 996",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      } 
    }`,
  };
}

const HomeClient = () => { // Renamed to HomeClient
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd()}
        key="local-business-schema"
      />
      
      <Topbar />

      <div className='relative z-10'>
        <Header />
      </div>

      <div className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? 'translate-y-0' : '-translate-y-full'}`}>
        <Header />
      </div>

      <Hero />
      <About />
      <Stats />
      <Services />

      <TestimonialCarousel />
      <Faq />
      <Contact /> 
      <MapSection />
      <Footer />
    </main>
  );
};

export default HomeClient; // Renamed export