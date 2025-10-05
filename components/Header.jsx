"use client";

import React from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri';
import { Link as ScrollLink } from 'react-scroll'
import Logo from './Logo';

const links = [
    { name: 'home', path: 'home' },
    { name: 'about', path: 'about' },
    { name: 'services', path: 'services' },
    { name: 'projects', path: 'projects' },
    { name: 'contact', path: 'contact' },
]

const Header = () => {
    return (
        <header className="bg-primary text-white py-4 sticky top-0">
            <div className="container mx-auto">
                <nav className='hidden lg:flex justify-between items-center gap-12'>

                    {/*logo*/}
                    <Logo/>

                    {/* links */}
                    <ul className='flex gap-8 '>
                        {links.map((link, index) => {
                            return (
                                <li key={index} className='font-primary font-semibold text-white text-sm uppercase tracking-[1.5]' >
                                    <ScrollLink
                                        to={link.path}
                                        smooth
                                        spy
                                        className='cursor-pointer'
                                        activeClass='text-accent'
                                    >
                                        {link.name}
                                    </ScrollLink>
                                </li>
                            )
                        })}
                    </ul>

                    {/* button */}
                    <button className='w-[190px] h-[48px] py-[5px] pl-[10px] pr-[5px] 
                    flex items-center justify-between min-w-[190px] bg-white group'>
                        <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary  text-sm uppercase'>Get a Quote</div>
                        <div className='w-9 h-9 bg-primary flex items-center justify-center'>
                            <RiArrowRightUpLine  className='text-white text-2xl
                             group-hover:rotate-45 transition-all duration-200 '/>
                        </div>
                    </button>
                </nav>

            </div>
        </header>
    )
}

export default Header