import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { useTranslations } from "next-intl";

export default function Step2({
  setAppointment,
  appointment,
  nextStep,
}: {
  setAppointment: React.Dispatch<React.SetStateAction<any>>;
  appointment: any;
  nextStep: () => void;
}) {
  const handleSetFor = (Bookfor: string) => {
    setAppointment((prev: any) => ({ ...prev, for: Bookfor }));
    nextStep();
  };
  const t = useTranslations("step2");
  const answers = ["Scheduling for myself", "Scheduling for someone else"];
  return (
    <>
      <h1 className="text-3xl font-semibold">
      {t("h1")}
      </h1>
      <ul className="grid gap-2">
        {answers.map((answer) => (
          <li
            key={answer}
            onClick={() => handleSetFor(answer)}
            className={`${appointment.for === answer ? "bg-cyan-800/80 text-white  " : "bg-cyan-800/10  border-white  hover:border-indigo-900/20 "} p-3 text-sm sm:text-lg  border rounded-xl cursor-pointer transition-colors`}
          >
               {t(`${answer}`)}
          </li>
        ))}
      </ul>
    </>
  );
}
