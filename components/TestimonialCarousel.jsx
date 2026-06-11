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
    quote: "We switched to Dazzle Cleaning after experiencing issues with our previous cleaning provider, and the difference has been remarkable. The team is professional, reliable, and consistently delivers a high standard of cleaning. We couldn't be happier with the service.",
    name: "Irean",
    title: "Addairs Eastland",
    profileImageUrl: "https://placehold.co/60x60/06a4eb/ffffff?text=IR",
  },
  {
    id: 2,
    quote: "Dazzle Cleaning always goes above and beyond. The attention to detail is exceptional, and our office is spotless and smells good after every visit. It's refreshing to work with a company that genuinely cares about quality.",
    name: "Melizza",
    title: "Brown and Watson International ",
    profileImageUrl: "https://placehold.co/60x60/011017/ffffff?text=ME",
  },
  {
    id: 3,
    quote: "The team at Dazzle Cleaning is friendly, trustworthy, and incredibly thorough. They are always punctual and take pride in their work. I would highly recommend them to anyone looking for a professional cleaning service.",
    name: "Dr. Niroshi Jayasena",
    title: "Horizon Doctors",
    profileImageUrl: "https://placehold.co/60x60/efd474/011017?text=NJ",
  },
  {
    id: 4,
    quote: "The quality of service is exceptional. The cleaners are respectful, hardworking, and always willing to accommodate our needs. We highly recommend Dazzle Cleaning.",
    name: "Rev. Peter",
    title: "Our Lady of La Vang Shrine Keysborough",
    profileImageUrl: "https://placehold.co/60x60/06a4eb/ffffff?text=RP",
  },
  {
    id: 5,
    quote: "Dazzle Cleaning exceeded our expectations. The cleaners were friendly, efficient, and incredible. Every room was cleaned to a high standard, including areas that are often overlooked. It's reassuring to know we can rely on such a professional team. We will definitely continue using their services.",
    name: "Stephanie",
    title: "Wheelers Hill",
    profileImageUrl: "https://placehold.co/60x60/011017/ffffff?text=ST",
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
        <p className="text-primary font-bold text-lg mb-0">{name}</p>
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
            Don't take our word for it <br /><span className='text-secondary'>customers say it best</span>
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