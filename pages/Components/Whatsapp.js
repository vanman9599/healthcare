import React from 'react'
import Link from 'next/link'
export default function Whatsapp() {
    return (<div className='relative'>
        <div className='  fixed bottom-20 right-20 hidden md:block '>
            <button className='outline outline-2 outline-offset-2 outline-cyan-400 rounded-full py-5 px-10 md:text-xl mx-2 my-10 bg-cyan-500 '>
                <Link href='https://wa.me/+6281274888687'>Call us on WhatsApp </Link></button>
        </div>
    </div>
    )
}

