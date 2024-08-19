import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  PhoneOutgoing,
  Printer,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import LocaleLink from "../shared/localeLink";

export default function Footer() {
  const tNav = useTranslations("Nav");
  const tServices = useTranslations("Services");
  const keys = [
    "dental-implants",
    "dental-veneers",
    "dental-crowns",
    "periodontal-plastic-surgery",
    "dental-bridges",
    "smile-makeover",
    "immediate-dental-implant-placement",
    "masseter-botox",
  ];
  return (
    <footer className="space-y-2 text-background">
      <div className="items-center justify-between sm:flex ">
        <Image
          src={"/logo/logo-white.png"}
          width={400}
          height={200}
          className="-ml-3 w-36 sm:w-40 2xl:w-44"
          alt=""
        />
        <section className="flex  sm:flex-row flex-col sm:items-center justify-end gap-[5vw] sm:mt-4 w-fit ">
          <LocaleLink
            className="flex items-center justify-between hover:text-cyan-200"
            href={tNav("about.sublinks.1.href")}
          >
            {tNav("about.sublinks.1.name")}
          </LocaleLink>
          <LocaleLink
            className="flex items-center justify-between hover:text-cyan-200"
            href={tNav("about.sublinks.2.href")}
          >
            {tNav("about.sublinks.2.name")}
          </LocaleLink>
          <LocaleLink
            className="flex items-center justify-between hover:text-cyan-200"
            href={tNav("about.sublinks.3.href")}
          >
            {tNav("about.sublinks.3.name")}
          </LocaleLink>
          <LocaleLink href={"/"}>{tNav("faqs.name")}</LocaleLink>
        </section>
      </div>
      <br className="sm:hidden" />
      <hr className="sm:pb-10 opacity-20" />
      <br className="sm:hidden" />

      <div className="grid-cols-3 sm:grid ">
        <section className="flex flex-col col-span-2 gap-2">
          <div className="grid grid-cols-2 gap-x-[10vw] gap-y-1">
            {keys.map((key) => (
              <LocaleLink
                className="hover:text-cyan-200"
                href={`services/${tServices(key + ".href")}`}
                key={key}
              >
                {tServices(key + ".name")}
              </LocaleLink>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-end w-full gap-2 ">
          <a className="flex items-center gap-2" href="tel:+90 (212) 234 03 30">
            {`+90 (212) 234 03 30`}
            <PhoneOutgoing size={18} strokeWidth={1.2} />{" "}
          </a>
          <a className="flex items-center gap-2" href="fax:+90 (212) 246 13 98">
            {`+90 (212) 246 13 98`}
            <Printer size={18} strokeWidth={1.2} />
          </a>
          <a
            className="flex items-center gap-2"
            href="mailto:info@drcembaysal.com"
          >
            info@drcembaysal.com
            <Mail size={18} strokeWidth={1.2} />
          </a>
        </section>
      </div>
      <section className="flex items-center justify-between pb-4 pt-14">
        <p className="text-left text-white/80">
          All Rights Reserved <a href="https://xappee.com">Xappee</a> © 2024 -
          {`    Dr. Cem Baysal`}
        </p>
        <div className="flex gap-4">
          <a className="flex items-center justify-between gap-2 cursor-pointer hover:text-cyan-200">
            <Instagram strokeWidth={1.2} size={18} />
          </a>
          <a className="flex items-center justify-between gap-2 cursor-pointer hover:text-cyan-200">
            <Facebook strokeWidth={1.2} size={18} />
          </a>
        </div>
      </section>
    </footer>
  );
}
