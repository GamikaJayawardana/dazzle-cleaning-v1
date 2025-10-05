import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'

const BtnQuote = () => {
    return (
        <button className='w-[190px] h-[48px] py-[5px] pl-[10px] pr-[5px] 
                    flex items-center justify-between min-w-[190px] bg-white group hover:bg-gradient-to-b hover:from-[#ffdf00] hover:to-[#c7a005]'>
            <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary  text-sm uppercase'>Get a Quote</div>
            <div className='w-9 h-9 bg-primary flex items-center justify-center'>
                <RiArrowRightUpLine className='text-white text-2xl group-hover:rotate-45 transition-all duration-200 '/>
            </div>
        </button>
    )
}

export default BtnQuote