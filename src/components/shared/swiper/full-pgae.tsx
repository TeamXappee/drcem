"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import LocaleLink from "../localeLink";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function HeroSlice() {
  const t = useTranslations("Home.hero");
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <Swiper
      pagination={true}
      loop={true}
      modules={[Pagination]}
      className="relative w-full h-screen min-h-[500px] "
    >
      {!isMobile && (
        <SwiperSlide>
          <div className="w-full h-full text-white hero-third-gredient cursor-grab">
            <div className="relative flex flex-col w-full h-full gap-4 p-6 pt-32 z-100 sm:gap-8 sm:justify-center lg:justify-end sm:p-20 sm:w-2/3 lg:w-1/2">
              <h1 className=  "z-30 text-5xl font-semibold cursor-text">
                {t("h2")}
              </h1>
              <div className="z-20 flex gap-1">
                <LocaleLink href={"/book-an-appointment"}>
                  <Button
                    className="z-30 px-12 text-white w-fit "
                    size={isMobile ? "sm" : "lg"}
                  >
                    Book Appointment
                  </Button>
                </LocaleLink>
              </div>
              <a
                href="tel:+1 437 267-7175"
                className="z-30 font-light cursor-pointer"
              >
                Or Call us at {`+1 (437) 267-7175`}
              </a>
            </div>
            <Image
              className="absolute right-0 top-0 w-screen  min-h-[500px] object-cover  h-screen scale-x-[-1] sm:scale-x-[1] brightness-[0.5] "
              alt=""
              priority
              width={1400}
              height={1400}
              src={"/dr-cem-1.jpg"}
            />
          </div>
        </SwiperSlide>
      )}
      <SwiperSlide className="">
        <div className="w-full h-full text-white hero-forth-gredient">
          <div className="relative flex flex-col w-full h-full gap-4 mt-[35vh] sm:mt-0 p-6 pt-32 z-100 sm:gap-8 sm:justify-center lg:justify-end sm:p-20 sm:w-2/3 lg:w-1/2">
            <div className="relative flex flex-col-reverse sm:flex-row">
              <Image
                className=" cursor-auto w-[15rem] sm:w-[30rem] z-20 invert"
                alt=""
                priority
                width={200}
                height={200}
                src={"/be (3).svg"}
              />
              <Image
                className="absolute z-20 hidden -right-36 -top-14 lg:block"
                alt=""
                priority
                width={200}
                height={200}
                src={"/rate.svg"}
              />
            </div>
            <h1 className="z-30 text-xl font-medium cursor-text ">{t("h2")}</h1>
            <div className="z-20 flex gap-1 ">
              <LocaleLink href={"/book-an-appointment"}>
                <Button
                  className="px-12 text-white w-fit "
                  size={isMobile ? "sm" : "lg"}
                >
                  Book Appointment
                </Button>
              </LocaleLink>
            </div>
            <a
              href="tel:+1 437 267-7175"
              className="z-30 font-light cursor-pointer"
            >
              Or Call us at {`+1 (437) 267-7175`}
            </a>
          </div>
          <div className="absolute top-0 left-0 z-10 w-screen min-h-[500px] h-screen bg-black/30"></div>
          <Image
            className="absolute top-0 right-0 object-cover min-h-[500px] w-screen h-screen brightness-90"
            alt=""
            priority
            width={1400}
            height={1400}
            src={"/swiper/dn.png"}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
