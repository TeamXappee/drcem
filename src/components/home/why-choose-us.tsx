import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  const t = useTranslations("Home.whychooseus");
  return (
    <div className="flex flex-col-reverse items-center gap-10 pt-12 sm:grid sm:grid-cols-5">
     <img
        alt="Happy Patents"
        src="/why-choose-us.jpg"
        width={1000}
        height={1400}
        className="sm:w-[100%] sm:h-[85%] w-full rounded-xl col-span-2 sticky top-0"
      />
      <article className="col-span-3 space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
          {t("h1")}
          </h1>
          <h2 className="text-4xl opacity-80 ">
          {t("h2")}
          </h2>
        </div>
        <p className="p-1 text-lg leading">
        {t("p1")}
          <br /> <br />  {t("p2")}
          <a className="font-medium text-cyan-800">
          {t("p1a1")}
          </a>
          ,{" "}
          <a className="font-medium text-cyan-800">
          {t("p1a2")}
          </a>
          {t("p3")}
          <a className="font-medium text-cyan-800">{t("p3a1")}</a>,
          {t("p3a11")}
          <a className="font-medium text-cyan-800">
          {t("p3a2")}
          </a>
          {t("p3a3")}
          <a className="font-medium text-cyan-800">
          {t("p3a4")}
          </a>{" "}
          {t("p4")}
          <br /> <br /> {t("p5")}
        </p>
        {/* <p className="p-1 text-lg leading">
          At Dr. Cem Baysal&apos;s clinic, we have been providing exceptional
          dental care services since our establishment in 1991. Dr. Cem
          Baysal&apos;s extensive education and experience underpin our
          commitment to excellence, including his studies at{" "}
          <span className="font-medium text-cyan-800 ">
            Guglielmo Marconi University
          </span>
          ,{" "}
          <span className="font-medium text-cyan-800 ">
            Istanbul University Faculty of Dentistry
          </span>
          , and his roles as Head of the Department of Oral Diagnosis and
          Radiology at
          <span className="font-medium text-cyan-800 ">
            Istanbul Kent University
          </span>
          , Lecturer at{" "}
          <span className="font-medium text-cyan-800 ">
            Guglielmo Marconi University
          </span>
          , and Oral Maxillofacial Radiology Specialist at{" "}
          <span className="font-medium text-cyan-800 ">
            Startest Diagnostic and Imaging
          </span>{" "}
          Center. He has also served as Head of Dentistry Departments at{" "}
          <span className="font-medium text-cyan-800 ">
            Baykent Medical Center
          </span>{" "}
          and <span className="font-medium text-cyan-800 ">Medline Clinic</span>
          . As an esteemed member of the{" "}
          <span className="font-medium text-cyan-800 ">
            Turkish Dental Association
          </span>{" "}
          and a holder of a{" "}
          <span className="font-medium text-cyan-800 ">
            health tourism certificate
          </span>
          , we adhere to international standards of professionalism and quality,
          ensuring our patients receive the highest level of care.
        </p> */}
      </article>
    </div>
  );
}
