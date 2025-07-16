"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center mt-10">
      <NavigationMenu className=" w-full max-w-7xl py-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-md">
        <NavigationMenuList className="flex justify-center gap-10 text-lg font-black tracking-wide">
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-base">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-base">Projects</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-base">Contact</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer text-base">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
