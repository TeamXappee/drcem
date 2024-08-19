import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import LocaleLink from "../shared/localeLink";

export default function MabNavAccordion({
  handleToggle,
}: {
  handleToggle: () => void;
}) {
  return (
    <Accordion type="single" collapsible className="grid w-full gap-2 mt-2">
      <AccordionItem value="item-2" className="p-0 m-0 border-0">
        <AccordionTrigger className="p-0 font-normal ">
          Services
        </AccordionTrigger>
        <AccordionContent className="grid gap-2 mt-2 opacity-90">
          <LocaleLink
            onClick={handleToggle}
            className="hover:text-cyan-500"
            href={"/services/implants"}
          >
            Implants
          </LocaleLink>
          <LocaleLink
            onClick={handleToggle}
            className="hover:text-cyan-500"
            href={"/services/fillings"}
          >
            Fillings
          </LocaleLink>
          <LocaleLink
            onClick={handleToggle}
            className="hover:text-cyan-500"
            href={"/services/porcelain-fillings"}
          >
            Porcelain Fillings
          </LocaleLink>
          <LocaleLink
            onClick={handleToggle}
            className="hover:text-cyan-500"
            href={"/services/ crowns-bridges"}
          >
            Crowns & Bridges
          </LocaleLink>
          <LocaleLink
            onClick={handleToggle}
            className="hover:text-cyan-500"
            href={"/services/composite-fillings"}
          >
            Composite Fillings
          </LocaleLink>
          <LocaleLink
            onClick={handleToggle}
            className="hover:text-cyan-500"
            href={"/services/porcelain-laminate-veneers"}
          >
            Porcelain laminate veneers
          </LocaleLink>
          <LocaleLink
            onClick={handleToggle}
            className="hover:text-cyan-500"
            href={"/services/bleaching"}
          >
            Bleaching
          </LocaleLink>{" "}
          <LocaleLink
            onClick={handleToggle}
            className="hover:text-cyan-500"
            href={"/services/colored-teeth"}
          >
            Colored Teeth
          </LocaleLink>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
