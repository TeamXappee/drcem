import SectionTitle from "@/components/shared/section-title";
import { MessageCircleQuestion } from "lucide-react";
import { useTranslations } from "next-intl";

const Faqs = () => {
  const t = useTranslations("FAQs");

  return (
    <main className="min-h-screen pb-[5vh] pt-[20vh]  ">
      <div className="flex flex-col sm:mx-[10%] lg::mx-[20%] 2xl:mx-[25%] px-6 sm:px-16 sm:py-10  ">
        <SectionTitle className="relative flex flex-col items-center justify-center gap-3 mb-10 sm:items-start sm:flex-row ">
          {t("full-length")}
          <MessageCircleQuestion  size={30} />
        </SectionTitle>
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <div key={i}>
            <div className="space-y-2">
              <h2 className="text-xl font-medium">{t(`${i}.q`)}</h2>
              <p className="text-lg">{t(`${i}.a`)}</p>
            </div>
            <hr className={`my-8 ${i === 4 && "hidden"}`} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Faqs;
