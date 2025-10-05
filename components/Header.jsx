"use client";

import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const links = [
    { name: 'home', path: 'home' },
    { name: 'about', path: 'about' },
    { name: 'services', path: 'services' },
    { name: 'projects', path: 'projects' },
    { name: 'contact', path: 'contact' },
]

const Header = () => {
  return (
    <header className="bg-[white] text-primary py-4 sticky top-0">
       <div className="container mx-auto">
        <ul className='flex gap-12 text-primary
        '>
           {links.map((link, index) => {
            return (
                <li key={index} >
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
        </div>
    </header>
  )
}

export default Header