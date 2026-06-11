"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pretitle = ({ text, center }) => {
    return (
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : "justify-start"}`}>
            <div className='w-2 h-2 bg-secondary rounded-full'></div>
            <p className='font-primary text-primary tracking-[3.2px] uppercase text-sm font-semibold'>{text}</p>
            <div className='w-2 h-2 bg-secondary rounded-full'></div>
        </div>
    );
};

const fadeIn = (direction, delay) => {
    return {
        hidden: { y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0, opacity: 0, x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0 },
        show: { y: 0, x: 0, opacity: 1, transition: { type: 'tween', duration: 1.2, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] } },
    };
};

export default function GalleryClient() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [headerActive, setHeaderActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch('/api/gallery');
                const data = await res.json();
                if (data.images) {
                    setImages(data.images);
                }
            } catch (error) {
                console.error("Failed to fetch gallery images", error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <main>
            <Topbar />

            <div className='relative z-10'>
                <Header />
            </div>

            <div className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? 'translate-y-0' : '-translate-y-full'}`}>
                <Header />
            </div>

            <div className='py-16 xl:py-24 bg-white text-primary'>
                <div className='container mx-auto px-4 mt-8'>
                    <motion.div 
                        variants={fadeIn("up", 0.1)} 
                        initial="hidden" 
                        animate="show" 
                        className='text-center mb-12 xl:mb-16 max-w-3xl mx-auto'>
                        <div className='flex justify-center'>
                            <Pretitle text="Full Gallery" center /> 
                        </div>
                        <h1 className='h2 mb-4 font-bold'> 
                            Our Cleaning Results
                        </h1>
                        <p className='text-primary/80 mb-6 leading-relaxed'>
                            Browse through our extensive gallery showcasing the high-quality cleaning services we provide for residential and commercial properties.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="flex justify-center items-center py-32">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-secondary"></div>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6'>
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn("up", 0.05 * (index % 5))}
                                    initial="hidden"
                                    animate="show"
                                    className='relative aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer'
                                >
                                    <Image
                                        src={`/gallery/${img}`}
                                        alt={`Gallery image ${index + 1}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                                         <div className="bg-white/90 p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
