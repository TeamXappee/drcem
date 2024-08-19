import React from "react";
import { getTranslations } from "next-intl/server";
import SectionTitle from "../shared/section-title";
import SwiperContainer from "../shared/swiper/swiper";
import ServiceCard from "./serviceCard";

export default async function   Services() {
  const t = await getTranslations("Home");
  const keys = [
    "dental-implants",
    "dental-veneers",
    "periodontal-plastic-surgery",
    "crowns-bridges",
    "immediate-dental-implant-placement",
    "smile-makeover",
    "masseter-botox",
  ];
  return (
    <div
      className="z-[4] relative  space-y-10  bg-white text-cyan-950  grid items-center"
      id="cases"
    >
      <div className="space-y-2 ">
        <SectionTitle>{t("services.h1")}</SectionTitle>
        <p className="text-base  text-center text-muted-foreground sm:mx-[8vw] lg:mx-[25vw] ">
          {t("services.h2")}
        </p>
      </div>

      <div className="grid h-full services-swiper">
        <SwiperContainer
          pagination={true}
          navigation={true}
          slides={keys.map((key) => (
            <ServiceCard item={key} key={key} />
          ))}
        />
      </div>
    </div>
  );
}
