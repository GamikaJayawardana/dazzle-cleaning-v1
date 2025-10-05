import React, { useState } from 'react';
import Pretitle from './Pretitle'; 
import { motion } from 'framer-motion';
import { fadeIn } from '@/public/assets/variants'; 

// --- INTERNAL COMPONENTS ---

// Plus/Minus Icon with secondary background box (Styled to match the image)
const PlusMinusIcon = ({ isOpen }) => (
    // FIX: Added flex-shrink-0 to ensure the size (w-10 h-10, which is 40px) remains constant 
    // and does not shrink on mobile or within constrained flex layouts.
    <div className='w-10 h-10 bg-secondary flex items-center justify-center transition-all duration-300 rounded-lg flex-shrink-0'>
        <svg 
            // Icon color is white
            className={`w-6 h-6 text-white transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Horizontal line (always visible) */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16" />
            {/* Vertical line (rotates to form minus when open) */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
        </svg>
    </div>
);

// --- FAQ DATA for Cleaning Service ---
const FAQ_DATA = [
  {
    id: 1,
    question: "What types of cleaning services do you offer?",
    answer: "We offer comprehensive residential cleaning, end-of-lease cleaning, deep cleaning, and commercial office cleaning services. Our packages are customizable to fit your specific needs and schedule.",
  },
  {
    id: 2,
    question: "Do I need to provide cleaning supplies or equipment?",
    answer: "No, we come fully equipped! Our teams bring all necessary professional-grade cleaning solutions and state-of-the-art equipment to ensure a spotless clean. We also use eco-friendly products upon request.",
  },
  {
    id: 3,
    question: "Are your cleaners insured and background-checked?",
    answer: "Absolutely. All Dazzle Cleaning staff members are fully insured, bonded, and have passed rigorous background checks. We prioritize your safety and peace of mind.",
  },
  {
    id: 4,
    question: "How can I book or reschedule an appointment?",
    answer: "You can book or manage your appointments easily through our online portal or by calling our customer service line. We require 24 hours notice for cancellations or rescheduling to avoid a fee.",
  },
  {
    id: 5,
    question: "How is the pricing for end-of-lease cleaning determined?",
    answer: "End-of-lease cleaning is priced based on the size of the property (number of bedrooms/bathrooms) and specific requirements (e.g., carpet steam cleaning). We provide a free, non-obligatory quote after assessing your needs.",
  },
];

// --- FAQ Item Component with Collapse Animation ---
const FAQItem = ({ item, isOpen, onToggle }) => (
    // Light theme border for separation
    <div className="py-4 md:py-5 border-b border-primary/10 last:border-b-0"> 
        <button
            className="flex justify-between items-center w-full text-left transition-colors duration-200"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${item.id}`}
        >
            {/* Question color is ALWAYS text-primary (does not change on collapse) */}
            <span className="text-lg md:text-xl font-secondary font-semibold mr-4 text-primary">
                {item.question}
            </span>
            <PlusMinusIcon isOpen={isOpen} />
        </button>
        
        {/* Animated Answer Content using framer-motion for collapse/expand */}
        <motion.div
            id={`faq-answer-${item.id}`}
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`overflow-hidden ${isOpen ? 'pt-3' : ''}`}
        >
            {/* Answer text is muted primary color */}
            <p className="text-primary/70 font-secondary text-base md:text-lg pl-2">
                {item.answer}
            </p>
        </motion.div>
    </div>
);

// --- Main FAQ Section Component ---
const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    // Set background to bg-white for light theme
    <div id='faq' className='pt-16 xl:pt-24 pb-16 xl:pb-24 bg-white'>
      <div className='container mx-auto'>
        
        {/* Header Section (Animated with fadeIn) */}
        <motion.div 
            variants={fadeIn("up", 0.1)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.2 }} 
            className='text-center mb-16 xl:mb-20 max-w-2xl mx-auto'>
          
          <div className='flex justify-center mb-4'>
            <Pretitle text="FAQ" />
          </div>
          {/* Title text uses text-primary */}
          <h2 className='h2 mb-4 text-primary font-bold'> 
            Got Questions? We've Got You Covered
          </h2>
          {/* Subtitle text uses muted text-primary */}
          <p className='text-primary/70 font-secondary text-base md:text-lg'> 
            From project planning to final touches, we've answered the most common questions to help you make informed decisions.
          </p>
        </motion.div>

        {/* Accordion Section (Animated with fadeIn) */}
        <motion.div 
            variants={fadeIn("up", 0.3)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.2 }} 
            className='max-w-4xl mx-auto p-4 md:p-8'
        >
            {/* The individual FAQ items are mapped here */}
            {FAQ_DATA.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openItemId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Faq;