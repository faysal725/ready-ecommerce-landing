import Image from "next/image";
import { Suspense } from 'react'
import HeroSectionShimmer from "@/components/shimmer/HeroSectionShimmer";
import OnlineBusinessSection from "@/components/Sections/OnlineBusinessSection";
import JourneySection from "@/components/Sections/JourneySection";
import PaymentAndSms from "@/components/Sections/PaymentAndSms";
import IdealLicenseSection from "@/components/Sections/IdealLicenseSection";
import InstallationSection from "@/components/Sections/InstallationSection";
import ConsultationSection from "@/components/Sections/ConsultationSection";
import FaqSection from "@/components/Sections/FaqSection";
import {fullBaseUrl} from "@/lib/exportVariables";
import TestimonialSection from "@/components/Sections/TestimonialSection";
import Herosection from "@/components/Sections/Herosection";
import FeaturesSection from "@/components/Sections/FeaturesSection";
import HighlightsSection from "@/components/Sections/HighlightsSection";



async function getAllSectionData() {
  const res = await fetch(fullBaseUrl() + "/home", { cache: 'force-cache', next: { revalidate: 5 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  const allSectionData = await getAllSectionData()

  return (
    <div>
      <Suspense fallback={<HeroSectionShimmer />}>
        <Herosection />
      </Suspense>


      {/* online business section */}
      <OnlineBusinessSection />

      {/* powerfull features */}
      <FeaturesSection />


      {/* JourneySection */}
      <JourneySection />

      {/* payments */}
      <PaymentAndSms />

      {/* ideal liscence section */}
      <IdealLicenseSection />

      {/* awesome highlights */}
      <HighlightsSection />


      {/* installation service */}
      <InstallationSection />


      {/* testimonial */}
      <TestimonialSection />


      {/* faq */}
      <FaqSection />

      {/* consultation */}
      <ConsultationSection />

    </div>
  );
}
