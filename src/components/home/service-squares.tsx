import Image from "next/image";
import { Button } from "../ui/button";
import LocaleLink from "../shared/localeLink";

export default function ServiceSquares() {
  return (
    <div className="grid gap-1 space-y-1 text-white lg:grid-cols-2 sm:space-y-0 lg:h-[600px]">
      <section className="relative flex items-start p-10 overflow-hidden bg-black sm:p-20 lg:rounded-l-2xl group ">
        <Image
          alt=""
          layout="fill"
          src={"/small-img.jpg"}
          className="absolute object-cover duration-1000  ease-in-out brightness-[0.6] group-hover:scale-150 lg:rounded-l-2xl"
        />
        <div className="relative z-10 space-y-4">
          <p className="text-4xl font-bold lg:text-5xl ">
            Periodontal plastic surgery
          </p>

          <Button size={"lg"} className="bg-transparent" variant={"outline"}>
            <LocaleLink href="/services/periodontal-plastic-surgery">
              Know more
            </LocaleLink>
          </Button>
        </div>
      </section>
      <section className="grid grid-rows-4 gap-1 sm:grid-rows-2 sm:grid-cols-2 ">
        <div className="relative flex items-end w-full h-full p-10 overflow-hidden bg-black aspect-square lg:aspect-auto group ">
          <Image
            alt=""
            layout="fill"
            src={"/dental-veneers.png"}
            className="absolute object-cover w-full h-full duration-700 ease-out group-hover:scale-125 brightness-[0.6]"
          />
          <div className="relative z-10 space-y-2">
            <p className="text-xl font-medium sm:text-base lg:text-xl">
              Dental Veneers
            </p>

            <Button size={"sm"} className="bg-transparent" variant={"outline"}>
              <LocaleLink href="/services/dental-veneers">Know more</LocaleLink>
            </Button>
          </div>
        </div>
        <div className="relative flex items-end w-full h-full p-10 overflow-hidden bg-black aspect-square lg:aspect-auto lg:rounded-tr-2xl group ">
          <Image
            alt=""
            layout="fill"
            src={"/services/sm-1.png"}
            className="absolute object-cover w-full h-full duration-700 ease-out group-hover:scale-125 brightness-[0.6] lg:rounded-tr-2xl "
          />
          <div className="relative z-10 space-y-2">
            <p className="text-xl font-medium sm:text-base lg:text-xl">
              Dental Implant
            </p>

            <Button size={"sm"} className="bg-transparent" variant={"outline"}>
              <LocaleLink href="/services/dental-implants">
                Know more
              </LocaleLink>
            </Button>
          </div>
        </div>
        <div className="relative flex items-end w-full h-full p-10 overflow-hidden bg-black aspect-square lg:aspect-auto group ">
          <Image
            alt=""
            layout="fill"
            src={"/massater-botox.jpg"}
            className="absolute object-cover duration-700 ease-out group-hover:scale-125 brightness-[0.6]"
          />
          <div className="relative z-10 space-y-2">
            <p className="text-xl font-medium sm:text-base lg:text-xl">
              Massater Botox
            </p>

            <Button size={"sm"} className="bg-transparent" variant={"outline"}>
              <LocaleLink href="/services/masseter-botox">Know more</LocaleLink>
            </Button>
          </div>
        </div>

        <div className="relative flex items-end w-full h-full p-10 overflow-hidden bg-black aspect-square lg:aspect-auto lg:rounded-br-2xl group ">
          <Image
            alt=""
            layout="fill"
            src={"/services/bleaching.jpg"}
            className="absolute object-cover duration-700 ease-out group-hover:scale-125 brightness-[0.6] lg:rounded-br-2xl "
          />
          <div className="relative z-10 space-y-2">
            <p className="text-xl font-medium sm:text-base lg:text-xl">
              Smile Makeover
            </p>

            <Button size={"sm"} className="bg-transparent" variant={"outline"}>
              <LocaleLink href="/services/smile-makeover">Know more</LocaleLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
