import Image from "next/image";
import React from "react";

export default function WhatsappButton() {
  return null
  return (
    <a 
    href="https://api.whatsapp.com/send/?phone=902122340330&text&type=phone_number&app_absent=0" 
    target="_blank" className="fixed bottom-0 right-0 z-50 m-8 cursor-pointer sm:bottom-0 sm:right-0 w-fit">
      <Image
        src={"/whatsapp.png"}
        width={75}
        height={75}
        alt="whatsapp"
        className="w-10 duration-500 ease-in-out aspect-square hover:scale-105 "
      />
    </a>
  );
}
