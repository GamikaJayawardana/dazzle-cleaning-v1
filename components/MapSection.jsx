// components/MapSection.jsx
"use client";

import React from 'react';

const MapSection = () => {
  // IMPORTANT: Replace the src with YOUR Google Maps embed URL
  const mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20000.0!2d145.2300!3d-37.9900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzIyLjkiUyAxNDXCsDE1JzM1LjkiRSI!5e0!3m2!1sen!2sau!4v1678912345678!5m2!1sen!2sau";

  return (
    <div className="w-full bg-bglight">
      <div className="w-full">
       
        
        {/* Responsive iframe container */}
        <div className="relative w-full overflow-hidden" style={{ paddingTop: '30%' /* 16:9 Aspect Ratio (height / width * 100) */ }}>
          <iframe
            src={mapIframeSrc}
            width="100%"       // Set to 100% to fill the container
            height="100px"      // Set to 100% to fill the container
            style={{ border: 0, position: 'absolute', top: 0, left: 0 }} // Position to fill the padded container
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full" // Tailwind classes for full width and height
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;