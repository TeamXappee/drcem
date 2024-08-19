import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import HeroReview from "./hero-review";
import LocaleLink from "../shared/localeLink";
import { ArrowUpRight } from "lucide-react";
import FullPageSwiper from "../shared/swiper/full-pgae";

export default async function HeroSectionDraft() {
  const t = await getTranslations("Home.hero");

  return (
    <div className="grid grid-cols-2 ">
      <section className="flex flex-col justify-center gap-6 px-6 sm:px-16 ">
        <h1 className="text-[3rem] w-[80%] font-bold leading-none text-cyan-950 ">
          Welcome to doctor Cem Baysal dental clinic.
        </h1>
        <h2 className="text-lg 2xl:text-[1.4rem] w-[85%] text-muted-foreground 2xl:leading-tight">
          {t("h2")}
        </h2>
        <div className="grid gap-2 sm:grid-cols-5">
          <a
            href="https://www.whatclinic.com/dentists/turkey/istanbul-province/istanbul/drcem-baysal-implantologyradiology-specialist"
            target="_blank"
            className="inline-flex items-center justify-center w-full h-12 col-span-2 gap-1 p-2 text-base font-medium transition-colors border cursor-pointer 2xl:h-14 rounded-2xl hover:bg-gray-200 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            {t("cta1")}
            <ArrowUpRight strokeWidth={1.5} />
          </a>
          <LocaleLink
            href="/book-an-appointment"
            className="inline-flex items-center justify-center w-full h-12 p-2 text-base font-medium text-white transition-colors 2xl:h-14 sm:col-span-3 rounded-2xl bg-primary text-primary-foreground hover:bg-cyan-500 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            autoFocus={true}
          >
            {t("cta2")}
          </LocaleLink>
        </div>
        <hr className="w-2/3 my-10"/>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Google Reviews</h3>
          <HeroReview />
        </div>
      </section>
      <FullPageSwiper />
    </div>
  );
}
