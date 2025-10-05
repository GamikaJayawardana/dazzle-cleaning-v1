"use client";

import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Topbar from '@/components/Topbar'
import Work from '@/components/Work'
import React, { useEffect } from 'react'

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
  }, {})

  console.log(headerActive);

  return (
    <div>
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
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home