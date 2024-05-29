import React from 'react'
import Image from 'next/image'
import { BsTelephoneForward } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
export default function Home() {
    return (<>


        <div className=''>
            <div className='mt-80 pl-10 text-slate-100 text-5xl md:text-8xl'>
                <h1>Home / Mobile </h1>
                <h1>Healthcare</h1>
                <p className=' text-xl md:text-3xl pb-10'> Get the care you need from a professional license nurse</p>
            </div>
            <div className=' pb-5  md:mb-0 pl-10'><button className='outline outline-2 text-slate-100 md:text-2xl p-3 md:py-7 px-10 bg-cyan-500 outline-offset-2 rounded-full outline-transparent'>
                <a href='https://wa.me/+2347059935180'>CALL NOW ON WHATSAPP</a>
            </button></div>
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
            <h1 className='text-8xl '>Services</h1>
            <p className='text-xl'> our goal is to free you from pain</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10'>
            <div>
                <Image
                    alt="Mountains"
                    src='/images/ivdrip.jpg'
                    width={300}
                    height={300}
                />
                <h1>IV DRIP TREATMENT</h1>
                <p className='text-prettier text-xl'>IV Drip Treatment for: Dehydration, Bali belly, Fatigue, <br />  Dengue Fever, Hangover, and Immune booste</p>
            </div>

            <div>
                <Image
                    alt="Mountains"
                    src='/images/wound.jpg'
                    width={300}
                    height={300}
                />
                <h1>WOUNDS TREATMENT</h1>
                <p className='text-wrap text-xl'>We treat all wounds from large to small</p>
            </div>

            <div>
                <Image
                    alt="Mountains"
                    src='/images/postpar.jpg'
                    width={300}
                    height={300}
                />
                <div className='text-wrap'>
                    <h1>POSTPARTUM TREATMENT</h1>
                    <p className='text-justify text-xl'> Bathing and care of Umbilical cord,<br /> baby massage, postpartum breast care.</p>
                </div>
            </div>
        </div>
    </>
    )
}
