import React from 'react'
import Pretitle from './Pretitle'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { fadeIn } from '@/public/assets/variants'

const About = () => {
  return (
    <div id='about' className='pt-16 xl:pt-32 mb-0 xl:mb-0 bg-bglight'>
      <div className='container mx-auto'>
        <div className="flex flex-col justify-between gap-12 xl:gap-0 xl:flex-row xl:items-center">

          {/*img - The 'hidden xl:flex' already hides it on mobile and shows it on large screens and up. */}
          <motion.div
            variants={fadeIn("left", 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className='flex-1 hidden xl:flex justify-start'>
            <img src="/assets/img/about/AboutImgBGR.png" alt="about img" width={400} />
          </motion.div>

          {/*Text Content - Added 'mx-auto' and 'text-center' for mobile centering */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className='flex max-w-[700px] mx-auto xl:mx-0'>
            <div className='text-center xl:text-left'>


              <div className='flex justify-center xl:justify-start'>
                <Pretitle text="About Us" />
              </div>

              <h2 className='h2 mb-6'>Committed To Sparkling Cleanliness In Every Space in Melbourne</h2>
              <p className='mb-11 text-primary/70'>Dazzle Cleaning offers comprehensive End of lease cleaning services designed to keep your homesparkling clean and comfortable. Our services include dusting all surfaces, vacuuming and moppingfloors, scrubbing bathrooms, and thoroughly cleaning kitchens. We pay attention to detail, ensuring thatevery corner of your home is spotless.</p>

              {/* Button - Added 'mx-auto' to center it when the parent text is centered */}
              <a
                href="#quote"
                className='w-[190px] h-[48px] py-[5px] pl-[10px] pr-[5px] 
               flex items-center justify-between min-w-[190px] border-primary border-[3px] bg-bglight group hover:bg-[#06a4eb]
               mx-auto xl:mx-0 mb-16 xl:mb-0'
              >
                <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase'>Get a Quote</div>
                <div className='w-9 h-9 bg-primary flex items-center justify-center'>
                  <RiArrowRightUpLine className='text-white text-2xl group-hover:rotate-45 transition-all duration-200 ' />
                </div>
              </a>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default About