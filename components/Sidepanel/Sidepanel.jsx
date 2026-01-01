'use client'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from 'clsx'
import styles from "./Sidepanel.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidepanel() {

    // hooks
    const currentPath = usePathname();
    const [showMenuBar, setShowMenuBar] = useState(false);
    const [currentMenu, setCurrentMenu] = useState('')

    function isCurrentPath(pathName) {
        return currentPath === pathName ? styles.select_underline : '';
    }

    return (
        <>
            <button onClick={() => setShowMenuBar(!showMenuBar)} className="w-10 h-10 flex justify-center items-center rounded cursor-pointer bg-pink-50">

                <Bars3Icon className="h-6 w-6 text-pink-500" />
            </button>


            {/* sidepanel  */}
            <div
                className={clsx("fixed h-full w-full transition-all duration-500  z-30  ease-in-out top-0 right-0 flex justify-end lg:hidden", showMenuBar ? 'translate-x-0 ' : 'translate-x-[100%]')}

            >

                <div onClick={() => setShowMenuBar(false)} className={clsx(" w-full h-full absolute z-0 transition-all duration-1000 ease-in-out", showMenuBar ? 'opacity-100' : 'opacity-0')}>

                </div>
                <div className={clsx("w-full sm:w-[50%] bg-white h-full transition-all duration-200 ease-in-out relative z-10 shadow-2xl ", showMenuBar ? 'translate-x-0' : 'translate-x-[100%]')}>

                    <button onClick={() => setShowMenuBar(false)} className="w-10 h-10 flex justify-center items-center rounded cursor-pointer bg-pink-50 absolute top-5 right-5 ">

                        <XMarkIcon className="h-6 w-6 text-pink-500" />
                    </button>

                    <ul className="flex flex-col items-center gap-6 px-4 h-full w-full mt-28 ">
                        <Link href="/"
                        className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/')}>Home</Link>
                        <Link href="/"
                        className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/features')}>features</Link>
                        <Link href="/"
                        className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/pricing')}>Pricing</Link>
                        <Link href="/"
                        className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/services')}>services</Link>
                        <Link href="/"
                        className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/demo')}>demo</Link>
                        <Link href="/"
                        className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/services')}>Help & Support</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}