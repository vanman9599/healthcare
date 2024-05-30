import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMapPin } from "react-icons/fi";
import { TbTie } from "react-icons/tb";
import { FaRegFlag } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import Whatsapp from './Components/Whatsapp';
export default function About() {


    return (
        <>
            <div className=' bg-cyan-500 w-full h-64 '>
           
                <h1 className=' pt-24  px-5 text-5xl text-slate-100'>ABOUT</h1>
                <hr className='w-20 h-1    mt-4 ml-5 bg-slate-100 outline outline-transparent' />
            </div>
            <div className='flex flex-col md:flex-row gap-10 py-20 px-10'>
                <Image
                    alt="Mountains"
                    src='/images/abouthero.jpg'
                    width={700}
                    height={800}
                />
                <div className='text-wrap px-8'>
                    <h1 className='text-5xl'>Hello,</h1>
                    <hr className='w-20 h-1 my-5 bg-cyan-200 outline outline-transparent' />
                    <p className='text-xl py-5 '>We are glad you took the time to visit us on the internet.
                        We are a staff of Licensed Professional nurses and would be happy to assist you.
                        We guarantee our professional nurses will leave give you the best care possible.</p>
                    <button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-sm py-5 px-10 md:text-xl mx-2 my-10 bg-cyan-400 '>
                        <Link href='/services'>BE IN TOUCH </Link></button>
                </div>
            </div>
<Whatsapp />
            <div className='bg-gradient-to-r from-slate-300 grid grid-cols-1 md:grid-cols-2 h-full w-full mb-0 pb-10 md:mb-0'>
                <div className='px-20 pt-10 text-wrap'>
                    <div className='bg-cyan-500 rounded-full w-10'>
                        <SlBadge className='text-4xl p-2 ' /> </div>
                    <h1 className='text-xl'>Experience</h1>

                    <p>With more than 10 years in the field ,you’ll get the treatment you need.</p>
                </div>


                <div className='px-10 pt-10 text-wrap'>
                    <div className='bg-cyan-500 rounded-full w-10'>
                        <TbTie className='text-4xl p-2' /> </div>
                    <h1 className='text-xl'>Professional</h1>

                    <p>We are trained and certified, and attend workshops on a regular basis.</p>
                </div>

                <div className='px-20 pt-10 text-wrap'>
                    <div className='bg-cyan-500 rounded-full w-10 '>
                        <FaRegFlag className='text-4xl  p-2' /> </div>
                    <h1 className='text-xl'>Insurance</h1>

                    <p>You’ll receive complete documentation for full insurance compliance.</p>
                </div>

                <div className='px-10 pt-10 text-wrap'>
                    <div className='bg-cyan-500 rounded-full w-10'>
                        <FiMapPin className='text-4xl p-2' /> </div>
                    <h1 className='text-xl'>Accessibility</h1>

                    <p>No need to go anywhere! We come to you.</p>
                </div>
            </div>
        </>
    )
}
