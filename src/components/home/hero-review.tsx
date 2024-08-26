"use client";
import React, { useState } from "react";
import FiveStars from "../shared/fiveStars";
import UserAvatar from "../shared/user-avatar";
import SwiperContainer from "../shared/swiper/swiper";
import { ArrowRight, Dot } from "lucide-react";
import { useTranslations } from "next-intl";
import { monthsSince } from "@/lib/utils";
import SectionTitle from "../shared/section-title";

type Review = {
  name: string;
  picture: string;
  content: string;
  year: number;
  month: number;
};

const ReviewCard =  ( {review}: {review:any} ) => {
  const t = useTranslations("Reviews");
  const [isExpanded, setIsExpanded] = useState(false);
  const content = t(`data.${review}.content`);
  const previewContent = content.slice(0, 140) + (content.length > 140 ? "..." : "");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      key={review.name}
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
                 {t("months")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-1 text-base">
        {isExpanded ? content : previewContent}
        {content.length > 140 && (
          <button
            className="text-cyan-950 tracking-wider hover:opacity-70"
            onClick={toggleExpand}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </p>
    </div>
  );
};

export default function HeroReview() {
  const t = useTranslations("Reviews");

  const slides = Array.from({ length: 5 }, (_, i) => i + 1).map((review) => (
    <ReviewCard key={review} review={review} />
  ));

  return (
    <div className="space-y-10 ">
      <SectionTitle>{t("title")}</SectionTitle>
      <SwiperContainer
        pagination={true}
        autoPLay={true}
        slides={slides}
        bg="bg-muted  min-h-[250px]"
      />
    </div>
  );
}
