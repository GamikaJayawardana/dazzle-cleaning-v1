import React from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'; 
import logoSrc from '../public/assets/logo.png'
import './logo.css' // Import your CSS file

const Logo = () => {
  return (
    <div>
      <Link to="home" smooth={true} duration={500}>
        {/* 3. Use the Image component */}
        <Image 
          src={logoSrc} 
          alt="Dazzle Cleaning Melbourne Logo" 
          width={150} 
          height={63}
          priority 
        />    
      </Link>
    </div>
  )
}

export default Logo