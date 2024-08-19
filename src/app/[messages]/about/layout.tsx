import React, { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <div className="pb-16">{children}</div>;
}
