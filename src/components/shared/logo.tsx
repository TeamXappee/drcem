"use client";

import { usePathname } from "next/navigation";
import LocaleLink from "./localeLink";
import Image from "next/image";

export default function Logo() {
  const segments = usePathname().split("/");
  const active = segments[2];
  return (
    <LocaleLink href="/">
     <img
        src={"/logo/logo-white.png"}
        width={1400}
        height={1000}
        alt=""
        className={`w-40 sm:w-64 relative -left-5 sm:-ml-0 ${active === undefined || active === "about" ? "" : "invert"}`}
      />
    </LocaleLink>
  );
}
