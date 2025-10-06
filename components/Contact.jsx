import React, { useState } from 'react';
import Pretitle from './Pretitle'; // External import
import { motion } from 'framer-motion';
import { fadeIn } from '@/public/assets/variants'; // External import
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

// --- Contact Details Data ---
const CONTACT_INFO = [
    { 
        icon: MessageSquare, 
        title: "Chat to us", 
        details: ["Our friendly team is here to help.", "hi@urbanbuild.com"] 
    },
    { 
        icon: MapPin, 
        title: "Office", 
        details: ["Come and say hello at our office.", "1250 Brickstone Ave, Dallas, TX", "75201, USA"] 
    },
    { 
        icon: Phone, 
        title: "Phone", 
        details: ["Mon-Fri from 8am to 5pm.", "+1 (555) 000-0000"] 
    },
];

const SERVICE_OPTIONS = [
    { value: "", label: "Select a service" },
    { value: "residential", label: "Residential Cleaning" },
    { value: "commercial", label: "Commercial Office Cleaning" },
    { value: "deep_clean", label: "Deep/Spring Cleaning" },
    { value: "end_lease", label: "End-of-Lease Cleaning" },
];

// --- Main Contact Component ---
const Contact = () => {
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form field change handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log('Quote Request Submitted:', formData);
        
        // Simulate API call delay
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            
            // Clear form and hide success message after a few seconds
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            setTimeout(() => setSubmitted(false), 4000);
        }, 1500);
    };

    // Common input styling for consistency
    const inputClasses = "w-full p-3 border border-primary/20 rounded-lg text-primary bg-white focus:ring-secondary focus:border-secondary transition duration-300 placeholder:text-primary/60";
    
    // Select styling uses inputClasses but adds appearance-none for better cross-browser consistency
    const selectClasses = `${inputClasses} appearance-none pr-8`;

    return (
        // Main container uses the specified light background
        <div id='contact' className='py-16 xl:py-24 bg-bglight'>
            <div className='container mx-auto px-4'>
                
                {/* 1. Header Section */}
                <motion.div 
                    variants={fadeIn("up", 0.1)} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: false, amount: 0.2 }} 
                    className='text-center mb-12 xl:mb-16 max-w-2xl mx-auto'>
                    
                    <div className='flex justify-center mb-4'>
                        <Pretitle text="Start Your Project" /> 
                    </div>
                    
                    <h2 className='h2 mb-4 text-primary font-bold'> 
                        Get a Free Quote or Contact Our Team
                    </h2>
                    
                    <p className='text-primary/70 font-secondary text-base md:text-lg'> 
                        We provide clear, non-obligatory estimates tailored to your specific cleaning needs.
                    </p>
                </motion.div>

                {/* 2. Main Content Grid (The Single Card Container) */}
                <motion.div 
                    variants={fadeIn("up", 0.3)} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: false, amount: 0.2 }} 
                    // Single card styling: bg-white, shadow-2xl, rounded-xl applied to the grid container
                    className='grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto rounded-xl bg-white shadow-2xl p-8 lg:p-12 border-t-4 border-secondary'
                >
                    
                    {/* A. Contact Information Panel (Left Column) */}
                    <div className=''> 
                        <div className='mb-10'>
                            <h2 className='text-3xl font-bold text-primary mb-2'>
                                Contact Us
                            </h2>
                            <p className='text-primary/70 font-secondary text-base'>
                                From project planning to final touches, we've answered the most common questions.
                            </p>
                        </div>
                        
                        {/* Contact Details List */}
                        <div className='space-y-10'>
                            {CONTACT_INFO.map((item, index) => (
                                <div key={index} className='flex items-start space-x-4'>
                                    {/* Icon container with secondary border */}
                                    <div className='p-3 border border-secondary text-secondary rounded-lg flex-shrink-0'>
                                        <item.icon className='w-6 h-6' />
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-xl font-semibold text-primary'>{item.title}</p>
                                        {item.details.map((detail, dIndex) => (
                                            <span key={dIndex} className='text-primary/80 text-base'>
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Social Icons (Placeholder for alignment) */}
                        <div className='mt-12 flex space-x-4 text-primary/70'>
                            <a href="#" className="hover:text-secondary transition-colors"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="hover:text-secondary transition-colors"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="hover:text-secondary transition-colors"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-secondary transition-colors"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    {/* B. Request a Quote Form (Right Column) */}
                    <div className=''>
                        <h2 className='text-3xl font-bold text-primary mb-2'>
                            Request A Quote
                        </h2>
                         <p className='text-primary/70 font-secondary text-base mb-6'>
                            From project planning to final touches, we've answered the most common questions.
                        </p>

                        <form onSubmit={handleSubmit} className='space-y-6'>
                            
                            {/* Success message */}
                            {submitted && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    className='p-4 text-center bg-green-100 text-green-700 rounded-lg font-semibold'
                                >
                                    Quote request submitted! We will contact you shortly.
                                </motion.div>
                            )}

                            {/* Name and Email */}
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your Name*'
                                required
                                className={inputClasses}
                            />
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Your Email*'
                                required
                                className={inputClasses}
                            />
                            
                            {/* Phone and Service Dropdown (Two-column layout) */}
                            <div className='grid sm:grid-cols-2 gap-4'>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='Phone number'
                                    className={inputClasses}
                                />
                                <div className='relative'>
                                    <select
                                        name='service'
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={selectClasses}
                                    >
                                        {SERVICE_OPTIONS.map((option) => (
                                            <option 
                                                key={option.value} 
                                                value={option.value}
                                                disabled={option.value === ""}
                                                hidden={option.value === ""}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    {/* Custom arrow for select box */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary/70">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Enter your message'
                                required
                                rows='5'
                                className={inputClasses}
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center space-x-2 
                                    ${isSubmitting 
                                        ? 'bg-secondary/70 text-white cursor-not-allowed' 
                                        : 'bg-secondary text-white hover:bg-secondary/90 hover:shadow-lg'}`
                                }
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className='w-5 h-5' />
                                        <span>SEND MESSAGE</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;