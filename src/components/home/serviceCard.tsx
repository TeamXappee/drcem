import React from "react";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import LocaleLink from "../shared/localeLink";
import Image from "next/image";

export default async function ServiceCard({ item }: { item: any }) {
  const t = await getTranslations("Services");
  const t2 = await getTranslations("Home.services");
  return (
    <div className="bg-muted h-[550px] relative -mx-[.8rem] shadow-md shadow-gray-200/20 text-cyan-950 rounded-3xl ease-in-out  duration-500 group-hover:-translate-y-[4px] group-hover:translate-x-[4px]">
      {t(`${item}.image`).startsWith("/") ? (
       <img
          src={t(`${item}.image`)}
          alt=""
          width={400}
          height={400}
          className=" rounded-3xl object-cover  aspect-[10/9] sm:aspect-[14/9] w-full"
        />
      ) : null}

      <div className="flex flex-col items-end justify-between gap-2 p-6 ">
        <div className="space-y-2">
          <h3 className="text-xl font-bold sm:text-2xl">{t(`${item}.name`)}</h3>

          <p className="text-lg sm:text-base">
            {t(`${item}.content`).slice(0, 142)}..
          </p>
          <LocaleLink
          href={`/services/${t(`${item}.href`)}`}
          className="flex items-center gap-2 tracking-wider text-right w-fit hover:opacity-70"
        >
          {t2("cta")} <ArrowRight size={15} />
        </LocaleLink>
        </div>
  
      </div>
    </div>
  );
}
