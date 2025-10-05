"use client";
import { inView, useInView } from 'framer-motion';
import { useRef } from 'react';
import React from 'react'
import CountUp from 'react-countup';

const statsData = [
  {
    endCountNum: 99, endCountText: "%", title: "Client Satisfaction",
  },
  {
    endCountNum: 800, endCountText: "+", title: "Successful Projects",
  },
  {
    endCountNum: 500, endCountText: "+", title: "Happy Customers",
  },
  {
    endCountNum: 5, endCountText: "+", title: "Years of Experience",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {treshold: 0.2 });
  return (
    <div ref={ref} className="mt-0 xl:mt-0 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className='text-white flex flex-col items-center justify-between
        xl:flex-row h-full gap-12 text-center xl:text-left '>
          {statsData.map((item, index)=>{
          return (
            <div className='w-full' key={index}>
              <div className='text-5xl font-semibold '>
                {isInView && (<CountUp 
                  start={0} 
                  end={item.endCountNum} 
                  delay={0.4}
                  duration={2} 
                />)}
                <span>{item.endCountText}</span>
              </div>
              <p>{item.title}</p>

            </div>
          )
        })}</div>
      </div>
    </div>
  )
}

export default Stats