import React from "react";
import FiveStars from "../shared/fiveStars";
import UserAvatar from "../shared/user-avatar";
import SwiperContainer from "../shared/swiper/swiper";
import { ArrowUpRight, Dot } from "lucide-react";
import { useTranslations } from "next-intl";
import { monthsSince } from "@/lib/utils";
import SectionTitle from "../shared/section-title";

export default function HeroReview() {
  const t = useTranslations("Reviews");
  const slides = Array.from({ length: 5 }, (_, i) => i + 1).map((review) => (
    <div
      key={review}
      className="relative ease-in-out space-y-2 text-cyan-950 duration-500 group-hover:-translate-y-[4px] group-hover:translate-x-[4px] p-2 "
    >
      <div className="flex items-center justify-between pr-4 ">
        <div className="flex items-center gap-2">
          <UserAvatar
            src={t(`data.${review}.picture`)}
            fallback={t(`data.${review}.name`).slice(0, 2)}
          />
          <div>
            <h3 className="text-sm font-medium xl:text-lg sm:text-base">
              {t(`data.${review}.name`)}
            </h3>
            <div className="flex items-center">
              <FiveStars />
              <Dot size={15} className="text-cyan-950" />
              <p className="text-xs text-cyan-950/60">
                <span>
                  {monthsSince(
                    t(`data.${review}.year`),
                    t(`data.${review}.month`)
                  ) || 4}{" "}
                  months ago
                </span>
              </p>
            </div>
          </div>
        </div>
        <a className="z-[4]" href="https://google.com" target="_blank">
          <ArrowUpRight size={15} />
        </a>
      </div>
      <p className="mx-1 text-base">
        {t(`data.${review}.content`).slice(0, 140)}..
      </p>
    </div>
  ));
  return (
    <div className="space-y-10 ">
      <SectionTitle>What our patients say about us</SectionTitle>
      <SwiperContainer
        pagination={true}
        autoPLay={true}
        slides={slides}
        bg="bg-muted  min-h-[250px]"
      />
    </div>
  );
}
