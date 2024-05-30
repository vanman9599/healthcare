import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react';
export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };
    return (
        <div className='absolute top-0 w-full '>
            <div className='fixed bg-cyan-500  grid grid-cols-2 w-full h-20 md:h-20 '>
                <h1 className='font-bold text-2xl   mt-3 md:mt-5 pl-3  text-slate-100'>CARE4U <span className='font-thin'>Indonesia</span></h1>


                <button className="md:hidden text-white pr-3 ml-32" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? < GiHamburgerMenu /> : <h1 className='text-3xl'>x</h1>}
                </button>

                <ul className={`flex flex-col pr-5 text-slate-100 justify-end md:flex-row md:items-center  md:gap-5 absolute md:static top-12 left-0 w-full h-72 md:h-auto transition-all duration-300 ease-in-out ${isOpen ? 'bg-gradient-to-r from-cyan-400' : 'hidden'} md:flex`}>
                    <li className="px-10 text-xl pb-3 md:pb-0 hover:text-sky-400 text-slate-100  md:p-0">
                        <Link href="/" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className="px-10 text-xl pb-3 md:pb-0 hover:text-sky-400 text-slate-100 md:p-0">
                        <Link href="/about" onClick={handleLinkClick}>About</Link>
                    </li>
                    <li className="px-10 text-xl pb-3 md:pb-0 hover:text-sky-400 text-slate-100 md:p-0">
                        <Link href="/services" onClick={handleLinkClick}>Services</Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}
