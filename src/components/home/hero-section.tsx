import Image from "next/image";
import React from "react";
import HeroSlider from "../shared/swiper/full-pgae";
import HeroReview from "./hero-review";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <HeroSlider />
      {/* <div className="hidden sm:block w-[35vw] lg:w-[25vw] absolute right-0 bottom-0 m-16 lg:m-20">
        <HeroReview />
      </div> */}
    </div>
  );
}
