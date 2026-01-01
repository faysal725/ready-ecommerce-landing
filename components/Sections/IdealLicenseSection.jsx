import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Heading from "../Common/Heading";



function IdealLicenseSection() {


    return (
        <section className="pt-6 lg:pt-0 pb-[100px]">

            <div className="container flex flex-col items-center gap-6 lg:gap-[60px] overflow-hidden">
                <div className="flex flex-col items-center gap-5">

                    <span
                        className="w-fit relative p-2.5 lg:px-4 rounded-[50px] bg-red-light/30 border border-[#f8d5de]"
                    >
                        <p className="text-base text-center text-primary-red">Flexible Pricing</p>
                    </span>
                    <div className="relative">
                        <img src="/icons/sections/idealLicense/arrow.svg" alt="" className="absolute h-24 -top-0 -right-20" />
                        <Heading
                            headingText="Find Your Ideal License"
                            subHeadingText="Choose the plan that aligns with your requirements."
                            varient="light"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:px-6">

                    {/* redular license  */}
                    <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-[#e5e5e7]/92">
                        <p
                            className="text-xl font-semibold text-primary-black"
                        >
                            Regular License
                        </p>
                        <div className="space-y-[10px]">
                            <p className="text-[44px] font-semibold text-primary-red">$39 <span className="text-lg text-left text-[#626262] font-normal">one-time</span></p>
                            <p
                                className="text-base text-left text-[#626262]"
                            >
                                Perfect for getting started
                            </p>
                        </div>

                        <div className="flex flex-col gap-[15px]">
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Lifetime source code.</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> One-time payment</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> No hidden charges</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Full software installation</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Free payment gateway setup</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Software documentation</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Lifetime free updates</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Admin, vendor & delivery boy panel</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Android user app included</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Monthly support</p>
                            <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> iOS version not included</p>
                        </div>

                        <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg border border-primary-red cursor-pointer">
                            <p className="text-base font-medium text-center text-primary-red">
                                Buy Regular License</p>
                            <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                        </button>
                    </div>

                    {/* extended license */}
                    <div className="flex flex-col gap-6 p-6 rounded-2xl border border-[#e5e5e7]/92 bg-[url(/images/sections/idealLicense/bg.png)] bg-no-repeat bg-cover bg-top-right relative overflow-hidden">
                        <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-72 rotate-45 top-7 -right-[110px] lg:top-12 lg:-right-[90px]">Most Popular</span>
                        <p
                            className="text-xl font-semibold text-white"
                        >
                            Extended License
                        </p>
                        <div className="space-y-[10px]">
                            <p className="text-[44px] font-semibold text-white">$199 <span className="text-lg text-left text-white/80 font-normal">one-time</span></p>
                            <p
                                className="text-base text-left text-white/80"
                            >
                                Complete solution with all features
                            </p>
                        </div>

                        <div className="flex flex-col gap-[15px]">
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Lifetime source code.</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> One-time payment</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> No hidden charges</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Full software installation</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Free payment gateway setup</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Software documentation</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Lifetime free updates</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Admin, vendor & delivery boy panel</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Android + iOS user apps</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> All features unlocked</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Monthly support</p>
                        </div>

                        <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg  bg-white  cursor-pointer">
                            <p className="text-base font-medium text-center text-primary-red">
                                Buy Regular License</p>
                            <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default IdealLicenseSection;