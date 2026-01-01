'use client'

import Link from "next/link";
import styles from "./Navbar.module.css"
import { usePathname } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'
import { useState } from "react";
import ButtonIconSmall from "../Button/ButtonIconSmall";
import clsx from "clsx";

// menu container
function FeatureMenu() {


    return (
        <div className="min-w-2xl rounded-bl-2xl rounded-br-2xl p-6 shadow-2xl bg-white grid grid-cols-2 gap-6 max-w-3xl transition-all duration-500">

            <div className="flex flex-col gap-6">

                {/* card 1 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer max-h-[115px] overflow-hidden hover:max-h-full">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <p className="text-base   text-[#2b2424]">Super Admin Panel</p>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>

                        <ButtonIconSmall name="Explore" >
                            <img src="/icons/menu/play.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>

                {/* card 2 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer max-h-[115px] overflow-hidden hover:max-h-full">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <p className="text-base   text-[#2b2424]">User Website</p>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>

                        <ButtonIconSmall name="Explore" >
                            <img src="/icons/menu/play.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>


                {/* card 3 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer max-h-[115px] overflow-hidden hover:max-h-full">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <p className="text-base   text-[#2b2424]">User App</p>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>

                        <ButtonIconSmall name="Explore" >
                            <img src="/icons/menu/play.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {/* card 4 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer max-h-[115px] overflow-hidden hover:max-h-full">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <div className="flex justify-start gap-1.5">
                            <p className="text-base   text-[#2b2424]">Seller App</p>

                            <span className="h-5 px-2 relative gap-2.5 rounded-[40px] bg-[#fc0] text-[10px] font-medium text-center text-black flex items-center">Add-On</span>
                        </div>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>

                        <ButtonIconSmall name="Explore" >
                            <img src="/icons/menu/play.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>

                {/* card 5 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer max-h-[115px] overflow-hidden hover:max-h-full">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <div className="flex justify-start gap-1.5">
                            <p className="text-base   text-[#2b2424]">Delivery Man App</p>

                            <span className="h-5 px-2 relative gap-2.5 rounded-[40px] bg-[#fc0] text-[10px] font-medium text-center text-black flex items-center">Add-On</span>
                        </div>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>

                        <ButtonIconSmall name="Explore" >
                            <img src="/icons/menu/play.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>


                {/* card 6 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer max-h-[100px] overflow-hidden hover:max-h-full">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <div className="flex justify-start gap-1.5">
                            <p className="text-base   text-[#2b2424]">Purchase Extension</p>

                            <span className="h-5 px-2 relative gap-2.5 rounded-[40px] bg-[#fc0] text-[10px] font-medium text-center text-black flex items-center">Add-On</span>
                        </div>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Advanced purchase and stock management module.</p>

                        <ButtonIconSmall name="Explore" >
                            <img src="/icons/menu/play.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>
            </div>


        </div>
    )
}

function PricingMenu() {


    return (
        <div className="w-xl lg:w-3xl xl:w-5xl rounded-bl-2xl rounded-br-2xl p-6 shadow-2xl bg-white  transition-all duration-500 space-y-6">

            <p className="text-lg font-semibold text-left text-[#24262d]"
            >
                Simple, Transparent Pricing
            </p>
            <div className="grid grid-cols-3 gap-6">

                {/* card 1 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <p className="text-base   text-[#2b2424]">Super Admin Panel</p>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>

                        <button className="h-10 relative overflow-hidden gap-[5px] cursor-pointer rounded-lg flex justify-center items-center px-4 bg-gradient-to-br from-primary-red to-pink-600 border border-primary-red transition-all duration-200 group-hover:from-white group-hover:to-white ">
                            <p className="text-xs font-medium text-center transition-all duration-200 text-white group-hover:text-primary-red">Get Started</p>
                            <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-primary-red" />
                        </button>

                    </div>
                </div>


                {/* card 2 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <p className="text-base   text-[#2b2424]">Super Admin Panel</p>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>


                        <button className="h-10 relative overflow-hidden gap-[5px] cursor-pointer rounded-lg flex justify-center items-center px-4 bg-gradient-to-br from-primary-red to-pink-600 border border-primary-red transition-all duration-200 group-hover:from-white group-hover:to-white ">
                            <p className="text-xs font-medium text-center transition-all duration-200 text-white group-hover:text-primary-red">Get Started</p>
                            <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-primary-red" />
                        </button>

                    </div>
                </div>


                <div className="row-span-2 bg-[url(/images/menu/pricing-bg.png)] bg-cover bg-no-repeat rounded-lg p-6 space-y-6">
                    <div className="space-y-4">
                        <p
                            class="text-2xl font-semibold text-white"
                        >
                            Our Development Product
                        </p>
                        <p class=" text-[15px] text-left text-white/[0.83]">
                            A robust core development suite designed for building, managing, and scaling your platform.
                        </p>
                    </div>

                    <button className="h-10 relative overflow-hidden gap-[5px]  rounded-lg flex justify-center items-center px-4 cursor-pointer bg-white">
                        <p className="text-xs font-medium text-center text-primary-red">Explore Products</p>
                        <ArrowRightIcon className="w-4 h-4 text-primary-red" />
                    </button>
                </div>


                {/* card 3 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <p className="text-base   text-[#2b2424]">Super Admin Panel</p>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>


                        <button className="h-10 relative overflow-hidden gap-[5px] cursor-pointer rounded-lg flex justify-center items-center px-4 bg-gradient-to-br from-primary-red to-pink-600 border border-primary-red transition-all duration-200 group-hover:from-white group-hover:to-white ">
                            <p className="text-xs font-medium text-center transition-all duration-200 text-white group-hover:text-primary-red">Get Started</p>
                            <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-primary-red" />
                        </button>

                    </div>
                </div>



                {/* card 4 */}
                <div className=" w-full  p-4 rounded-xl border-[1.3px] border-[#e9ecef]/60 flex items-start gap-[15px] group transition-all duration-500 hover:bg-[#fff4f7] cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <div>
                        <p className="text-base   text-[#2b2424]">Super Admin Panel</p>
                        <p className="text-sm  text-[#2b2424]/60 pb-4 pt-1.5">Control everything with real-time system insights and analytics.</p>


                        <button className="h-10 relative overflow-hidden gap-[5px] cursor-pointer rounded-lg flex justify-center items-center px-4 bg-gradient-to-br from-primary-red to-pink-600 border border-primary-red transition-all duration-200 group-hover:from-white group-hover:to-white ">
                            <p className="text-xs font-medium text-center transition-all duration-200 text-white group-hover:text-primary-red">Get Started</p>
                            <ArrowRightIcon className="w-4 h-4 text-white group-hover:text-primary-red" />
                        </button>

                    </div>
                </div>


            </div>


        </div>
    )
}

