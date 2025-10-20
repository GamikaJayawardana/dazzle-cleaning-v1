import React, { useState } from 'react';
// Imports requested by the user:
import Pretitle from './Pretitle'; 
import { RiDoubleQuotesR } from 'react-icons/ri'; 
import { motion } from 'framer-motion';
import { fadeIn } from '@/public/assets/variants'; 

// --- DUMMY DATA ---
const testimonials = [
  {
    id: 1,
    quote: "Dazzle's end-of-lease cleaning was impeccable. They handled everything from the kitchen grease to the dusty corners, ensuring we got our full bond back without any hassle. Truly professional service.",
    name: "Dominique C.",
    title: "Small Business Owner",
    profileImageUrl: "https://placehold.co/60x60/06a4eb/ffffff?text=DC",
  },
  {
    id: 2,
    quote: "Our residential cleaning service is consistently outstanding. It's great to come home to a sparkling clean house every week. The team is always punctual, friendly, and detail-oriented.",
    name: "Michael Z.",
    title: "Homeowner",
    profileImageUrl: "https://placehold.co/60x60/011017/ffffff?text=MZ",
  },
  {
    id: 3,
    quote: "Exceptional quality and value. We switched to Dazzle for our office space, and the difference is night and day. Their commitment to spotless cleanliness is evident in every room.",
    name: "Sklep W.",
    title: "Office Manager",
    profileImageUrl: "https://placehold.co/60x60/efd474/011017?text=SW",
  },
  {
    id: 4,
    quote: "Reliable and thorough. Their team quickly adapted to our specific needs, and they always go the extra mile. Highly recommend Dazzle Cleaning for any deep cleaning requirements.",
    name: "Anita R.",
    title: "Property Investor",
    profileImageUrl: "https://placehold.co/60x60/06a4eb/ffffff?text=AR",
  },
  {
    id: 5,
    quote: "The best cleaning experience we've ever had. From booking to the final check, the process was seamless and the results were flawless. We'll be using their services again!",
    name: "Brenda T.",
    title: "Tenant",
    profileImageUrl: "https://placehold.co/60x60/011017/ffffff?text=BT",
  },
];

// Reusable Quote Icon Component using RiDoubleQuotesR
const QuoteIcon = ({ colorClass }) => (
  <RiDoubleQuotesR className={`w-10 h-10 ${colorClass}`} />
);

// Component for a single testimonial card
const TestimonialCard = ({ quote, name, title, profileImageUrl }) => (
  <div 
    // All text centered, profile image added before name/position.
    className="bg-white p-8 rounded-xl shadow-custom h-full transition-transform duration-500 ease-in-out transform hover:-translate-y-1 text-center flex flex-col justify-between"
  >
    <div>
        {/* Quote Icon - Centered */}
        <div className="flex justify-center mb-6">
          <div className="p-2 rounded-full bg-secondary/10">
            <QuoteIcon colorClass="text-secondary" />
          </div>
        </div>
        
        {/* Testimonial Text */}
        <p className="text-primary/90 text-md font-secondary mb-6 line-clamp-4">
          {quote}
        </p>
    </div>

    {/* Customer Info - Centered with Profile Picture */}
    <div className='flex flex-col items-center mt-auto'>
        {/* Profile Image */}
        <img 
            src={profileImageUrl} 
            alt={name} 
            className='w-14 h-14 rounded-full object-cover mb-3 border-2 border-secondary/50'
            // Fallback for image loading error: use initials
            onError={(e) => { 
                e.target.onerror = null; 
                // Generate initials for the placeholder fallback
                const initials = name.split(' ').map(n=>n[0]).join('');
                e.target.src=`https://placehold.co/56x56/06a4eb/ffffff?text=${initials}`;
            }} 
        />
        <h4 className="text-primary font-bold text-lg mb-0">{name}</h4>
        <p className="text-primary/60 text-sm mt-0">{title}</p>
    </div>
  </div>
);

// Main Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonials.length;

  // Logic to determine which cards to display (Desktop: 3, Mobile: 1)
  const getVisibleTestimonials = () => {
    // Note: The use of window.innerWidth should be inside useEffect or logic gated by isClient check 
    // in a production environment, but is kept simple here for component clarity.
    const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 960 ? 3 : 1; 

    const startIndex = currentSlide;
    let visible = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % totalSlides;
      visible.push(testimonials[index]);
    }
    return visible;
  };
  
  // Handlers for navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const visibleTestimonials = getVisibleTestimonials();


  return (
    <div id='testimonials' className='pt-16 xl:pt-24 pb-16 xl:pb-24 bg-bglight'>
      <div className='container mx-auto mt-20 mb-10'>
        
        {/* Header Section with FadeIn */}
        <motion.div 
            variants={fadeIn("up", 0.1)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.2 }} 
            className='text-center mb-16 xl:mb-20'>
          
          <div className='flex justify-center mb-4'>
            <Pretitle text="What Our Clients Say" />
          </div>
          <h2 className='h2 mb-2 max-w-4xl mx-auto text-primary'>
            Don't take our word for it<span className='text-secondary'>customers say it best</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards Section with FadeIn */}
        <motion.div 
            variants={fadeIn("up", 0.3)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.2 }} 
            className='relative'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                {...testimonial}
              />
            ))}
          </div>

          {/* Navigation Arrows (Visible only on Large Screens for 3-card view) */}
          <div className='hidden lg:block'>
            {/* Previous Button */}
            <button 
              onClick={prevSlide}
              className='absolute top-1/2 -left-16 transform -translate-y-1/2 p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg'
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className='absolute top-1/2 -right-16 transform -translate-y-1/2 p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg'
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        
          {/* Dots Navigation (Visible only on Mobile/Tablet for 1-card view) */}
          <div className="flex gap-8 items-start justify-center mt-10 space-x-2 lg:hidden">
            
            <button 
              onClick={prevSlide}
              className='transform -translate-y-1/2 p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg'
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex items-center gap-3">
               {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-secondary' : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            </div>
           

            <button 
              onClick={nextSlide}
              className='transform -translate-y-1/2 p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg'
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>


          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default TestimonialCarousel;