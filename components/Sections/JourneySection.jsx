import clsx from "clsx";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


// payment section
function Content() {


    const journeyData = [
        { step: 1, title: "Explore the Demo", description: "Click View Demo to preview the full system. Experience the interface, test the features, and see how smoothly everything works.", imgSrc: "/icons/sections/journey/spaceship.svg", },
        { step: 2, title: "Purchase From CodeCanyon", description: "Buy Ready eCommerce on CodeCanyon and follow the documentation for setup guidance it includes on the deliverables.", imgSrc: "/icons/sections/journey/leaf.svg", },
        { step: 3, title: "Install & Configure", description: "Set up the app or website on your server. Install, configure, and customize it according to your business needs.", imgSrc: "/icons/sections/journey/gear.svg", },
        { step: 4, title: "Set Up Your Business", description: "Invite vendors, add products, and prepare your marketplace structure before going live and automation", imgSrc: "/icons/sections/journey/gear-check.svg", },
        { step: 5, title: "Start Earning", description: "Once everything is ready, launch your platform and begin generating revenue through multiple business channels.", imgSrc: "/icons/sections/journey/coin.svg", },
    ]
    return (
        <div className="grid grid-cols-12 gap-6 w-full">

            <div className="col-span-12  lg:col-span-7 flex items-center">
                <img src="/images/sections/journey/bar.png" alt="" className="w-full h-fit object-contain" />
            </div>
            <div className="col-span-12  lg:col-span-5">
                {
                    journeyData.map((journeyInfo, index) => (
                        <div key={journeyInfo.step} className="flex md:grid md:grid-cols-5 gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-[76px] h-[76px] rounded-full bg-primary-red flex justify-center items-center shadow-lg shadow-primary-red relative">
                                    <img src={journeyInfo.imgSrc} alt="" />

                                    <span className="border-2 border-primary-red text-primary-red w-8 h-8 absolute -top-1 -right-1 rounded-full flex justify-center items-center text-lg font-medium  bg-white">{journeyInfo.step}</span>
                                </div>
                                <div className={clsx("flex flex-col text-md font-thin text-red-300", journeyData.length - 1 === index ? 'hidden' : '')}>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                </div>
                            </div>
                            <div className="col-span-4 space-y-2.5">
                                <p
                                    className="text-lg md:text-xl font-semibold  text-primary-black"
                                >
                                    {journeyInfo.title}
                                </p>

                                <p className="text-xs md:text-base  text-[#626262]">

                                    {journeyInfo.description}
                                </p>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function JourneySection() {

    return (
        <SectionContainer
            HeadingComponent={
                <Heading
                    headingText="Launch Your Success Journey"
                    subHeadingText="Empower Your Business with Cutting-Edge Tech and Seamless Setup"
                    varient="light"
                />
            }
            mainComponent={<Content />}
            backgroundColorClass="bg-white py-6 lg:pt-[50px] lg:pb-[50px]"
        />
    )
}

export default JourneySection;