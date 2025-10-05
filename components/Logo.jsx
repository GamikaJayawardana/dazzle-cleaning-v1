import React from 'react'
import { Link } from 'react-scroll'
import './Logo.css' // Import your CSS file

const Logo = () => {
  return (
    <div>
      <Link to="home" smooth={true} duration={500}> {/* 'to' prop is necessary for react-scroll */}
        <img src="/assets/logo.png" alt="Logo" className="logo-img" />    
      </Link>
    </div>
  )
}

export default Logo