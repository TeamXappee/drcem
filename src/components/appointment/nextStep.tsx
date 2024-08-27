import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { toast } from "sonner";

export default function NextStep({
  onNext,
  appointment,
  activeStepIdx,
}: {
  onNext: () => void;
  appointment: any;
  activeStepIdx: number;
}) {
  const step1 = useTranslations("step1");
  const step2 = useTranslations("step2");
  const handleNextStep = () => {
    switch (activeStepIdx) {
      case 0:
        if (!appointment.type.length) {
          return toast.error(step1("validation"));
        }
        break;
      case 1:
        if (!appointment.for.length) {
          return toast.error(step2("validation"));
        }
        break;
    }
    onNext();
  };
  return (
    <div className="h-10">
      <button
        className="absolute bottom-0 left-0 right-0 p-4 m-auto rounded-full aspect-square bg-primary text-primary-foreground w-fit"
        onClick={handleNextStep}
      >
        <ArrowDown size={25} strokeWidth={2.5} />
      </button>
    </div>
  );
}
