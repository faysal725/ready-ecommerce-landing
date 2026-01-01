import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Herosection() {
    return (
        <section className='min-h-screen bg-[url(/images/sections/herosection/bg.png)] bg-bottom bg-cover bg-no-repeat'>
            <div className='container pt-[60px] flex flex-col items-center gap-6 relative'>
                <div className=' absolute top-0 -right-20 w-full h-full z-0 flex justify-center items-center'>
                    <img src="/images/sections/herosection/arrow.png" alt="" className='w-[125px] h-auto translate-x-80'/>
                </div>
                <div className='w-full flex flex-col items-center relative z-10'>
                    <p className='text-[28px]  md:text-5xl font-bold text-center leading-snug md:leading-16 text-white'> Launch a fully scalable <span className='text-[#fc0]'>multi-vendor</span> eCommerce platform</p>

                    <p
                        className="text-sm md:text-2xl font-medium text-center text-white/[0.83] py-4 md:pt-6 md:pb-10"
                    >
                        Complete SaaS solution with powerful tools for vendors, customers, and delivery partners.
                        Everything you need in one platform.
                    </p>

                    <button className='max-w-[228px] w-full h-14 relative overflow-hidden flex justify-center items-center gap-2.5 px-5 rounded-lg cursor-pointer border border-white'>
                        <PlayCircleIcon className="h-7 w-7 text-white" />
                        <p className="text-base font-medium text-center text-white">
                            Explore The Demo
                        </p>
                    </button>
                </div>
                <div className='w-full h-full flex justify-center items-center relative z-10'>
                    <img src="/images/sections/herosection/heroImg.png" alt="" className='object-contain' />
                </div>
            </div>
        </section>
    )
}
