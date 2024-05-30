import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ServiceMenu from './Components/ServiceMenu'
import Whatsapp from './Components/Whatsapp'
export default function Services() {
    return (
        <>
            <div className=' bg-cyan-500 w-full h-64  '>
                <h1 className=' pt-24  px-5 text-5xl text-slate-100'>Services</h1>
                <hr className='w-20 h-1    mt-4 ml-5 bg-slate-100 outline outline-transparent' />
            </div>
            {/** first pic */}
            <div className='flex flex-col md:flex-row  px-2 md:px-20 py-10'>
                <h1 className='text-6xl font-bold text-cyan-400'> 01</h1>
                <div>
                    <h1 className=' text-5xl font-bold'>IV Drip Treatment</h1>
                    <p className='py-2'>Our goal is to get you healthy!</p>
                </div>
            </div>
            <div className='flex  flex-col md:flex-row gap-10   md:px-20'>
                <Image
                    alt="Mountains"
                    src='/images/ivdrip.jpg'
                    width={400}
                    height={500}
                />
                <div className='px-5'>
                    <p className='text-wrap '>We do IV Drip Treatment for: Dehydration, <br />
                        Bali belly, Fatigue, Dengue Fever, Hangover, and Immune booster. <br />See our menu below</p>
                    <button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-full py-5 px-10 md:text-xl mx-2 my-10  '>
                        <a href='https://wa.me/+6281274888687'>GET IN TOUCH </a></button>
                </div>
            </div>
            <Whatsapp />

            {/**second picture */}

            <div className='flex  flex-col md:flex-row justify-end px-2 md:px-20 py-10'>
                <h1 className='text-6xl font-bold text-cyan-400'> 02</h1>
                <div>
                    <h1 className='text-5xl font-bold'>Wound Treatment</h1>
                    <p className='py-2'>Professionally trained and certified</p>
                </div>
            </div>
            <div className='flex  flex-col md:flex-row justify-end gap-10 md:px-20'>
                <div className='pt-6 pl-3'>
                    <p className='text-wrap'>We treat all wounds from small to large. <br />Our careful nurses will have you healed in no time!</p>
                    <button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-full py-5 px-10 md:text-xl mx-2 my-10  '>
                        <Link href='https://wa.me/+6281274888687'>GET IN TOUCH </Link></button>
                </div>
                <Image
                    alt="Mountains"
                    src='/images/wound.jpg'
                    width={400}
                    height={500}
                />
            </div>

            {/** third picture */}
            <div className='flex  flex-col md:flex-row  px-2 md:px-20 py-10'>
                <h1 className='text-6xl font-bold text-cyan-400'> 03</h1>
                <div>
                    <h1 className='text-5xl font-bold'>Postpartum Care</h1>
                    <p className='py-2'>Your rehabilitation starts with a proactive approach</p>
                </div>
            </div>
            <div className='flex  flex-col md:flex-row  gap-10   md:px-20'>
                <Image
                    alt="Mountains"
                    src='/images/postpar.jpg'
                    width={400}
                    height={500}
                />
                <div className='pt-10 px-5' >
                    <p className='text-wrap '>We offer a full range of postpartum treatment <br />including bathing and care of umbilical cord, <br />baby massage, postpartum breast care.</p>
                    <button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-full py-5 px-10 md:text-xl mx-2 my-10  '>
                        <Link href='https://wa.me/+6281274888687'>CALL NOW </Link></button>
                </div>
            </div>


            {/**fourth picture */}
            <div className='flex flex-col md:flex-row justify-end px-2 md:px-20 py-10'>
                <h1 className='text-6xl font-bold text-cyan-400'> 04</h1>
                <div>
                    <h1 className=' text-5xl font-bold'>Doctor consultation</h1>
                    <p className='py-2'>Did we mention we are have General Practitioners on staff?</p>
                </div>
            </div>
            <div className='flex  flex-col md:flex-row justify-end gap-10  md:px-20'>
                <div className='pt-10 px-5'>
                    <p className='text-wrap'>Consult with our staff General Practictioner  via Whatsapp. <br />Please download and complete Medical <br />Consent Form prior to consultation.</p>
                    <button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-full py-5 px-10 md:text-xl mx-2 my-10  '>
                        <Link href='https://wa.me/+6281274888687'>CALL NOW </Link></button>
                </div>
                <Image
                    alt="Mountains"
                    src='/images/doctorconsult.jpg'
                    width={400}
                    height={500}
                />
            </div>
            <div className='text-center pt-20'>
                <h1 className='text-6xl hover:text-slate-300'>MENU</h1>
            </div>
            <ServiceMenu />
        </>
    )
}

