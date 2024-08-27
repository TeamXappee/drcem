import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function SmilingSection() {
  const t = useTranslations("Home.whychoosedrcem");
  return (
    <div className="w-full">
      <div className="flex flex-col items-stretch justify-between text-cyan-50 sm:flex-row">
        <div className="w-full p-10 py-12 space-y-6 sm:w-1/2 sm:py-16 bg-cyan-800 sm:rounded-l-2xl rounded-t-2xl sm:rounded-r-none">
          <h3 className="text-2xl font-medium sm:text-3xl">
          {t("h3")}
          </h3>
          <ul className="space-y-4 sm:pl-5 sm:list-disc">
            <li>
            {t("li1")}
            </li>
            <li>
            {t("li2")}
            </li>
            <li>
            {t("li3")}
            </li>
            <li>
            {t("li4")}
            </li>
            <li>
            {t("li5")}
            </li>
            <li>
            {t("li6")}
            </li>
          </ul>
        </div>
        <div className="relative w-full h-64 sm:w-1/2 sm:h-auto ">
        <img
            alt="Smiling"
            src="/why-choose-us-2.jpg"
            // layout="fill"
            // objectFit="cover"
            className="sm:rounded-r-2xl rounded-b-2xl sm:rounded-b-none"
          />
        </div>
      </div>
    </div>
  );
}
