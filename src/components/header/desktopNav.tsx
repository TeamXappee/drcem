"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LocaleLink from "../shared/localeLink";
import { usePathname } from "next/navigation";

export function DesktopNav() {
  const t = useTranslations();
  const segments = usePathname().split("/");
  const active = segments[2];
  const keys = [
    "dental-implants",
    "dental-veneers",
    "crowns-bridges",
    "periodontal-plastic-surgery",
    "immediate-dental-implant-placement",
    "smile-makeover",
    "masseter-botox",
  ];

  const white = active === undefined || active === "about";
  return (
    <NavigationMenu className={`${white && "text-white"}`}>
      <NavigationMenuList>
        <NavigationMenuItem className="w-[25vw] opacity-0 pointer-events-none">
          {/* just to give the menu more width */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`text-base font-medium bg-transparent hover:bg-transparent focus:bg-transparent ${white && " hover:text-white focus:text-white "}`}
          >
            {t("Nav.about.name")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <LocaleLink
                    className="relative flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    href="/"
                  >
                  <img
                      src={"/small-img.jpg"}
                      width={600}
                      height={600}
                      alt=""
                      className="absolute top-0 left-0 object-cover w-full h-full rounded-md brightness-75"
                    />
                    <div
                      className={`z-30 hover:text-white focus:text-white text-white `}
                    >
                      <div className={`grid mt-4 mb-2 text-2xl font-bold `}>
                        <span>{t("Cem.name")}</span>
                      </div>
                      <p className="leading-tight text-white text-md">
                        {t("Cem.title")}
                      </p>
                    </div>
                  </LocaleLink>
                </NavigationMenuLink>
              </li>
              <ListItem
                href={t("Nav.about.sublinks.1.href")}
                title={t("Nav.about.sublinks.1.name")}
              >
                {t("Nav.about.sublinks.1.description")}
              </ListItem>
              <ListItem
                href={t("Nav.about.sublinks.2.href")}
                title={t("Nav.about.sublinks.2.name")}
              >
                {t("Nav.about.sublinks.2.description")}
              </ListItem>
              <ListItem
                href={t("Nav.about.sublinks.3.href")}
                title={t("Nav.about.sublinks.3.name")}
              >
                {t("Nav.about.sublinks.3.description")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${white && "hover:text-white focus:text-white"} text-base font-medium bg-transparent hover:bg-transparent focus:bg-transparent `}
          >
            {t("Nav.services.name")}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="relative backdrop-blur-lg bg-white/10 ">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {keys.map((item) => (
                <ListItem
                  key={t(`Services.${item}.name`)}
                  title={t(`Services.${item}.name`)}
                  href={`services/${t(`Services.${item}.href`)}`}
                >
                  {t(`Services.${item}.content`).slice(0, 65)}..
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <LocaleLink href="/faqs" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                " rounded-xl ml-2 text-base font-medium bg-transparent"
              }
            >
              {t("Nav.faqs.name")}
            </NavigationMenuLink>
          </LocaleLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <LocaleLink
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        href={props.href || ""}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
          {children}
        </p>
      </LocaleLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
