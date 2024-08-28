import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Fragment } from "react";

export default async function Clinic() {
  const t = await getTranslations("Clinic");
  return (
    <main className="px-4 space-y-20 sm:px-16">
      <div className="h-[30vh] sm:h-[45vh]">
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-[30vh] sm:h-[45vh] bg-black">
        <img
            style={{ objectPosition: "80% 65%" }}
            alt={t("img_alt")}
            src={"/about-clinic.jpg"}
            width={1400}
            height={800}
            // priority
            // quality={100}
            className="object-cover w-full h-full aspect-video rounded-b-3xl brightness-[0.65] "
          />
        </div>
      </div>

      <article className="grid gap-4 mx-auto text-lg sm:w-3/4 ">
        <h1 className="text-[3rem] lg:text-[5rem] 2xl:text-[7rem] sm:w-[80%] mb-4  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
          {t("title")}
        </h1>

        <h2 className="">{t("subHeader")}</h2>
        {["1", "2", "3", "4"].map((i) => (
          <Fragment key={i}>
             <p className={`${i == "3" ? "mt-10" : ""}`}>{t(`content.${i}`)}</p>
           {i === "2" && (
              <div className="sm:w-full">
                <Image
                  src={"/about-clinic-2.jpg"} // Replace with the actual image source
                  alt={t(`content.${i}_img_alt`)}
                  width={500} // Adjust width and height as needed
                  height={300}
               className="object-cover m-auto h-full aspect-video rounded-3xl brightness-[0.95]  mt-7 sm:w-full"
                />
              </div>
            )}
          </Fragment>
         
        ))}
      </article>
    </main>
  );
}
