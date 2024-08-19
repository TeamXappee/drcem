import { getTranslations } from "next-intl/server";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowRight, ArrowRightFromLine, Dot } from "lucide-react";
import FiveStars from "../shared/fiveStars";

export default async function Reviews() {
  const t = await getTranslations("Hero.reviews");

  function monthsSince(year: string, month: string) {
    // Create a date object for today's date
    const today = new Date();

    // Get the current year and month
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // JavaScript months are 0-based

    // Calculate the difference in months
    const monthsDifference =
      (currentYear - Number(year)) * 12 + (currentMonth - Number(month));

    return monthsDifference;
  }
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-[2rem] sm:text-[4rem] tracking-tighter leading-none font-aileron text-center  text-secondary font-bold">
          {t("title")}
        </h2>
      </div>
      <div className="grid items-center gap-4 sm:grid-cols-3">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((review) => (
          <div
            key={review}
            className="p-4 space-y-2 bg-white border ites hover:shadow-sm border-indigo-950/20 sm:p-8 rounded-2xl"
          >
            <div className="flex items-start gap-2">
              <Avatar>
                <AvatarImage src={t(`data.${review}.picture`)} />
                <AvatarFallback>
                  {t(`data.${review}.name`).slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold font-aileron">
                  {t(`data.${review}.name`)}
                </h3>
                <div className="flex items-center">
                  <FiveStars />
                  <Dot size={15} className="text-primary" />
                  <p className="text-xs text-muted-foreground">
                    <span>
                      {monthsSince(
                        t(`data.${review}.year`),
                        t(`data.${review}.month`)
                      ) || 4}{" "}
                      months ago
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm">
              {t(`data.${review}.content`).slice(0, 232)}..
            </p>
          </div>
        ))}
        <div className="space-y-.5 ">
          <a
            href="https://www.google.com/search?q=drcembaysal&oq=drcembaysal&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyDwgCEC4YDRivARjHARiABDIJCAMQABgNGIAEMgkIBBAAGA0YgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQcxOTlqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x14cab708d9df9245:0x9051ba933802648d,1,,,, "
            target="_blank"
            className="flex items-center gap-2 m-auto text-lg font-medium text-center cursor-default hover:text-purple-800 font-aileron text-secondary w-fit"
          >
            Continue reading from google. <ArrowRight size={20} />
          </a>
          <div className="flex justify-center">
            <FiveStars big={true} />
          </div>
          <p className="flex items-center justify-center gap-1 text-sm font-bold text-muted-foreground">
            <span className="">4.9</span>
            <Dot size={15} className="text-primary" />
            <span>112 reviews.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
