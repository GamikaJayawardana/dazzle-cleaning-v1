"use client";

import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MapSection from '@/components/MapSection';
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Topbar from '@/components/Topbar'
import Work from '@/components/Work'
import React, { useEffect } from 'react'
import TestimonialCarousel from '@/components/TestimonialCarousel';

// Function to generate JSON-LD for Local Business
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


const Home = () => {
  const [headerActive, setHeaderActive] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  console.log(headerActive);

  return (
    <main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd()}
        key="local-business-schema"
      />
      
      <Topbar />

      {/*static header*/}
      <div className='relative z-10'>
        <Header />
      </div>

      {/*animated header*/}
      <div className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? 'translate-y-0' : '-translate-y-full'}`}>
        <Header />
      </div>

      <Hero />
      <About />
      <Stats />
      <Services />
      {/* <Work /> */}
      <TestimonialCarousel />
      <Faq />
      <Contact /> 
      <MapSection />
      <Footer />
    </main>
  )
}

export default Home