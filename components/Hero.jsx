import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { fadeIn } from '@/public/assets/variants'



const Hero = () => {
  return (
    <section className='h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative'>
      {/* overlay*/}
      <div className='absolute inset-0 bg-gradient-to-l from-black/0 via-black/70 to-black/80 z-10'>

        <div className="container mx-auto h-full flex items-center">
          <div className='"z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[700px]'>
            <motion.h1 
            variants={fadeIn("up", 0.2)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.8 }} 
            className='h1 text-white mb-4 '>
              <span className='text-accent'>TRUSTED </span>CLEANING <br /> GUARANTEED PEACE
            </motion.h1>
            <motion.p 
            variants={fadeIn("up", 0.4)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.8 }} 
            className='mb-9'>
              Specializing in homes and offices across Melbourne, we do more than just clean—we create healthier, more productive environments. Enjoy the peace of mind that comes with a professionally sanitized space.
            </motion.p>

            <motion.div
            variants={fadeIn("up", 0.4)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.8 }} 
            >
            <a href="#services" className='w-[190px] h-[48px] py-[5px] pl-[10px] pr-[5px] 
                              flex items-center justify-between min-w-[230px] bg-[#06a4eb] group hover:bg-white'>
              <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary  text-sm uppercase'>EXPLORE SERVICES</div>
              <div className='w-9 h-9 bg-primary flex items-center justify-center'>
                <RiArrowRightUpLine className='text-white text-2xl group-hover:rotate-45 transition-all duration-200 ' />
              </div>
            </a>

            </motion.div>
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero