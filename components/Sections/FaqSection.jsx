import { getCountries } from "@/lib/dataFetching/getCountries";
import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import ConsultationForm from "../Form/Container/ConsultationForm";
import VideoPlayer from "../Additional/VideoPlayer";
import { PlayCircleIcon } from "@heroicons/react/24/outline";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"




function FaqAccordion() {

    return (
        <div className="space-y-6 lg:space-y-[60px]">
            <div className="flex flex-col gap-2.5">
                <p className="text-2xl font-semibold text-start text-white">Frequently Asked Questions</p>
                <p className="text-lg text-white/60">
                    Below are clean, relevant FAQ questions matching your product:
                </p>
            </div>

            <div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. How long does the installation take?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-sm lg:text-lg text-left text-white/60">
                            <p>
                                Most installations are completed within 24 hours after we receive your credentials.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>2. Which payment gateways are supported?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-sm lg:text-lg text-left text-white/60">
                            <p>
                                Demo
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>3. Can I customize the design?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-sm lg:text-lg text-left text-white/60">
                            <p>
                                Demo
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>4. Will I receive updates in the future?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-sm lg:text-lg text-left text-white/60">
                            <p>
                                Demo
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>5. Is technical knowledge required?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-sm lg:text-lg text-left text-white/60">
                            <p>
                                Demo
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>6. Can I migrate from Shopify or WooCommerce?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-sm lg:text-lg text-left text-white/60">
                            <p>
                                Demo
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}


function ContentSection() {



    return (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 xl:gap-0">
            <div className="w-full lg:max-w-[461px]">
                <div className="flex flex-col gap-2.5">
                    <p className="text-2xl font-semibold text-start text-white">Experience the Platform in Minutes</p>
                    <p className="text-sm md:text-lg text-white/60">
                        A quick walkthrough of how Ready eCommerce works from setup to launch.
                    </p>
                </div>

                <div className="my-6 md:mt-10 md:mb-[30px]">
                    <VideoPlayer videoThumbnailSrc="https://i.ibb.co.com/Z1YPJ3v9/Frame-1261153635.png" videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" videoType="video/mp4" />
                </div>

                <a href="#" className="h-14 w-full relative flex justify-center items-center gap-2.5 px-5 py-3.5 rounded-lg bg-white/[0.03] border border-white/10">
                    <PlayCircleIcon className="h-6 w-6 text-white" />
                    <p className="text-base font-medium text-center text-white">
                        Watch Video Tutorials
                    </p>
                </a>
            </div>
            <div className="w-full lg:max-w-[600px]">
                <FaqAccordion />
            </div>


        </div>
    )
}


export default function FaqSection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading headingText="See It in Action" subHeadingText="Watch the demo and get quick answers to the most common questions." varient="dark" />
                }
                mainComponent={<ContentSection />}
                backgroundColorClass="bg-deep-navy pb-6 md:pb-[50px] pt-6 md:pt-[50px]"
            />
        </>
    );
}