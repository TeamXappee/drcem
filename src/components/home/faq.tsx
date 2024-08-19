import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../shared/section-title";
import { useTranslations } from "next-intl";

export function FaqSection() {
  const t = useTranslations("FAQs");
  return (
    <div className="space-y-8 sm:px-5 sm:m-auto" id="faqs">
      <SectionTitle>{t("full-length")}</SectionTitle>
      <Accordion type="multiple"  className="w-full ">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <AccordionItem className="px-4 m-2 border-none bg-neutral-50 rounded-2xl" key={i} value={`item-${i}`}>
            <AccordionTrigger className="">{t(`${i}.q`)}</AccordionTrigger>
            <AccordionContent>{t(`${i}.a`)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
