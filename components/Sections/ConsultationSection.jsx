import { getCountries } from "@/lib/dataFetching/getCountries";
import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import ConsultationForm from "../Form/Container/ConsultationForm";



async function FormSection() {

    const countries = await getCountries()

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
                <ConsultationForm countryOption={countries} />
            </div>
            <div>
                <div className="flex flex-col gap-6">
                    <div
                        className="rounded-xl bg-white/8 border border-white/20 p-4 md:p-6 space-y-6 md:space-y-9"
                    >
                        <div className="space-y-2.5">
                            <p
                                className="text-2xl font-semibold text-white"
                            >
                                Chat With Us Now
                            </p>

                            <p className="text-base text-white/[0.86]">
                                Connect instantly via your preferred channel
                            </p>
                        </div>

                        <div className="flex flex-col items-start justify-start gap-4 md:gap-6">
                            {/* whats app */}
                            <a
                                href="https://wa.link/3om70h"
                                className="flex items-center justify-start gap-[15px] bg-[#25D366] rounded-xl w-full p-4"
                            >
                                <img
                                    src="/icons/socials/whatsapp.svg"
                                    alt=""
                                    className="w-[30px] h-[30px]"
                                />
                                <div>
                                    <p className="text-xl font-semibold text-start text-white">
                                        +8801711257498
                                    </p>
                                    <p className="text-base text-left text-white/[0.97]">
                                        WhatsApp Instant Chat
                                    </p>
                                </div>
                            </a>

                            {/* telegram */}
                            <a
                                href="https://wa.link/3om70h"
                                className="flex items-center justify-start gap-[15px] bg-[#18c7ff] rounded-xl w-full p-4"
                            >
                                <img
                                    src="/icons/socials/telegram.svg"
                                    alt=""
                                    className="w-[30px] h-[30px]"
                                />
                                <div>
                                    <p className="text-xl font-semibold text-start text-white">
                                        +8801711257498
                                    </p>
                                    <p className="text-base text-left text-white/[0.97]">
                                        Telegram Instant messaging
                                    </p>
                                </div>
                            </a>

                            {/* Live Chat */}
                            <a
                                href="https://wa.link/3om70h"
                                className="flex items-center justify-start gap-[15px] bg-primary-red rounded-xl w-full p-4"
                            >
                                <img
                                    src="/icons/socials/live-chat.svg"
                                    alt=""
                                    className="w-[30px] h-[30px]"
                                />
                                <div>
                                    <p className="text-xl font-semibold text-start text-white">
                                        Live Chat
                                    </p>
                                    <p className="text-base text-left text-white/[0.97]">
                                        Response in second
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-xl bg-radial-[at_100%_20%] from-pink-700  to-primary-red to-50% p-4 md:p-6 space-y-4 md:space-y-9">
                        <div className="flex flex-col items-start gap-2.5">
                            <p
                                className="text-2xl font-semibold text-left text-white"
                            >
                                Book a Strategy Meeting
                            </p>

                            <p className="text-base text-left text-white/[0.86]">
                                Prefer a detailed discussion? Choose a meeting time that fits
                                you.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <button
                                href="https://calendly.com/razinsoftltd/30min"
                                target="_blank"
                                className="flex justify-center items-center h-14 relative overflow-hidden w-full gap-2.5 px-5 py-3.5 rounded-lg bg-white/[0.07] border border-white/50"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <g clipPath="url(#clip0_2013_543)">
                                        <path
                                            d="M12.75 7.52925C9.85575 7.52925 7.5 9.88425 7.5 12.7792C7.5 15.6577 9.85575 18 12.75 18C15.6442 18 18 15.645 18 12.75C18 9.8715 15.6442 7.52925 12.75 7.52925ZM12.75 16.5C10.6823 16.5 9 14.8305 9 12.7792C9 10.7115 10.6823 9.02925 12.75 9.02925C14.8177 9.02925 16.5 10.6988 16.5 12.75C16.5 14.8177 14.8177 16.5 12.75 16.5ZM14.0303 12.9697C14.3235 13.263 14.3235 13.737 14.0303 14.0303C13.884 14.1765 13.692 14.25 13.5 14.25C13.308 14.25 13.116 14.1765 12.9697 14.0303L12.2197 13.2803C12.0787 13.1393 12 12.9487 12 12.75V11.25C12 10.836 12.3353 10.5 12.75 10.5C13.1647 10.5 13.5 10.836 13.5 11.25V12.4395L14.0303 12.9697ZM18 5.25V6.75C18 7.164 17.6647 7.5 17.25 7.5C16.8353 7.5 16.5 7.164 16.5 6.75V5.25C16.5 4.0095 15.4905 3 14.25 3H3.75C2.5095 3 1.5 4.0095 1.5 5.25V6H8.25C8.664 6 9 6.336 9 6.75C9 7.164 8.664 7.5 8.25 7.5H1.5V14.25C1.5 15.4905 2.5095 16.5 3.75 16.5H6.75C7.164 16.5 7.5 16.836 7.5 17.25C7.5 17.664 7.164 18 6.75 18H3.75C1.68225 18 0 16.3177 0 14.25V5.25C0 3.18225 1.68225 1.5 3.75 1.5H4.5V0.75C4.5 0.336 4.836 0 5.25 0C5.664 0 6 0.336 6 0.75V1.5H12V0.75C12 0.336 12.3353 0 12.75 0C13.1647 0 13.5 0.336 13.5 0.75V1.5H14.25C16.3177 1.5 18 3.18225 18 5.25Z"
                                            fill="white"
                                        ></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2013_543">
                                            <rect width="18" height="18" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p
                                    className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-white"
                                >
                                    Schedule a Meeting
                                </p>
                            </button>

                            <p className="text-sm text-center text-white/[0.56]">
                                Support Hours: Mon–Sat, 9 AM–6 PM (GMT+6, Asia/Dhaka)
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    )
}


export default function ConsultationSection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading headingText="Get Your Free Business Consultation" subHeadingText="The core conversion engine for your eCommerce success. Start your journey today." varient="dark" />
                }
                mainComponent={<FormSection />}
                backgroundColorClass="bg-deep-navy pt-[50px]"
            />
        </>
    );
}