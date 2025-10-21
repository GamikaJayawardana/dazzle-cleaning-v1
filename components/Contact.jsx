// File: components/Contact.js

'use client';
import React, { useState } from 'react';
import Pretitle from './Pretitle';
import { motion } from 'framer-motion';
import { fadeIn } from '@/public/assets/variants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const CONTACT_INFO = [
  { 
    icon: Mail, 
    title: "Email Us", 
    details: ["Our friendly team is here to help.", "info@dazzlecleaning.com.au"] 
  },
  { 
    icon: MapPin, 
    title: "Office", 
    details: ["Serving the wider Melbourne area.", "Melbourne, VIC, Australia"] 
  },
  { 
    icon: Phone, 
    title: "Phone", 
    details: ["Mon-Fri from 8am to 5pm.", "+61 424 298 996"] 
  },
];

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service*" },
  { value: "residential", label: "Residential Cleaning" },
  { value: "commercial", label: "Commercial Office Cleaning" },
  { value: "deep_clean", label: "Deep/Spring Cleaning" },
  { value: "end_lease", label: "End-of-Lease Cleaning" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again later.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full p-3 border border-primary/20 rounded-lg text-primary bg-white focus:ring-secondary focus:border-secondary transition duration-300 placeholder:text-primary/60";
  const selectClasses = `${inputClasses} appearance-none pr-8`;

  return (
    <div id='contact' className='py-16 xl:py-24 bg-bglight'>
      <div className='container mx-auto px-4 mt-10'>

        {/* Header */}
        <motion.div 
          variants={fadeIn("up", 0.1)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: false, amount: 0.2 }} 
          className='text-center mb-12 xl:mb-16 max-w-2xl mx-auto'
        >
          <div className='flex justify-center mb-4'>
            <Pretitle text="Get in Touch" /> 
          </div>
          <h2 id='quote' className='h2 mb-4 text-primary font-bold'>Get a Free Quote</h2>
          <p className='text-primary/70 font-secondary text-base md:text-lg'>
            We provide clear, non-obligatory estimates tailored to your specific cleaning needs.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={fadeIn("up", 0.3)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: false, amount: 0.2 }} 
          className='grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto rounded-xl bg-white shadow-2xl p-8 lg:p-12 border-t-4 border-secondary'
        >

          {/* Contact Info */}
          <div className='flex-grow'> 
            <div className='mb-10'>
              <h2 className='text-3xl font-bold text-primary mb-2'>Contact Details</h2>
              <p className='text-primary/70 font-secondary text-base'>
                Have questions? Feel free to reach out to us through any of the channels below.
              </p>
            </div>

            <div className='space-y-10'>
              {CONTACT_INFO.map((item, index) => (
                <div key={index} className='flex items-start space-x-4'>
                  <div className='p-3 border border-secondary text-secondary rounded-lg flex-shrink-0'>
                    <item.icon className='w-6 h-6' />
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-xl font-semibold text-primary'>{item.title}</p>
                    {item.details.map((detail, dIndex) => (
                      <span key={dIndex} className='text-primary/80 text-base'>{detail}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className='text-3xl font-bold text-primary mb-2'>Request A Quote</h2>
            <p className='text-primary/70 font-secondary text-base mb-6'>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className='space-y-6'>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className='p-4 text-center bg-green-100 text-green-800 rounded-lg font-semibold'
                >
                  Quote request submitted! We will contact you shortly.
                </motion.div>
              )}

              {error && (
                <div className='p-4 text-center bg-red-100 text-red-800 rounded-lg font-semibold'>
                  {error}
                </div>
              )}

              <input
                type='text' name='name' value={formData.name}
                onChange={handleChange} placeholder='Your Name*' required
                className={inputClasses}
              />
              <input
                type='email' name='email' value={formData.email}
                onChange={handleChange} placeholder='Your Email*' required
                className={inputClasses}
              />
              
              <div className='grid sm:grid-cols-2 gap-4'>
                <input
                  type='tel' name='phone' value={formData.phone}
                  onChange={handleChange} placeholder='Phone Number'
                  className={inputClasses}
                />
                <div className='relative'>
                  <label htmlFor="service-select" className="sr-only">Select a service</label>

                  <select
                    id="service-select" 
                    name='service' 
                    value={formData.service}
                    onChange={handleChange} 
                    className={selectClasses} 
                    required
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value} disabled={option.value === ""}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary/70">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <textarea
                name='message' value={formData.message}
                onChange={handleChange} placeholder='Enter your message*'
                required rows='5' className={inputClasses}
              ></textarea>

              <button
                type='submit' disabled={isSubmitting}
                className={`w-full py-3 px-6 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center space-x-2 
                  ${isSubmitting 
                    ? 'bg-secondary/70 text-white cursor-not-allowed' 
                    : 'bg-secondary text-white hover:bg-secondary/90 hover:shadow-lg'}`}
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
