import React from 'react'
import { RiPhoneFill, RiMailFill } from 'react-icons/ri'
import Socials from './Socials'

{/*bg-gradient-to-b from-[#ffdf00] to-[#c7a005]  gradient-to-b from-[#efd474] to-[#9d743f]*/}

const Topbar = () => {
  return (
    <section className='py-2 xl:py-3    
    bg-secondary
  
    flex items-center'
      id='home'>
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:px-3">

          <div className="hidden lg:flex items-center gap-8">

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary text-md text-seconadry flex items-center justify-center rounded-full">
                <RiPhoneFill />
              </div>
              <div className='font-medium font-primary text-md text-primary'>
               +61 424 298 996
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary text-seconadry text-md flex items-center justify-center rounded-full">
                <RiMailFill />
              </div>
              <div className='font-medium font-primary text-md text-primary'>
                info@dazzlecleaning.com.au
              </div>

            </div>

          </div>

          <Socials  containerStyles="flex items-center gap-8 mx-auto lg:mx-0" 
          iconStyles="text-primary text-2xl flex items-center justify-center" />
        </div>



      </div>
    </section>
  )
}

export default Topbar