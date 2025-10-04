import React from 'react'
import { RiPhoneFill, RiMailFill } from 'react-icons/ri'
import Socials from './Socials'

const Topbar = () => {
  return (
    <section className='py-4 xl:py-4 
    bg-gradient-to-b from-[#00AEEF] to-[#0286b6] 
    flex items-center'
      id='home'>
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:px-3">

          <div className="hidden lg:flex items-center gap-8">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                <RiPhoneFill />
              </div>
              <div className='font-medium text-primary'>
               +1 (123) 456-7890
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full">
                <RiMailFill />
              </div>
              <div className='font-medium text-primary'>
                dazzlecleaning@gmail.com
              </div>

            </div>

          </div>

          <Socials  containerStyles="flex items-center gap-8 mx-auto lg:mx-0" 
          iconStyles="text-primary text-2xl flex items-center justify-center rounded-full" />
        </div>



      </div>
    </section>
  )
}

export default Topbar