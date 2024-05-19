import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { CiPhone } from "react-icons/ci";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <nav className="ml-auto mr-8 lg:hidden flex gap-2 items-center">
      <a href={`tel:+380986531088`}>
        <CiPhone className="w-8 h-8 animate-pulse"/>
      </a>
      <DropdownMenu onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger className="outline-none flex flex-col gap-2 cursor-pointer">
          <div
            className={`w-8 dark:bg-white h-0.5 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></div>
          <div
            className={`w-8 dark:bg-white h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-8 dark:bg-white h-0.5 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 mr-4 tracking-wide">
          <DropdownMenuItem>
            <Link href="#about">Про Нас</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#ourservices">Послуги</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#prices">Ціни</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="#contacts">Контакти</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="https://b1220380.alteg.io/">Запис Онлайн</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
