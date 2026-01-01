import clsx from "clsx";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import FeaturesCarousel from "./FeaturesCarousel";



function FeaturesSection() {

    return (
        <section className=" pb-6 lg:pb-[50px] pt-6 lg:pt-[100px]  flex flex-col gap-6 lg:gap-[60px]">
            <div className="container">
                <Heading
                    headingText="Powerful Features, Built to Scale"
                    subHeadingText="Smart tools designed to simplify operations and accelerate growth."
                    varient="light"
                />
            </div>
            <div className="flex justify-center">
                <FeaturesCarousel />
            </div>
        </section>
    )
}

export default FeaturesSection;