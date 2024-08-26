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
  const white = active === undefined || active === "about" ;
  let translatedBlogSlug = '';
  console.log("segments",segments)

 if( active == 'blogs' && segments[3] !=undefined){
  if(nextLocale == "tr"){
    switch (segments[3]) {
      case "lzqo9shg-o0s1k0jem2":
        translatedBlogSlug = "m0aphfoo-qmpiiptcjh"; // Adjust index as needed
        break;
      case "lzqrpyp4-ze06sxfcoq":
        translatedBlogSlug = "m0apy48s-0ipq4t57g2"; // Adjust index as needed
        break;
        case "m0ansz7z-yfhwa22z6p":
          translatedBlogSlug = segments[3]; // Adjust index as needed
          break;
      default:
        translatedBlogSlug = segments[3]; // Adjust index as needed
        break;
    }
  }else{
    switch (segments[3]) {
      case "m0aphfoo-qmpiiptcjh":
        translatedBlogSlug = "lzqo9shg-o0s1k0jem2"; // Adjust index as needed
        break;
      case "m0apy48s-0ipq4t57g2":
        translatedBlogSlug = "lzqrpyp4-ze06sxfcoq"; // Adjust index as needed
        break;
        case "m0ansz7z-yfhwa22z6p":
          translatedBlogSlug = segments[3]; // Adjust index as needed
          break;
      default:
        translatedBlogSlug = segments[3]; // Adjust index as needed
        break;
    }
  }


 }
  "/blogs/[slug]"
  return (
    <Link
      className={`${button ? `  justify-center h-full gap-1 text-center text-black hover:text-black focus:text-black ${white && " hover:text-white focus:text-white "}` : ""} flex  items-center gap-1  ${white ? " hover:text-white focus:text-white " : "text-black hover:text-black focus:text-black"}`}
      href={ active == 'blogs' && segments[3] !=undefined ?  `/${nextLocale}/blogs/${translatedBlogSlug}` : `/${nextLocale}${pathname.slice(3, pathname.length)}`}
    >
      <Globe size={20} strokeWidth={2} className="relative" />{" "}
      {nextLocale?.toUpperCase()}
    </Link>
  );
}
