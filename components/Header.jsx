"use client";

import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Logo from './Logo';
import BtnQuote from './BtnQuote';
import NavMobile from './NavMobile';

const links = [
    { name: 'home', path: 'home' },
    { name: 'about', path: 'about' },
    { name: 'services', path: 'services' },
    { name: 'testimonials', path: 'testimonials' },
    { name: 'contact', path: 'contact' },
]

const Header = () => {
    return (
        <header className="bg-primary text-white py-4">
            <div className="container mx-auto">
                <nav className='flex justify-between items-center gap-12'>

                    {/*logo*/}
                    <Logo />

                    <div className='hidden xl:flex justify-between items-center gap-12'>
                        {/* links */}
                        <ul className='flex gap-8 '>
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className='font-primary font-semibold text-white text-sm uppercase tracking-[1.5]
                                hover:underline decoration-secondary underline-offset-8 decoration-4 transition-all duration-300' >
                                        <ScrollLink
                                            to={link.path}
                                            href={`#${link.path}`}
                                            smooth
                                            spy
                                            className='cursor-pointer  '
                                            activeClass='text-accent'
                                        >
                                            {link.name}
                                        </ScrollLink>
                                    </li>
                                )
                            })}
                        </ul>

                        {/* button */}
                        <BtnQuote />
                    </div>

                    <div className="xl:hidden">
                        <NavMobile />
                    </div>

                </nav>

            </div>
        </header>
    )
}

export default Header