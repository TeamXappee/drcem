import Image from "next/image";
import React from "react";
import SectionTitle from "../shared/section-title";
import { useTranslations } from "next-intl";
import LocaleLink from "../shared/localeLink";
import { ArrowRight } from "lucide-react";

export default function ClinicSection() {
  const t = useTranslations("Clinic");

  return (
    <div className="w-full ">
      <div className="flex flex-col-reverse justify-between text-cyan-50 sm:flex-row-reverse">
        <div className="w-full py-12 space-y-6 sm:p-10 sm:w-1/2 sm:py-16 bg-cyan-800 sm:rounded-r-2xl rounded-b-2xl sm:rounded-l-none">
          <SectionTitle className="mx-4 text-cyan-50 sm:text-left"> <span
    dangerouslySetInnerHTML={{ __html: t("title").replace(/\n/g, "<br />") }}
  /></SectionTitle>
          <p className="mx-4 text-center sm:text-left ">{t("subHeader")}</p>
          <LocaleLink
            href="/about/clinic"
            className="flex items-center justify-center h-12 gap-2 px-4 py-2 mx-8 text-lg font-medium text-center rounded-2xl text-cyan-800 bg-cyan-50 hover:bg-cyan-100 sm:w-1/2 sm:ml-3 sm:mx-0"
          >
            {t("cta")} <ArrowRight size={20} />{" "}
          </LocaleLink>
        </div>
        <div className="relative w-full h-64 sm:w-1/2 sm:h-auto image-container">
        <img
            src={"/dental-clinic.png"}
            alt="our clinic"
            // layout="fill"
            // objectFit="cover"
            className="rounded-t-2xl sm:rounded-l-xl sm:rounded-r-none object-cover"
          />
        </div>
      </div>
    </div>
  );
}
