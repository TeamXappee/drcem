import { cn } from "@/lib/utils";
import React from "react";

export default function HeaderSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-2 sm:p-4 sm:pr-8  rounded-2xl w-full h-[10vh] flex items-center justify-center text-base",
        className
      )}
    >
      {children}
    </div>
  );
}
