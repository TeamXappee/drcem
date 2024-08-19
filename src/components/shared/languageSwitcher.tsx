"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({ button }: { button?: boolean }) {
  const locale = String(useParams().messages);
  const nextLocale = locale === "en" ? "tr" : "en";
  const pathname: any = usePathname();
  return (
    <Link
      className={`${button ? "  justify-center h-full gap-1 text-center " : ""} flex  items-center gap-1  `}
      href={`/${nextLocale}${pathname.slice(3, pathname.length)}`}
    >
      <Globe size={20} strokeWidth={2} className="relative" />{" "}
      {nextLocale?.toUpperCase()}
    </Link>
  );
}
