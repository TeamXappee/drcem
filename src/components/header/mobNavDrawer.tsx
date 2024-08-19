"use client";
import * as React from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ArrowRight, MenuIcon } from "lucide-react";
import MabNavAccordion from "./mabNavAccordion";
import LocaleLink from "../shared/localeLink";
import { usePathname } from "next/navigation";

export function MobNavDrawer() {
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => setOpen(!open);
  const segments = usePathname().split("/");
  const active = segments[2];
  return (
    <Drawer open={open}>
      <button
        className="flex items-center justify-center p-2 rounded-md"
        onClick={handleToggle}
      >
        <MenuIcon
          className={`text-white ${active === undefined || active === "about" ? "" : "invert"} `}
        />
      </button>
      <DrawerContent
        onInteractOutside={handleToggle}
        className="h-[55h] py-2 text-base"
      >
        <div className="p-6 overflow-y-auto h-[50vh] pb-10">
          <ul className="grid w-full gap-2 ">
            <li onClick={handleToggle}>
              <LocaleLink
                className="flex justify-between hover:text-cyan-900 hover:underline"
                href="/about"
              >
                About Dr Cem <ArrowRight size={15} />
              </LocaleLink>
            </li>
            <hr className="my-2 opacity-40" />

            <li onClick={handleToggle}>
              <LocaleLink
                className="flex justify-between hover:text-cyan-900 hover:underline"
                href="/about/clinic"
              >
                About The Clinic <ArrowRight size={15} />
              </LocaleLink>
            </li>
            <hr className="my-2 opacity-40" />
            <li onClick={handleToggle}>
              <LocaleLink
                className="flex justify-between hover:text-cyan-900 hover:underline"
                href="/about/our-philosophy"
              >
                Our Philosophy <ArrowRight size={15} />
              </LocaleLink>
            </li>
            <hr className="my-2 opacity-40" />
            <li onClick={handleToggle}>
              <LocaleLink
                className="flex justify-between hover:text-cyan-900 hover:underline"
                href="/faqs"
              >
                FAQs <ArrowRight size={15} />
              </LocaleLink>
            </li>
          </ul>
          <hr className="my-2 opacity-40" />
          <MabNavAccordion handleToggle={handleToggle} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
