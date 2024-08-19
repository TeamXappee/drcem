import Spinner from "@/components/shared/spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="grid w-full min-h-[80vh] place-content-center">
      <Spinner />
    </div>
  );
}
