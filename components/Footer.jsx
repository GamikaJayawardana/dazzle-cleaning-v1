// components/Footer.jsx
"use client";

import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'; // Assuming you have react-icons installed
import { IoChevronUpOutline } from 'react-icons/io5'; // Up arrow icon
import { Link as ScrollLink } from 'react-scroll'; // For scroll-to-top button
import { RiArrowRightUpLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Replace with your Cleaning Service Logo */}
            <div className="mb-4">
              {/* You might want a dedicated Logo component for the footer, or just use an img tag */}
              <img src="/assets/logo.png" alt="Cleaning Service Logo" width={150} />
            </div>
            <p className="font-secondary text-sm max-w-[300px] text-white/80">
              From sparkling homes to pristine commercial spaces, our clients share their experiences of working with us.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="h4 text-white mb-6">Contact</h3>
            <ul className="space-y-4 font-secondary text-white/80">
              <li className="flex items-center gap-3">
                <FaFacebookF className="text-secondary" /> {/* Example icon */}
                <span>123 Clean St. Anytown, CA 90210, US</span>
              </li>
              <li className="flex items-center gap-3">
                <FaTwitter className="text-secondary" /> {/* Example icon */}
                <span>+(1)555-CLEANING</span>
              </li>
              <li className="flex items-center gap-3">
                <FaYoutube className="text-secondary" /> {/* Example icon */}
                <span>info@cleanservice.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="h4 text-white mb-6">Newsletter</h3>
            <p className="font-secondary text-sm max-w-[300px] text-white/80 mb-4">
              Get cleaning tips, special offers, and updates directly to your inbox.
            </p>
            <form className="flex w-full max-w-[300px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-secondary transition-all duration-300" 
              />
              <button 
                type="submit" 
                className="w-12 h-auto bg-secondary flex items-center justify-center text-primary text-xl hover:bg-secondary transition-all duration-300"
              >
                <RiArrowRightUpLine className='text-primary text-2xl group-hover:rotate-45 transition-all duration-200' /> 
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright and Social Icons / Scroll to Top */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4">
          <p className="font-secondary text-sm text-white/60 text-center lg:text-left">
            Copyright &copy; {new Date().getFullYear()} Dazzle Cleaning. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {/* Social Icons */}
            <a href="#" className="text-white/60 hover:text-secondary transition-all duration-300 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-all duration-300 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-all duration-300 text-lg">
              <FaYoutube />
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-all duration-300 text-lg">
              <FaInstagram />
            </a>
          </div>

          {/* Scroll to top button - positioned absolutely on the right in the original */}
          {/* For this structure, we'll place it within the bottom flex container */}
          <ScrollLink 
            to="home" // Assuming 'home' is the ID of your top section
            smooth={true} 
            duration={500} 
            className="w-10 h-10 bg-secondary hover:bg-secondary flex items-center justify-center 
                       text-primary text-xl cursor-pointer transition-all duration-300 mt-4 lg:mt-0"
          >
            <IoChevronUpOutline />
          </ScrollLink>
        </div>

      </div>
    </footer>
  );
};

export default Footer;