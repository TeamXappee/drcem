import { cn } from "@/lib/utils";
import React from "react";

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-[2rem] sm:text-[2.5rem] text-center text-cyan-950 tracking-tighter leading-none  font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}
