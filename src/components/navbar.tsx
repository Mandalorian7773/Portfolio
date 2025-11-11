"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center mt-10">
      <NavigationMenu className=" w-full max-w-7xl py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-md">
        <NavigationMenuList className="flex justify-center gap-10 text-lg font-black tracking-wide">
          <NavigationMenuItem>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" className={navigationMenuTriggerStyle()}>
              Projects
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}