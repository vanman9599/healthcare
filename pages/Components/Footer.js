import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4  bg-gradient-to-r from-cyan-400 h-full px-10'>
      <h1 className=' py-10 md:py-32 text-2xl md:text-xl text-wrap' >Our goal is to enable you to live a pain-free life, with full mobility.</h1>

      <div className='py-10 md:py-32'>
        <h1 className='text-2xl'>Services</h1>
        <ul>
          <li>IV Drip Treatment</li>
          <li>Wound Treatment</li>
          <li>Postpartum Care </li>
        </ul>
      </div>

      <div className='py-10 md:py-32'>
        <h1 className='text-2xl'>Quick Link</h1>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/services'>Services</Link></li>
          <li><Link href='/'>About</Link> </li>
        </ul>
      </div>

      <div className='py-10 md:py-32'>
        <h1 className='text-2xl'>Contact</h1>
        <p>Whatsapp +6281274888687</p>
        <p>care4u.indonesia@gmail.com</p>
        <p>Bali, Indonesia</p>
        <div className='flex flex-row gap-3'>
          
        </div>

      </div>

    </div>
  )
}
