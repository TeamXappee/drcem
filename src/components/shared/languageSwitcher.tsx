"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({ button }: { button?: boolean }) {
  const locale = String(useParams().messages);
  const nextLocale = locale === "en" ? "tr" : "en";
  const pathname: any = usePathname();
  const segments = pathname.split("/");
  const active = segments[2];
  console.log("active",active)
  const white = active === undefined || active === "about" ;
  console.log(" ",white)
  return (
    <Link
      className={`${button ? `  justify-center h-full gap-1 text-center text-black hover:text-black focus:text-black ${white && " hover:text-white focus:text-white "}` : ""} flex  items-center gap-1  ${white ? " hover:text-white focus:text-white " : "text-black hover:text-black focus:text-black"}`}
      href={`/${nextLocale}${pathname.slice(3, pathname.length)}`}
    >
      <Globe size={20} strokeWidth={2} className="relative" />{" "}
      {nextLocale?.toUpperCase()}
    </Link>
  );
}
