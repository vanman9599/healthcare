import React from 'react'
import { FaDroplet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { RiStethoscopeFill } from "react-icons/ri";
import { BiSolidDrink } from "react-icons/bi";
import { LuPackageOpen } from "react-icons/lu";
import { BiSolidInjection } from "react-icons/bi";
export default function ServiceMenu() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-8  px-10 md:px-24 py-20'>
                <div className='w-60 rounded-lg shadow-xl px-3  text-wrap'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-cyan-400 rounded-full w-8 p-2'><FaDroplet /></div>
                        <h1 className='text-xl'>Hydration Therapy</h1>
                    </div>
                    <h1 className='text-5xl py-5 text-cyan-500'>IDR 800K</h1>
                    <hr className='w-full' />
                    <p className='text-wrap py-2'>Basic IV to combat dehydration with saline solution,
                        electrolytes, and energy booster with Vitamin B Complex</p>
                </div>
                {/**second picture */}
                <div className='w-60 rounded-lg shadow-xl px-3  text-wrap'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-cyan-400 rounded-full w-8 p-2'><FaBed /></div>
                        <h1 className='text-xl'>Bali Belly Recovery</h1>
                    </div>
                    <h1 className='text-5xl py-5 text-cyan-500'>IDR 1M</h1>
                    <hr className='w-full' />
                    <p className='text-wrap py-2'>Replenish fluids and electrolytes from gastrointestinal illness.
                        IV includes electrolytes, Vitamin B, stomach protector,
                        and anti-nausea medicine if needed</p>
                </div>

                {/**third picture */}
                <div className='w-60 rounded-lg shadow-xl px-3  text-wrap'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-cyan-400 rounded-full w-8 p-2'><RiStethoscopeFill /></div>
                        <h1 className='text-xl'>Wellness Therapy</h1>
                    </div>
                    <h1 className='text-5xl py-5 text-cyan-500'>IDR 1.5M</h1>
                    <hr className='w-full' />
                    <p className='text-wrap py-2'>The powerhouse of Vitamins and antioxidants. Complete with
                        Vitamins A, B,Complex, C, D, E, plus antioxidant Gluthaione and zinc.. Best  all around immunity booster! </p>
                </div>

                {/**fouth picture */}
                <div className='w-60 rounded-lg shadow-xl px-3  text-wrap'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-cyan-400 rounded-full w-8 p-2'><BiSolidDrink /></div>
                        <h1 className='text-xl'>Active Life Therapy</h1>
                    </div>
                    <h1 className='text-5xl py-5 text-cyan-500'>IDR 1.35M</h1>
                    <hr className='w-full' />
                    <p className='text-wrap py-2'>Active Life Therapy
                        The best treatment for hangover, this versatile IV contains antioxidant gluthaione.
                        "The Mother of all anti-oxidants". For liver detoxification and skin brightening.
                        Any IV Meds available as an option</p>
                </div>

                {/**fifth picture */}
                <div className='w-60 rounded-lg shadow-xl px-3  text-wrap'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-cyan-400 rounded-full w-8 py-2 pr-2 '><LuPackageOpen className='text-3xl' /></div>
                        <h1 className='text-xl'>Dengue Recovery Package</h1>
                    </div>
                    <p className='text-3xl'>Package 1</p>
                    <h1 className='text-3xl py-2 text-cyan-500'>IDR 1.85M</h1>
                    <p className='text-3xl'>Package 2</p>
                    <h1 className='text-3xl py-2 text-cyan-500'>IDR 3M</h1>
                    <hr className='w-full' />
                    <p className='text-wrap py-2'>This is comprehensive therapy for dengue fever patients
                        We have 3 to 7 day packages. Call for options and pricing.</p>
                </div>
                {/**sixth picture */}
                <div className='w-60 rounded-lg shadow-xl px-3  text-wrap'>
                    <div className='flex flex-row gap-2'>
                        <div className='bg-cyan-400 rounded-full w-8 p-2'><BiSolidInjection /></div>
                        <h1 className='text-xl'>Single Vitamin Shot</h1>
                    </div>
                    <p className='text-xl'>VITAMIN B</p>
                    <h1 className='text-3xl py-5 text-cyan-500'>IDR 100K</h1>

                    <p className='text-xl'>VITAMIN C+ZINC</p>
                    <h1 className='text-3xl py-5 text-cyan-500'>IDR 250K</h1>

                    <p className='text-xl'>VITAMIN C</p>
                    <h1 className='text-3xl py-5 text-cyan-500'>IDR 150K</h1>

                    <p className='text-xl'>EXTRA FLUID</p>
                    <h1 className='text-3xl py-5 text-cyan-500'>IDR 60K</h1>

                </div>
            </div>
        </>
    )
}
