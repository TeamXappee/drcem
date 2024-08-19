"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function UserAvatar({
  src,
  fallback,
}: {
  src: string;
  fallback: string;
}) {
  return (
    <Avatar>
      <AvatarImage
        className="w-8 sm:w-10 xl:w-12 aspect-square"
        src={src}
        width={50}
        height={50}
      />

      <AvatarFallback className="flex items-center justify-center w-8 h-8 p-2 bg-gray-200 rounded-full sm:w-10 sm:h-10 xl:w-12 xl:h-12 dark:bg-gray-400 animate-pulse aspect-square ">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}
