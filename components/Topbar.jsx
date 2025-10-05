import React from 'react'
import { RiPhoneFill, RiMailFill } from 'react-icons/ri'
import Socials from './Socials'

const Topbar = () => {
  return (
    <section className='py-2 xl:py-3 
    bg-gradient-to-b from-primary to-primary
    flex items-center'
      id='home'>
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:px-3">

          <div className="hidden lg:flex items-center gap-8">

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white text-primary flex items-center justify-center rounded-full">
                <RiPhoneFill />
              </div>
              <div className='font-small text-sm text-white'>
               +1 (123) 456-7890
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white text-primary flex items-center justify-center rounded-full">
                <RiMailFill />
              </div>
              <div className='font-small text-sm text-white'>
                dazzlecleaning@gmail.com
              </div>

            </div>

          </div>

          <Socials  containerStyles="flex items-center gap-8 mx-auto lg:mx-0" 
          iconStyles="text-white text-2xl flex items-center justify-center rounded-full" />
        </div>



      </div>
    </section>
  )
}

export default Topbar