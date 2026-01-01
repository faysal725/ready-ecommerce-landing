'use client'

import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function ButtonIconSmall({ name = "", seoClass = "", additionalClass = "", onClick = () => { }, children }) {

    return (
        <button
            onClick={() => onClick()}
            className={"h-10 px-5 bg-primary-red rounded-lg inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom cursor-pointer " + seoClass + additionalClass}
        >
            {children}
            <div className="text-xs font-medium text-center text-white">
                {name}
            </div>
        </button>
    )
}