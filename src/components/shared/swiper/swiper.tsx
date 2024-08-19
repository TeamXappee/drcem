"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Navigation, Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";

export default function SwiperContainer({
  slides,
  autoPLay,
  navigation,
  pagination,
  className,
  bg,
}: {
  slides: React.JSX.Element[];
  autoPLay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  className?: string;
  bg?: string;
}) {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 800px)");
  const isDekstop = useMediaQuery("(max-width: 1323px)");
  const isBigMonitor = useMediaQuery("(min-width: 1920px)");

  return (
    <Swiper
      slidesPerView={
        isMobile
          ? 1
          : isTablet
            ? 1.6
            : isDekstop
              ? 3
                : isBigMonitor
                  ? 4
                  : 3
      }
      spaceBetween={isMobile ? 4 : 10}
      autoplay={autoPLay && { delay: 10, disableOnInteraction: true }}
      direction={"horizontal"}
      navigation={navigation}
      pagination={
        pagination && {
          clickable: true,
        }
      }
      modules={[Navigation, Pagination]}
      className={cn(
        "relative w-full h-full backdrop-blur-md rounded-2xl  cursor-grab",
        className
      )}
    >
      {slides.map((slide, i) => (
        <SwiperSlide className={`p-4 group ${bg} rounded-3xl `} key={i}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
