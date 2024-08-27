import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function About() {
  const t = await getTranslations("About");
  return (
    <main className="px-[10vw] space-y-20 ">
      <div className="h-[30vh] sm:h-[45vh]">
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-[30vh] sm:h-[45vh] bg-black">
          <img 
            alt={t("img1-alt")}
            src="/about.png"
            width={1400}
            height={800}
            className="object-cover w-full h-full aspect-video rounded-b-3xl brightness-[0.65] "
          />
        </div>c
      </div>
      <section className="">
        <div className="space-y-14">
          <h1 className="  text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
            {t("title")}
          </h1>
          <article className="grid gap-4 mx-auto text-lg mb-14 ">
            {["1", "2"].map((i) => (
              <p key={i}>
                <span className="mr-2 font-semibold">
                  {t(`content.${i}.bold`)}
                </span>
                <span>{t(`content.${i}.text`)}</span>
              </p>
            ))}
          </article>{" "}
        </div>
      </section>
      <section className="flex flex-row gap-10">
        <div>
          <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron  text-cyan-950">
          {t("adventure-title")}{" "}
          </p>

          <article className="grid gap-4 mx-auto text-lg my-7 ">
            <p>
            {t("adventure-para1")}{" "}
            </p>
            <p>
            {t("adventure-para2")}
            </p>
          </article>
        </div>
        <img
          style={{ objectPosition: "50% 25%" }}
          alt={t("img2-alt")}
          src="/learner.png"
          width={1000}
          height={800}
          // priority
          // quality={100}
          className="object-cover   m-auto h-full  aspect-square rounded-3xl brightness-[0.95]  mt-7"
        />
      </section>
      <section className="flex flex-row-reverse gap-10">
        <div >
          <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron  text-cyan-950">
            {t("managing-title")}
          </p>

          <article className="grid gap-4 mx-auto text-lg my-7 ">
            <p>
            {t("managing-para")}
            </p>
          </article>
        </div>
        <img
          alt={t("img3-alt")}
          src="/lecturing.png"
          width={1000}
          height={800}
          // priority
          // quality={100}
          className="object-cover w-[45%] rounded-3xl brightness-[0.95]  mt-7"
        />
      </section>
      <section>
        <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
          {t("technique-title")}{" "}
        </p>
        <img
          alt={t("img2-alt")}
          src="/technique.png"
          width={1000}
          height={800}
          // priority
          // quality={100}
          className="object-cover m-auto h-full aspect-video rounded-3xl brightness-[0.95]  mt-7"
        />
        <article className="grid gap-4 text-lg my-14 -">
          <p>
          {t("technique-para")}{" "}
          </p>
          <ul className="flex flex-wrap ml-4 -my-2 list-disc gap-x-10">
            <li className="font-medium capitalize">
            {t("technique-li1")}
            </li>
            <li className="font-medium capitalize">
            {t("technique-li2")}
            </li>
            <li className="font-medium capitalize">
              {" "}
              {t("technique-li3")}
            </li>
          </ul>
          <p>
            {" "}
            {t("technique-para2")}
          </p>
        </article>
      </section>
      <section>
        <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
          {t("Besides-title")}
        </p>
        <article className="grid gap-4 mx-auto text-lg my-14 -">
          <p>
          {t("Besides-para")}
          </p>
        </article>
      </section>
      <section>
        <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
        {t("Award-title")}
        </p>

        <img
          alt={t("Award-img-alt")}
          src="/award.png"
          width={1000}
          height={800}
          // priority
          // quality={100}
          className="object-contain sm:w-1/4 m-auto h-full aspect-square rounded-3xl brightness-[0.95] mt-7"
        />
        <article className="grid gap-4 mx-auto text-lg my-14">
          <p>
           {t("Award-para")}
          </p>
          <p>
            <span className="font-semibold">{t("prof-assc")}</span>{" "}
            {t("Award-para2")}
          </p>
        </article>
      </section>
      <section>
        <article className="grid gap-4 mx-auto text-lg my-14">
          <p className="font-bold">{t("connect")}</p>
          <p>
          {t("connect-para")}
          </p>
          <p className="font-medium">
          {t("connect-para2")}{" "}
          </p>
        </article>
      </section>
    </main>
  );
}
