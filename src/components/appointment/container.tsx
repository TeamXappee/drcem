"use client";

import React, { useEffect, useState } from "react";
import Step1 from "./step1";
import NextStep from "./nextStep";
import Step2 from "./step2";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Step3 from "./step3";

export default function MultiStepFormContainer() {
  const router = useRouter();
  const [appointment, setAppointment] = useState({
    type: "",
    for: "",
    patient: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      zipCode: "",
      gender: "",
      selectedDate: "",
      comments: "",
      age: undefined,
    },
  } as any);

  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const nextStep = () => {
    setActiveStepIdx(
      activeStepIdx <= steps.length - 2 ? activeStepIdx + 1 : activeStepIdx
    );
  };

  const steps = [
    <Step1
      key={"step1"}
      nextStep={nextStep}
      appointment={appointment}
      setAppointment={setAppointment}
    />,
    <Step2
      key={"step2"}
      nextStep={nextStep}
      appointment={appointment}
      setAppointment={setAppointment}
    />,
    <Step3
      key={"step3"}
      appointment={appointment}
      setAppointment={setAppointment}
    />,
  ];

  useEffect(() => {
    if (activeStepIdx > steps.length - 1) return;
  }, [activeStepIdx]);

  const handleBackBtn = () => {
    if (activeStepIdx === 0) {
      if (appointment.type || appointment.for) {
        return toast.warning(
          "Are you sure you want to cancel the appointment?",
          {
            action: {
              label: "Yes",
              onClick: () => {
                router.back();
              },
            },
          }
        );
      } else {
        return router.back();
      }
    }
    setActiveStepIdx(activeStepIdx - 1);
  };

  return (
    <main className="2xl:min-w-[1300px] sm:px-16 px-4 relative top-28">
      <div className={`${activeStepIdx !== 2 && "flex justify-center"}`}>
        {
          <section
            className={` min-h-[75svh] space-y-6 relative  ${activeStepIdx !== 2 && "grid w-full place-content-center  sm:max-w-[40vw] text-center"}`}
          >
            {steps[activeStepIdx]}
            {activeStepIdx !== 2 && (
              <NextStep
                appointment={appointment}
                activeStepIdx={activeStepIdx}
                onNext={nextStep}
              />
            )}
          </section>
        }
      </div>
    </main>
  );
}
