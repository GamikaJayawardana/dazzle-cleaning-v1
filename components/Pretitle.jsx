// Pretitle.jsx (Corrected and confirmed)
import React from 'react'

const Pretitle = ({ text, center }) => {
    return (
        // This is correct: it uses the 'center' prop to apply 'justify-center'
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : "justify-start"}`}>
            
            {/* Left Dot */}
            <div className='w-2 h-2 bg-accent'>

            </div>

            {/* Text */}
            <p className='font-primary text-primary tracking-[3.2px] uppercase'>{text}</p>

            {/* Right Dot */}
            <div className='w-2 h-2 bg-accent'></div>
            
        </div>
    )
}

export default Pretitle