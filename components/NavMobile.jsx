"use client";

import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

import Logo from './Logo'
import Socials from './Socials';
import { Link as ScrollLink } from 'react-scroll'

import { RiMenu3Fill } from 'react-icons/ri'

const links = [
    { name: 'home', path: 'home' },
    { name: 'about', path: 'about' },
    { name: 'services', path: 'services' },
    { name: 'testimonials', path: 'testimonials' },
    { name: 'contact', path: 'contact' },
]

const NavMobile = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
                className='text-white flex items-center justify-center text-3xl'
                onClick={() => setIsOpen(true)}
            >
                <RiMenu3Fill />
            </SheetTrigger>

            <SheetContent className="bg-primary border-none text-white">
                <div className='flex flex-col pt-16 pb-8 items-center justify-between h-full'>
                    <SheetHeader>
                        <SheetTitle>
                            <Logo />
                        </SheetTitle>
                        <SheetDescription className="sr-only">
                            Navigation Menu

                        </SheetDescription>
                    </SheetHeader>

                    <ul className='w-full flex flex-col gap-10 justify-center text-center'>
                        {links.map((link, index) => {
                            return (
                                <li key={index} className='font-primary font-semibold text-white text-sm uppercase tracking-[1.5]' >
                                    <ScrollLink
                                        to={link.path}
                                        href={`#${link.path}`}
                                        smooth
                                        spy
                                        duration={500}
                                        className='cursor-pointer  '
                                        activeClass='text-accent'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </ScrollLink>
                                </li>
                            )
                        })}
                    </ul>

                    <Socials  containerStyles="flex justify-center items-center gap-8 mx-auto lg:mx-0" 
                              iconStyles="text-white text-2xl flex items-center justify-center" />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavMobile