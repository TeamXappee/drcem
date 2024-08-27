import { useTranslations } from "next-intl";
import React from "react";

export default function Step1({
  setAppointment,
  appointment,
  nextStep,
}: {
  setAppointment: React.Dispatch<React.SetStateAction<any>>;
  appointment: any;
  nextStep: () => void;
}) {
  const handleSetType = (type: string) => {
    setAppointment((prev: any) => ({ ...prev, type }));
    nextStep();
  };
  const t = useTranslations("step1");
  const types = [
    "New Patient",
    "Existing Patient - Dental Cleaning",
    "Existing Patient Dental Treatment",
    "Emergency",
    "Consultation",
  ];
  return (
    <>
      <h1 className="text-3xl font-semibold">
      {t("h1")}
      </h1>
      <ul className="grid gap-2">
        {types.map((type) => (
          <li
            key={type}
            onClick={() => handleSetType(type)}
            className={`${appointment.type === type ? "bg-cyan-800/80 text-white  " : "bg-cyan-800/10  border-white  hover:border-indigo-900/20 "} p-3 text-sm sm:text-lg  border rounded-xl cursor-pointer transition-colors`}
          >
            {t(`${type}`)}
          </li>
        ))}
      </ul>
    </>
  );
}
