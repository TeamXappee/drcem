import { getTranslations } from "next-intl/server";
import React from "react";
import SectionTitle from "../shared/section-title";

export default async function Map() {
  const t = await getTranslations("Home.map");

  return (
    <div className="space-y-8 ">
      <SectionTitle>{t("h1")}</SectionTitle>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.738697433601!2d28.991764712492916!3d41.05284301655884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab708d9df9245%3A0x9051ba933802648d!2sDr.%20Cem%20Baysal!5e0!3m2!1sen!2seg!4v1708875004397!5m2!1sen!2seg"
        className="w-full h-[80vh] max-h-[700px] border-none rounded-3xl"
        loading="lazy"
      ></iframe>
      <h3 className="relative m-auto text-xs text-center sm:text-sm sm:w-3/4 -top-4">
        {t("address")}
      </h3>
    </div>
  );
}
