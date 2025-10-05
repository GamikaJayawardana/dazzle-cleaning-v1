"use client";

import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

import Logo from './Logo'
import Socials from './Socials';
import {Link as ScrollLink} from 'react-scroll'

import { RiMenu3Fill } from 'react-icons/ri'

const links = [
    { name: 'home', path: 'home' },
    { name: 'about', path: 'about' },
    { name: 'services', path: 'services' },
    { name: 'projects', path: 'projects' },
    { name: 'contact', path: 'contact' },
]

const NavMobile = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
            <RiMenu3Fill className='text-white flex items-center justify-center text-3xl'/>
        </SheetTrigger>
    </Sheet>
  )
}

export default NavMobile