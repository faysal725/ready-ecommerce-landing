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
import TestimonialCards from "../Cards/TestimonialCards";
import TestimonialCarousel from "./TestimonialCarousel";







function Testimonials() {

    const testimonialData = [
        {
            rating: 5,
            review: "The white-label solution gave us complete control. Our marketplace looks and feels 100% custom.",
            user: {
                name: "Mikel D.",
                position: "CEO, eCommerzhub",
                image: "/images/sections/testimonial/user1.png"
            }
        },
        {
            rating: 5,
            review: "Within 3 months, we scaled from 10 to 500 vendors. The platform handles everything seamlessly.",
            user: {
                name: "Mikel D.",
                position: "CEO, eCommerzhub",
                image: "/images/sections/testimonial/user2.png"
            }
        },
        {
            rating: 5,
            review: "This platform transformed our marketplace. Sales increased by 300% in just 3 months!",
            user: {
                name: "Mikel D.",
                position: "CEO, eCommerzhub",
                image: "/images/sections/testimonial/user3.png"
            }
        },
        {
            rating: 5,
            review: "Best investment we made for our marketplace. The support team is exceptional and the features are top-notch.",
            user: {
                name: "Mikel D.",
                position: "CEO, eCommerzhub",
                image: "/images/sections/testimonial/user4.png"
            }
        },
    ]




    return (
        <>

            <div className="relative ">
                <div className="absolute top-0 left-10 bg-yellow-400 block w-[150px] h-[150px] rounded-full blur-[150px] z-0"></div>
                <div className="absolute top-0 right-1/3 bg-red-600 block w-[150px] h-[150px] rounded-full blur-[100px] z-0"></div>

                <div className="hidden lg:grid grid-cols-4 gap-6 pb-10">
                    {
                        testimonialData.map((testimonial, index) => (

                            <TestimonialCards key={index} testimonialData={testimonial} />
                        ))
                    }
                </div>

                <div className="block lg:hidden">
                    <TestimonialCarousel Testimonials={testimonialData} />
                </div>
            </div>


        </>
    )
}


function TestimonialHeading() {


    return (
        <div className="relative">
            <img src="/icons/sections/testimonial/arrow.svg" alt="" className="absolute w-[60px] top-6 -right-14" />
            <Heading headingText="Loved by Businesses" subHeadingText="See what our customers have to say" varient="dark" />
        </div>
    )
}


export default function TestimonialSection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <TestimonialHeading />
                }
                mainComponent={<Testimonials />}
                backgroundColorClass="bg-deep-navy pb-6 md:pb-[50px]"
            />
        </>
    );
}