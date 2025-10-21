import React from 'react'
import Link from 'next/link'
import {
    RiFacebookFill,
    RiInstagramFill,
    RiWhatsappFill,
    RiTwitterFill
} from 'react-icons/ri'

const socials = [
    { icon: <RiFacebookFill />, path: "#" },
    { icon: <RiInstagramFill />, path: "#" },
    { icon: <RiTwitterFill />, path: "#" },
    { icon: <RiWhatsappFill />, path: "#" }
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
    <div className={`${containerStyles}`}>
        {socials.map((item, index) => {
            return (<Link 
                href={item.path} 
                key={index} 
                className={`${iconStyles}`} 
                aria-label={item.name}>
                {item.icon}
            </Link>)
        })}
    </div>
    )
}
export default Socials;