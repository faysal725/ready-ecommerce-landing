
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ContentSection from "./ContentSection";


// payment section


function HighlightsSection() {

    return (
        <SectionContainer
            HeadingComponent={
                <Heading
                    headingText="Awesome Highlights"
                    subHeadingText="A quick look at the core features that power your eCommerce success."
                    varient="light"
                />
            }
            mainComponent={<ContentSection />}
            backgroundColorClass="bg-[#fff1f4]"
        />
    )
}

export default HighlightsSection;