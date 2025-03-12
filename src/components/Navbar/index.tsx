"use client";
import { NavItem, NavItemProps } from "@/components/NavItem";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const items: NavItemProps[] = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/about",
      label: "Sobre",
    },
    {
      url: "/contact",
      label: "Contato",
      newTab: true,
    },
  ];
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header>
      <nav className="flex justify-between items-center p-4 bg-black no-underline">
        <Link href="/" className="text-blue-400 hover:text-white">
          Sirius
        </Link>
        <button
          className="md:hidden text-white bg-transparent cursor-pointer border-0"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FaXmark /> : <FaBars />}
        </button>
        <ul className="hidden md:flex gap-8 mx-16 items-center list-none">
          {items.map((item, index) => (
            <NavItem
              url={item.url}
              label={item.label}
              key={index}
              isActive={pathName == item.url}
              newTab={item.newTab}
            />
          ))}
        </ul>
        <ul
          className={`${
            openMenu ? "flex" : "hidden"
          } absolute top-14 left-0 w-full bg-black flex-col items-center gap-4 py-4 md:hidden`}
        >
          {items.map((item, index) => (
            <NavItem
              url={item.url}
              label={item.label}
              key={index}
              isActive={pathName == item.url}
              newTab={item.newTab}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
