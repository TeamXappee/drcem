import { ArrowRight } from "lucide-react";
import React from "react";
import LocaleLink from "../shared/localeLink";
import { useTranslations } from "next-intl";

export default function CtaSection() {
  const t = useTranslations("Home.footer");
  return (
    <LocaleLink
      href="/book-an-appointment"
      className="block py-16 px-[10vw] cursor-pointer bg-secondary-foreground group border-b-2 border-dashed border-white/20 hover:bg-cyan-800 rounded-t-2xl "
    >
      <div className="flex flex-col items-start sm:items-end sm:justify-between sm:flex-row">
        <p className="mb-4 text-3xl sm:text-5xl lg:text-[4.5rem] font-bold text-white ">
          {t("title")}
        </p>
        <button className="inline-flex text-primary items-start justify-center p-2.5 duration-700 ease-in-out rounded-full bg-white group-hover:scale-125 group-hover:rotate-[360deg] ">
          <ArrowRight size={32} />
        </button>
      </div>
    </LocaleLink>
  );
}
