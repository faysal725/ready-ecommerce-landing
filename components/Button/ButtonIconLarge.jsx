'use client'

import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function ButtonIconLarge({ name = "", seoClass = "", onClick = () => { }, children }) {

    return (
        <button
            onClick={() => onClick()}
            className={"h-14 px-[20px] bg-gradient-to-b from-[#D63384] via-primary-red to-primary-red rounded-lg inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom cursor-pointer " + seoClass}
        >
            <div className="text-base font-medium text-center text-white">
                {name}
            </div>
            {children}
        </button>
    )
}