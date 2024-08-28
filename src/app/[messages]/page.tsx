import Blogs from "@/components/home/blogs";
import ClinicSection from "@/components/home/clinic";
import { FaqSection } from "@/components/home/faq";
import HeroReview from "@/components/home/hero-review";
import HeroSectionTwo from "@/components/home/hero-section-2";
import Map from "@/components/home/map";
import ServiceSquares from "@/components/home/service-squares";
import Services from "@/components/home/services";
import SmilingSection from "@/components/home/smiling-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="relative w-full  -top-[80px] overflow-hidden">
      <HeroSectionTwo />
      <div className="relative z-20  space-y-20 bg-white sm:space-y-32 rounded-t-2x">
        <PaddingX>
          <WhyChooseUs />
        </PaddingX>

        <PaddingXDesktop>
          <SmilingSection />
        </PaddingXDesktop>
        <PaddingX>
        <ServiceSquares />

          {/* <Services /> */}
        </PaddingX>
        <PaddingXDesktop>
          <ClinicSection />
        </PaddingXDesktop>

        <PaddingX>
          <HeroReview />
          <Blogs />
          <Suspense fallback={<div>..</div>}>
            <Map />
          </Suspense>
          <FaqSection />
        </PaddingX>
      </div>
    </main>
  );
}

const PaddingX = ({ children }: any) => {
  return <div className="px-[10vw] space-y-20 sm:space-y-32">{children}</div>;
};

const PaddingXDesktop = ({ children }: any) => {
  return (
    <div className="sm:px-[10vw] space-y-20 sm:space-y-32">{children}</div>
  );
};
