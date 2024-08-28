import WhyChooseUs from "@/components/home/why-choose-us";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Philosophy() {
  const t = await getTranslations("Philosophy");
  return (
    <main className="px-4 space-y-20 sm:px-16">
      <div className="h-[30vh] sm:h-[45vh]">
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-[30vh] sm:h-[45vh] bg-black">
          <img
            style={{ objectPosition: "50% 35%" }}
            alt={t("img_alt")}
            src="/doctor-cem.jpg"
            width={1400}
            height={800}
            // priority
            // quality={100}
            className="object-cover w-full h-full aspect-video rounded-b-3xl brightness-[0.65] "
          />
        </div>
      </div>

      <article className="grid gap-4 mx-auto text-lg sm:w-3/4">
        <h1 className="text-[3rem] lg:text-[5rem] 2xl:text-[7rem] mb-4  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
          {t("title")}
        </h1>
        <div className="text-center">{t("subHeader")}</div>
        <img
          alt="Doctor cem baysal after a successful operation."
          src={"/gang.png"}
          width={1200}
          height={1000}
          className="object-cover w-full my-4 rounded-xl"
        />
        <div className="my-8 space-y-4">
          <h4 className="mb-4 text-xl font-medium text-center underline capitalize">
            {t("principles.title")}
          </h4>
          <div className="space-y-4">
            {["1", "2", "3", "4"].map((i) => (
              <p key={i}>
                <span className="font-semibold">
                  {t(`principles.${i}.title`)}:{" "}
                </span>
                <span>{t(`principles.${i}.contnet`)}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-10 sm:grid sm:grid-cols-5 items-center">
          <div className="col-span-3 space-y-10">
            <h3>{t("about")}</h3>
            <h4>{t("footer")}</h4>
          </div>
          <div className=" col-span-2">
            <img
              alt="Doctor cem baysal Istanbul dental clinic - turkey."
              src={"/philosiphy.png"}
              width={1000}
              height={1000}
              className="w-full h-auto max-h-[500px] sm:max-h-[300px] rounded-xl object-cover justify-center"
            />
          </div>

        </div>


      </article>
    </main>
  );
}
