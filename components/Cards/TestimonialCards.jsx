import React from 'react'

export default function TestimonialCards({ testimonialData }) {

    return (
        <div className="relative group">
            <img src="/images/sections/testimonial/quote.png" alt="" className="absolute -top-5 right-10 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className=" rounded-xl relative overflow-hidden group p-px group h-full w-full z-0">
                <div className="absolute top-0 right-0 w-full h-full rounded-xl bg-linear-to-r  group-hover:from-primary-red group-hover:to-transparent z-0 -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>

                <div className="bg-white/5 group-hover:bg-slate-700 flex flex-col gap-6 rounded-xl p-6 relative z-10 transition-all duration-150 h-full w-full">

                    <div className="flex justify-start gap-1.5">
                        <img src="/icons/starIcon.svg" alt="" className="w-[15px] h-[15px]" />
                        <img src="/icons/starIcon.svg" alt="" className="w-[15px] h-[15px]" />
                        <img src="/icons/starIcon.svg" alt="" className="w-[15px] h-[15px]" />
                        <img src="/icons/starIcon.svg" alt="" className="w-[15px] h-[15px]" />
                        <img src="/icons/starIcon.svg" alt="" className="w-[15px] h-[15px]" />
                    </div>

                    <p className="text-base text-white/60">
                        {testimonialData.review}
                    </p>

                    <div className="flex justify-start gap-2.5 mt-auto">
                        <div className="w-[30px] h-[30px] overflow-hidden rounded-full">
                            <img src={testimonialData.user.image} alt="" />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-white">{testimonialData.user.name}</p>
                            <p className="text-[10px] text-left text-white/60">
                                {testimonialData.user.position}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