function HelpMenu() {


    return (
        <div className="flex justify-end">

            <div className="w-[361px] rounded-bl-2xl rounded-br-2xl p-6 shadow-2xl   transition-all duration-500 flex flex-col gap-4 bg-white">

                {/* card 1 */}
                <div className="p-4 flex justify-start items-center gap-[15px] rounded-xl transition-all duration-200 hover:bg-[#fff4f7] border-[1.3px] border-[#e9ecef]/60 cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <p className="text-base font-medium text-left text-[#24262d]">Super Admin Panel</p>
                </div>

                {/* card 2 */}
                <div className="p-4 flex justify-start items-center gap-[15px] rounded-xl transition-all duration-200 hover:bg-[#fff4f7] border-[1.3px] border-[#e9ecef]/60 cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <p className="text-base font-medium text-left text-[#24262d]">About Us</p>
                </div>


                {/* card 3 */}
                <div className="p-4 flex justify-start items-center gap-[15px] rounded-xl transition-all duration-200 hover:bg-[#fff4f7] border-[1.3px] border-[#e9ecef]/60 cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <p className="text-base font-medium text-left text-[#24262d]">Contact Us</p>
                </div>


                {/* card 4 */}
                <div className="p-4 flex justify-start items-center gap-[15px] rounded-xl transition-all duration-200 hover:bg-[#fff4f7] border-[1.3px] border-[#e9ecef]/60 cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <p className="text-base font-medium text-left text-[#24262d]">Create Ticket</p>
                </div>

                {/* card 4 */}
                <div className="p-4 flex justify-start items-center gap-[15px] rounded-xl transition-all duration-200 hover:bg-[#fff4f7] border-[1.3px] border-[#e9ecef]/60 cursor-pointer">
                    <img src="/icons/menu/admin.svg" alt="" className="w-7 h-7" />
                    <p className="text-base font-medium text-left text-[#24262d]">Blog</p>
                </div>


            </div>
        </div>
    )
}


function MegaMenuContainer({ currentMenuName }) {


    return (
        <>
            {currentMenuName == 'features' && <FeatureMenu />}
            {currentMenuName == 'pricing' && <PricingMenu />}
            {currentMenuName == 'help' && <HelpMenu />}
        </>
    )
}

export default function NavLinks() {

    // hooks
    const currentPath = usePathname();
    const [open, setOpen] = useState(false)
    const [currentMenu, setCurrentMenu] = useState('')

    const currentMenuUnderlineClasses = "after:absolute after:w-full after:h-[3.5px] after:bg-primary-red after:bottom-0 after:rounded-tl-[5px] after:rounded-tr-[5px] after:opacity-0 after:opacity-100"

    function isCurrentPath(pathName) {
        return currentPath === pathName ? styles.select_underline : '';
    }
    return (
        <div onMouseLeave={() => {
            setOpen(false)
            setCurrentMenu('')
        }}
            className="flex justify-between relative">
            <div onMouseLeave={() => {
                setOpen(false)
                setCurrentMenu('')
            }} className=" inline-flex flex-col justify-center items-center h-[88px]">
                <div className="inline-flex justify-center items-center gap-1">
                    <Link
                        href="/"
                        className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/')}
                    >
                        Home
                    </Link>
                </div>
            </div>

            {/* features */}
            <div className={clsx(" inline-flex justify-center items-center gap-1 h-[88px] transition-all duration-150 relative  ", currentMenu == 'features' && currentMenuUnderlineClasses)}>
                <div onMouseEnter={() => {
                    setOpen(true)
                    setCurrentMenu('features')
                }}

                    className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/features')}
                >
                    features
                </div>
            </div>


            {/* Pricing */}
            <div className={clsx(" inline-flex justify-center items-center gap-1 h-[88px] transition-all duration-150 relative  ", currentMenu == 'pricing' && currentMenuUnderlineClasses)}>
                <div onMouseEnter={() => {
                    setOpen(true)
                    setCurrentMenu('pricing')
                }}

                    className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/pricing')}
                >
                    Pricing
                </div>
            </div>



            {/* services */}
            <div onMouseLeave={() => {
                setOpen(false)
                setCurrentMenu('')
            }}
                className=" inline-flex justify-center items-center gap-1 h-[88px] ">
                <Link
                    href="/services/purchase"
                    className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/services')}

                >
                    services
                </Link>
            </div>


            {/* demo */}
            <div onMouseLeave={() => {
                setOpen(false)
                setCurrentMenu('')
            }} className=" inline-flex justify-center items-center gap-1 h-[88px] ">
                <Link
                    href="/demo"
                    className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/demo')}

                >
                    demo
                </Link>
            </div>


            {/* Help & Support */}
            <div className={clsx(" inline-flex justify-center items-center gap-1 h-[88px] transition-all duration-150 relative  ", currentMenu == 'help' && currentMenuUnderlineClasses)}>
                <div onMouseEnter={() => {
                    setOpen(true)
                    setCurrentMenu('help')
                }}

                    className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/help')}
                >
                    Help & Support
                </div>
            </div>



            {/* mega menu */}
            <Transition show={open}>

                <div className="transition duration-300 ease-in data-closed:opacity-0 absolute left-0 bottom-0 translate-y-full w-full">
                    <MegaMenuContainer currentMenuName={currentMenu} />
                </div>

            </Transition>
        </div>
    )
}