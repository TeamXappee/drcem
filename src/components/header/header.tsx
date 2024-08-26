import React from "react";
import { DesktopNav } from "./desktopNav";
import { MobNavDrawer } from "./mobNavDrawer";
import Logo from "../shared/logo";
import LanguageSwitcher from "../shared/languageSwitcher";
export default function Header() {
  return (
    <header className="absolute z-50 flex items-center justify-between w-full h-24 p-12  sm:py-20 sm:px-[10vw]">
      <Logo />

      <div className="flex items-center gap-2 lg:gap-[17vw] ">
        <div className="relative z-10 hidden lg:block">
          <DesktopNav />
        </div>
        <button className="p-3 font-bold text-white rounded-xl">
          <LanguageSwitcher />
        </button>
        <div className="mt-4 lg:hidden">
          <MobNavDrawer />
        </div>
      </div>
    </header>
  );
}
