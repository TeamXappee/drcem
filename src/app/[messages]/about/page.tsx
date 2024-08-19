import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function About() {
  const t = await getTranslations("About");
  return (
    <main className="px-[10vw] space-y-20 ">
      <div className="h-[30vh] sm:h-[45vh]">
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-[30vh] sm:h-[45vh] bg-black">
          <Image
            alt="Doctor cem baysal in action."
            src="/about.png"
            width={1400}
            height={800}
            priority
            quality={100}
            className="object-cover w-full h-full aspect-video rounded-b-3xl brightness-[0.65] "
          />
        </div>
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
            An Adventure of ongoing Learning{" "}
          </p>

          <article className="grid gap-4 mx-auto text-lg my-7 ">
            <p>
              Dr. Cem&apos;s adventure towards becoming an influential figure in
              dentistry started in the classrooms of Ankara, Turkey, and
              expanded internationally during his middle school years in
              Schwabmunchen, Germany. This initial exposure to other cultures
              shaped his global outlook on dentistry practices.{" "}
            </p>
            <p>
              In 1987, he began his official dentistry studies at the esteemed
              Istanbul University Faculty of Dentistry. However, for Dr. Cem,
              receiving his degree in 1991 was only the beginning. With an
              unstoppable hunger for information, he earned a doctorate in Oral
              and Maxillofacial Radiology, which he completed in 1998. During
              this period, he also studied microbiology and virology at Istanbul
              University&apos;s School of Medicine, demonstrating his
              interdisciplinary approach to dental research.
            </p>
          </article>
        </div>
        <Image
          style={{ objectPosition: "50% 25%" }}
          alt="Dr. Cem's adventure towards becoming an influential figure in
            dentistry started in the classrooms."
          src="/learner.png"
          width={1000}
          height={800}
          priority
          quality={100}
          className="object-cover   m-auto h-full  aspect-square rounded-3xl brightness-[0.95]  mt-7"
        />
      </section>
      <section className="flex flex-row-reverse gap-10">
        <div >
          <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron  text-cyan-950">
            Managing Academics and Clinical Practice.
          </p>

          <article className="grid gap-4 mx-auto text-lg my-7 ">
            <p>
              Dr. Baysal&apos;s professional career began in 1991, when he
              started his own oral surgery practice. He has always believed in
              the importance of merging practical experience with academic
              perception. In addition to his academic duties, he worked as a
              lecturer and visiting professor at G. Marconi University from 2016
              to 2019. He currently works as an Associate Professor and Head of
              the Radiology Department at Istanbul. Kent University has been
              ongoing since 2018, and he continues. &quot;To manage my time, I
              had to separate the day as mornings in university and afternoons
              in the clinic.&quot; to help influence the next generation of
              dental professionals. This sense of balance has been the backbone
              of his success.
            </p>
          </article>
        </div>
        <Image
          alt="Doctor cem giving a lecture."
          src="/lecturing.png"
          width={1000}
          height={800}
          priority
          quality={100}
          className="object-cover w-[45%] rounded-3xl brightness-[0.95]  mt-7"
        />
      </section>
      <section>
        <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
          The Baysal Technique: A Game-Changer in Sinus Lifting techniques{" "}
        </p>
        <Image
          alt="Dr. Cem's adventure towards becoming an influential figure in
            dentistry started in the classrooms."
          src="/technique.png"
          width={1000}
          height={800}
          priority
          quality={100}
          className="object-cover m-auto h-full aspect-video rounded-3xl brightness-[0.95]  mt-7"
        />
        <article className="grid gap-4 text-lg my-14 -">
          <p>
            Dr. Cem made his most major breakthrough in dentistry in 2022, when
            he developed the &quot;Baysal technique&quot; for large-area sinus
            lifts. This innovative technique tackles a prevalent issue in dental
            implantology: not sufficient bone in the upper molars areas. The
            Baysal approach enables simultaneously implant placement and sinus
            lifting.{" "}
          </p>
          <ul className="flex flex-wrap ml-4 -my-2 list-disc gap-x-10">
            <li className="font-medium capitalize">
              reducing the requirement for bone grafts.
            </li>
            <li className="font-medium capitalize">
              lowering the danger of sinus perforation.
            </li>
            <li className="font-medium capitalize">
              {" "}
              improving bone integration with implants.
            </li>
          </ul>
          <p>
            {" "}
            In 2024, Dr. Cem expanded on his idea by patenting the &quot;Baysal
            osteotome,&quot; a device that makes it easier to use his procedure.
            &quot;With this technique,&quot; Dr. Cem states, &quot;patients with
            lost bone on upper molar areas can have implants simultaneously with
            lifting, especially without any grafts, with very less sinus
            perforation risk.&quot;
          </p>
        </article>
      </section>
      <section>
        <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
          Besides The Dental Chair
        </p>
        <article className="grid gap-4 mx-auto text-lg my-14 -">
          <p>
            What defines Dr. Cem is not just his professional accomplishments,
            but also his wide variety of interests and skills. When he&apos;s
            not in the clinic or teaching, he&apos;s generally off enjoying his
            hobbies. He is a private pilot and sea captain, allowing him to
            travel and embark on new adventures. He also enjoys riding horses,
            search-and-rescue diving, and motorbike riding. These hobbies
            represent Dr. Cem&apos;s adventurous nature and belief in lifelong
            learning, both of which have definitely influenced his unique
            approach to dentistry. These activities not only bring him delight,
            but also keep him refreshed and inspired.
          </p>
        </article>
      </section>
      <section>
        <p className="text-[3rem] lg:text-[4rem] 2xl:text-[6rem]  mx-auto tracking-tighter leading-none font-aileron text-center text-cyan-950">
          Award & Recognition
        </p>

        <Image
          alt="Doctor cem giving a lecture."
          src="/award.png"
          width={1000}
          height={800}
          priority
          quality={100}
          className="object-contain sm:w-1/4 m-auto h-full aspect-square rounded-3xl brightness-[0.95] mt-7"
        />
        <article className="grid gap-4 mx-auto text-lg my-14">
          <p>
            Dr. Baysal&apos;achievements to dentistry have received widespread
            recognition. On December 10, 2023, he was mentioned in
            Outlook&apos;s article &quot;Top Best 15 Dentists And Dental Clinics
            In Turkey&quot;. In 2024, he was ranked among the top 10 dentists in
            the world by the Global Clinic Rating List. His achievements
            demonstrate his passion and ability in the field.
          </p>
          <p>
            <span className="font-semibold">Professional associations:</span>{" "}
            Dr. Baysal is an outstanding member of the Turkish Dental
            Association and has remained an active participant in numerous
            professional organisations throughout his career.
          </p>
        </article>
      </section>
      <section>
        <article className="grid gap-4 mx-auto text-lg my-14">
          <p className="font-bold">Let&apos;  s Connect</p>
          <p>
            “I would love to hear from you. Please contact me if you have any
            questions about my work, would like to explore revolutionary
            dentistry treatments, or simply want to connect. You can contact me
            using the information on this website, and I will be pleased to
            help. Thank you for stopping by, and I hope to connect with you
            soon”
          </p>
          <p className="font-medium">
            For appointments, inquiries, or more information, please reach out
            here.{" "}
          </p>
        </article>
      </section>
    </main>
  );
}
