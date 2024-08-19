import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import LocaleLink from "../shared/localeLink";

export default function HeroSectionTwo() {
  const t = useTranslations("Home.hero");

  return (
    <div className="bg-black h-[100vh] py-20 sticky top-0 ">
      <div className="relative grid w-full h-[100vh] overflow-hidden bg-black place-content-center">
        <Image
          style={{ objectPosition: "50% 40%" }}
          className="brightness-[0.70] absolute w-full h-full object-cover"
          alt=""
          priority
          layout="fill"
          src={"/dr-cem-mob.jpg"}
        />
        <div className="z-30 mx-[10vw] mt-[10vh] sm:mt-72 2xl:mt-80 space-y-8">
          <div className="space-y-4">
            <p className="text-4xl font-semibold text-neutral-100 sm:text-5xl 2xl:text-6xl sm:mx-[5vw] cursor-text sm:text-center ">
              {t("h2")}
            </p>
            <p className="font-medium text-neutral-100 sm:text-xl sm:text-center opacity-90 sm:mx-[8vw]">
            University Professor, Oral Diagnosis, Radiology, advanced surgery, cosmetic treatments, treatment planning, and Implantology
            </p>
          </div>
          <div className="items-center justify-center gap-2 space-y-2 sm:flex sm:space-y-0">
            <LocaleLink href={`/book-an-appointment`}>
              <Button
                className="gap-2 duration-200 ease-in-out rounded-2xl bg-neutral-100 hover:bg-black hover:text-neutral-100"
                size={"lg"}
              >
                Book An Appointment
              </Button>
            </LocaleLink>
            <LocaleLink href={"/about"}>
              <Button
                className="font-medium transition-colors duration-200 ease-in-out rounded-2xl text-neutral-100 bg-neutral-100/10 backdrop-blur-xl hover:bg-black hover:text-neutral-100"
                size={"lg"}
              >
                About Dr. Baysal&apos;s Expertise
              </Button>
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}
