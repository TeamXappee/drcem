import Image from "next/image";
import React from "react";

export default function SmilingSection() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-stretch justify-between text-cyan-50 sm:flex-row">
        <div className="w-full p-10 py-12 space-y-6 sm:w-1/2 sm:py-16 bg-cyan-800 sm:rounded-l-2xl rounded-t-2xl sm:rounded-r-none">
          <h3 className="text-2xl font-medium sm:text-3xl">
            Why Choose Dr Cem Baysal?
          </h3>
          <ul className="space-y-4 sm:pl-5 sm:list-disc">
            <li>
              Dr. Cem Baysal is recognised as the best dentist in Istanbul,
              Turkey.
            </li>
            <li>
              Our clinic utilises cutting-edge dental technology for precise and
              efficient treatments.
            </li>
            <li>
              Dr. Cem&apos;s clinic has been honored as the 2023 clinic award
              winners.
            </li>
            <li>
              Dr. Cem Baysal&apos;s 33 years of experience offer unparalleled
              care and outstanding results.
            </li>
            <li>
              In 2024, he was ranked among the top 10 dentists in the world by
              the Global Clinic Rating List. His achievements demonstrate his
              passion and ability in the field.
            </li>
            <li>
              In 2024, he was ranked among the top 10 dentists in the world by
              the Global Clinic Rating List. His achievements demonstrate his
              passion and ability in the field.Dr. Baysal is an outstanding
              member of the Turkish Dental Association and has remained an
              active participant in numerous professional organisations
              throughout his career.
            </li>
          </ul>
        </div>
        <div className="relative w-full h-64 sm:w-1/2 sm:h-auto ">
          <Image
            alt="Smiling"
            src="/why-choose-us-2.jpg"
            layout="fill"
            objectFit="cover"
            className="sm:rounded-r-2xl rounded-b-2xl sm:rounded-b-none"
          />
        </div>
      </div>
    </div>
  );
}
