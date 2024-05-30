import React from 'react'
import Image from 'next/image'
import { BsTelephoneForward} from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import Link from 'next/link'
import Whatsapp from './Components/Whatsapp';
export default function Home() {
    return (<>


        <div className=''>
            <div className='mt-80 pl-10 text-slate-100 text-5xl md:text-8xl'>
                <h1>Home / Mobile </h1>
                <h1>Healthcare</h1>
                <p className=' text-xl md:text-3xl pb-10'> Get the care you need from a professional license nurse</p>
            </div>
            <div className=' pb-5  md:mb-0 pl-10'><button className='outline outline-2 text-slate-100 md:text-2xl p-3 md:py-7 px-10 bg-cyan-500 outline-offset-2 rounded-full outline-transparent'>
                <a href='https://wa.me/+6281274888687'>CALL NOW ON WHATSAPP</a>
            </button></div>
            <Whatsapp />
            <div className=' inset-0 bg-cyan-500 bg-opacity-50 z-0'>
                <Image

                    alt="Mountains"
                    src='/images/home-hero.jpg'
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: -5,

                    }}
                />
            </div>
        </div>

        <div className='  grid grid-col-1 md:grid-cols-2  md:mt-40 pt-5  h-full py-5 gap-7'>
            <div className=' pl-4 md:pl-7 pt-20 text-slate-700'>
                <h1 className=' text-5xl md:text-6xl font-bold  md:pb-2'>Dedicated to your  good health</h1>
                <p className='text-wrap py-5 text-xl'>Your well-being depends on your good health.<br /> My job is to ensure that your body is at its very best. </p>
                <p className='text-wrap text-xl'>
                    My goal is to enable you to move freely and without pain.<br /> I hold a university degree in related fields and advanced training.</p>
            </div>

            <div className=' pb-10 bg-gradient-to-r from-cyan-400 h-full w-full pl-10 rounded  md:rounded-l-full '>
                <h1 className=' text-3xl text-slate-700  pt-3 md:pl-40 '>Contact</h1>
                <p className='text-wrap text-slate-700  py-5 md:pl-40'>Relieving your pain is our priority.<br /> Send me a message and I’ll be in touch shortly.</p>
                <div className='py-4 md:px-40 text-slate-700'>
                    <BsTelephoneForward className='text-3xl' />
                    <p> Whatsapp +6281274888687</p>
                </div>

                <div className='py-2 md:px-40 text-slate-700'>
                    <FiMapPin className='text-3xl' />
                    <p>Bali, Indonesia</p>
                </div>

                <div className='md:py-5 md:px-40 text-slate-700'>
                    <FaRegEnvelope className='text-3xl' />
                    <p>care4ubali@gmail.com</p>
                </div>

            </div>
        </div>

        <div className='text-center  pt-10 pb-20'>
            <h1 className=' text-5xl md:text-8xl '>Services</h1>
            <p className='md:text-xl'> our goal is to free you from pain</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10'>
            <div>
                <Image
                    alt="Mountains"
                    src='/images/ivdrip.jpg'
                    width={400}
                    height={400}
                />
                <div className='text-center pr-5'>
                    <h1 className='text-2xl text-cyan-400'>IV DRIP TREATMENT</h1>
                    <p className='text-wrap text-xl'>IV Drip Treatment for: Dehydration, Bali belly, Fatigue,   Dengue Fever, Hangover, and Immune booster</p>
                </div>
            </div>

            <div>
                <Image
                    alt="Mountains"
                    src='/images/wound.jpg'
                    width={400}
                    height={400}
                />
                <div className='text-center pr-5'>
                    <h1 className='text-2xl text-cyan-400'>WOUNDS TREATMENT</h1>
                    <p className='text-wrap text-xl'>We treat all wounds from large to small</p>
                </div>
            </div>

            <div>
                <Image
                    alt="Mountains"
                    src='/images/postpar.jpg'
                    width={400}
                    height={400}
                />
                <div className='text-center pr-5'>
                    <h1 className='text-2xl text-cyan-400'>POSTPARTUM TREATMENT</h1>
                    <p className=' text-xl'> Bathing and care of Umbilical cord,<br /> baby massage, postpartum breast care.</p>
                </div>
            </div>
        </div>

        <div className='text-center py-20'><button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-sm py-5 px-20 md:text-3xl bg-cyan-300'>
            <Link href='/services'>see our full menu </Link></button>
        </div>

        <div className='flex  flex-col md:flex-row'>
            <Image
                alt="Mountains"
                src='/images/homabout.jpg'
                width={600}
                height={600} />
            <div className='bg-gradient-to-r from-slate-400'>
                <h1 className='text-5xl text-center py-10'>About us</h1>
                <p className=' text-2xl py-5 px-8'>We strive to improve your quality of life</p>
                <p className='text-wrap text-xl  px-8'>Our staff of Licensed Professional Nurses and Midwives are waiting to serve your needs</p>
                <button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-sm py-5 px-10 md:text-xl mx-10 my-10 bg-cyan-400 '>
                    <Link href='/about'>see our full menu </Link></button>
            </div>
        </div>

        <div className='flex items-center justify-center h-96 bg-fixed bg-[url(/images/parralex.jpg)] bg-cover bg-center pt-10'>
            <div>
                <h1 className='text-slate-100 text-5xl text-center'>Looking for a nurse?</h1>
                <p className='text-slate-100   text-xl text-center '>Book a free consultation</p>
                <button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-sm py-5 px-10 md:text-xl mx-10 my-10 bg-cyan-400 '>
                    <a href='https://wa.me/+6281274888687'>CALL NOW ON WHATSAPP</a></button>
            </div>
        </div>
    </>
    )
}
