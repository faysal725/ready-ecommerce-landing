import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


// payment section
function PlanSection() {



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

            {/* Basic  */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-[#e5e5e7]/[0.92]">
                <p
                    className="text-xl font-semibold text-primary-black"
                >
                    Basic
                </p>
                <div className="space-y-[10px]">
                    <p className="text-[44px] font-semibold text-primary-red">$160</p>
                    <p
                        className="text-base text-left text-[#626262]"
                    >
                        Essential setup service
                    </p>
                </div>

                <div className="flex flex-col gap-[15px] flex-1">
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Full software installation</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Server configuration</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Domain setup</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> SSL certificate setup</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Payment gateway integration</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> SMS gateway setup</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Email configuration</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Demo data setup</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Custom branding</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Priority support</p>
                </div>

                <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg border border-primary-red cursor-pointer">
                    <p className="text-base font-medium text-center text-primary-red">
                        Buy Now</p>
                    <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </button>
            </div>


            {/* Advance  */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-[#e5e5e7]/[0.92]">
                <p
                    className="text-xl font-semibold text-primary-black"
                >
                    Advance
                </p>
                <div className="space-y-[10px]">
                    <p className="text-[44px] font-semibold text-primary-red">$399</p>
                    <p
                        className="text-base text-left text-[#626262]"
                    >
                        Professional setup package
                    </p>
                </div>

                <div className="flex flex-col gap-[15px] flex-1">
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Full software installation</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Server configuration</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Domain setup</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> SSL certificate setup</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Payment gateway integration</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> SMS gateway setup</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Email configuration</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Demo data setup</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Custom branding</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Priority support</p>
                </div>



                <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg border border-primary-red cursor-pointer">
                    <p className="text-base font-medium text-center text-primary-red">
                        Buy Now</p>
                    <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </button>
            </div>

            {/* Premiume */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl border border-[#e5e5e7]/92 bg-radial-[at_100%_20%] from-pink-700  to-primary-red to-50% relative overflow-hidden">
                <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-72 rotate-45 top-12 -right-[90px]">Recommended</span>
                <p
                    className="text-xl font-semibold text-white"
                >
                    Premium
                </p>
                <div className="space-y-[10px]">
                    <p className="text-[44px] font-semibold text-white">$199</p>
                    <p
                        className="text-base text-left text-white/80"
                    >
                        Complete solution with all features
                    </p>
                </div>

                <div className="flex flex-col gap-[15px] flex-1">
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Full software installation</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Server configuration</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Domain setup</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> SSL certificate setup</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Payment gateway integration</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> SMS gateway setup</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Email configuration</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Demo data setup</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Custom branding</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Priority support</p>
                </div>

                <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg cursor-pointer bg-white">
                    <p className="text-base font-medium text-center text-primary-red">
                        Buy Now</p>
                    <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </button>
            </div>
        </div>
    )
}

function InstallationSection() {

    return (
        <SectionContainer
            HeadingComponent={
                <Heading
                    headingText="Installation Service"
                    subHeadingText="Purchase your CodeCanyon license first to unlock these setup plans."
                    varient="light"
                />
            }
            mainComponent={<PlanSection />}
            backgroundColorClass="bg-white"
        />
    )
}

export default InstallationSection;