import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image';
import './logo.css' 

const Logo = () => {
  return (
    <div>
      
      <ScrollLink to="home" href="#home" smooth={true} duration={500}>
        <Image 
            src="/assets/logo.png" 
            alt="Dazzle Cleaning Melbourne Logo" 
            width={150} 
            height={63}
            priority 
        />    
      </ScrollLink>
    </div>
  )
}

export default Logo;