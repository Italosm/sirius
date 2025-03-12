"use client";
import { NavItem, NavItemProps } from "@/components/NavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    },
  ];
  const pathName = usePathname();
  return (
    <header>
      <nav className="flex justify-between items-center p-4 bg-black no-underline">
        <Link href="/" className="text-blue-400 hover:text-white">
          Sirius
        </Link>
        <ul className="flex gap-8 mx-16 items-center list-none">
          {items.map((item, index) => (
            <NavItem
              url={item.url}
              label={item.label}
              key={index}
              isActive={pathName == item.url}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
