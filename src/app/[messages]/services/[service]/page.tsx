import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

type pageParams = {
  params: {
    locale: string;
    service: string;
  };
};
export async function generateMetadata({ params }: pageParams) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Services",
  });

  return {
    title: `Cem Baysal - ${t(`${params.service}.name`)} `,
    description: t(`${params.service}.content`).slice(0, 95) + "...",
  };
}

export default async function Service({
  params,
}: {
  params: { service: string };
}) {
  const t = await getTranslations("Services");
  const formatContent = (text: string) => text.replace(/\n/g, '<br />');
  // const nextLink = t(`${params.service}.nextLink`);
  return (
    <main className="space-y-4 sm:space-y-8 flex flex-col justify-center items-center px-[10vw] relative top-[5vh] sm:top-[15vh] pb-[20vh] pt-[10vh] ">
      <h1 className=" leading-none text-[2.5rem] lg:text-[4rem] 2xl:text-[3rem] font-aileron font-semibold text-cyan-950">
        {t(`${params.service}.name`)}
      </h1>
      <br className="block sm:hidden" />
      <img
        alt={t(`${params.service}.name`)}
        width={1000}
        height={600}
        className="object-cover aspect-video rounded-xl "
        src={`${t(`${params.service}.image`)}`}
      />
       <p className="text-xl" dangerouslySetInnerHTML={{ __html: formatContent(t(`${params.service}.content`)) }} />
     
    </main>


  );
}


// <main className="flex flex-col items-center px-[10vw] relative top-[5vh] sm:top-[15vh] pb-[20vh] pt-[10vh] ">
// <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
//   <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
//     <h1 className="leading-none text-[2.5rem] lg:text-[4rem] 2xl:text-[3rem] font-aileron font-semibold text-cyan-950">
//       {t(`${params.service}.name`)}
//     </h1>
//     <p className="text-xl mt-4">{t(`${params.service}.content`)}</p>
//   </div>
//   <Image
//     alt={t(`${params.service}.name`)}
//     width={500}
//     height={400}
//     className="object-cover aspect-video rounded-xl"
//     src={`${t(`${params.service}.image`)}`}
//   />
// </div>
// </main>