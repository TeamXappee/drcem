import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col-reverse items-start gap-10 pt-12 sm:grid sm:grid-cols-5">
      <Image
        alt="Happy Patents"
        src="/why-choose-us.jpg"
        width={1000}
        height={1400}
        className="sm:w-[100%] w-full rounded-xl col-span-2 sticky top-0"
      />
      <article className="col-span-3 space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            Leading Dentistry via Innovation and Passion - The Best dental
            clinic in Turkey
          </h1>
          <h2 className="text-4xl opacity-80 ">
            Accredited and Trusted Dental Care in Turkey.
          </h2>
        </div>
        <p className="p-1 text-lg leading">
          At Dr. Cem Baysal&apos;s clinic, we have been providing exceptional dental
          care services as distinguished figure in the field of Oral and
          Maxillofacial Radiology and Oral Implantology, recognized for his
          innovative approaches and exceptional patient care. Dr. Cem Baysal&apos;s
          extensive education and experience underpin our commitment to
          excellence, including his studies at{" "}
          <a className="font-medium text-cyan-800">
            Guglielmo Marconi University
          </a>
          ,{" "}
          <a className="font-medium text-cyan-800">
            Istanbul University Faculty of Dentistry
          </a>
          , and his roles as Head of the Department of Oral Diagnosis and
          Radiology at{" "}
          <a className="font-medium text-cyan-800">Istanbul Kent University</a>,
          Lecturer at{" "}
          <a className="font-medium text-cyan-800">
            Guglielmo Marconi University
          </a>
          , and Oral Maxillofacial Radiology Specialist at{" "}
          <a className="font-medium text-cyan-800">
            Startest Diagnostic and Imaging
          </a>{" "}
          Center. DR Cem Dental Clinic prioritizes patient education, allowing
          you to come to an educated decisions about your dental health. Our
          trained team will completely explain each treatment and answer any
          concerns you might have, ensuring that you are confident and informed
          throughout the process. we adhere to international standards of
          professionalism and quality, ensuring our patients receive the highest
          level of care.
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
