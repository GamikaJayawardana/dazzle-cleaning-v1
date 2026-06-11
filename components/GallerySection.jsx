"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

const GallerySection = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch('/api/gallery');
                const data = await res.json();
                if (data.images && data.images.length > 0) {
                    // Shuffle and pick 20
                    const shuffled = [...data.images].sort(() => 0.5 - Math.random());
                    setImages(shuffled.slice(0, 20));
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
        <div id='gallery' className='py-16 xl:py-24 bg-gray-50 text-primary overflow-hidden'>
            <div className='container mx-auto px-4'>
                <motion.div 
                    variants={fadeIn("up", 0.1)} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: false, amount: 0.2 }} 
                    className='text-center mb-12 xl:mb-16 max-w-3xl mx-auto'>
                    <div className='flex justify-center'>
                        <Pretitle text="Our Work" center /> 
                    </div>
                    <h2 className='h2 mb-4 font-bold'> 
                        Spotless Results We've Delivered
                    </h2>
                    <p className='text-primary/80 mb-6 leading-relaxed'>
                        Take a look at some of the pristine environments we've cleaned. We take pride in our attention to detail and high standards.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6'>
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.05 * (index % 5))}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.1 }}
                                className={`relative aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer ${index >= 6 ? 'hidden sm:block' : ''}`}
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <motion.div 
                    variants={fadeIn("up", 0.3)} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true }} 
                    className='mt-12 flex justify-center'
                >
                    <Link href='/gallery'>
                        <button className='bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 uppercase tracking-wider text-sm'>
                            View Full Gallery
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default GallerySection;
