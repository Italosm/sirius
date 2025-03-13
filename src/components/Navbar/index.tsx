"use client";
import { NavItem, NavItemProps } from "@/components/NavItem";
import { MobileNavItem } from "@/components/MobileNavItem";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

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
  const activeItem = items.find((item) => pathName === item.url);
  const activeLabel = activeItem ? activeItem.label : "";
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav
        ref={navRef}
        className="flex justify-between items-center p-4 bg-black no-underline relative"
      >
        <div onClick={closeMenu}>
          <Link href="/" className="text-blue-400 hover:text-white">
            Sirius
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {activeLabel && (
            <span className="md:hidden text-white text-sm">{activeLabel}</span>
          )}
          <button
            className="md:hidden text-white bg-transparent cursor-pointer border-0"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        <ul className="hidden md:flex gap-8 mx-16 items-center list-none">
          {items.map((item, index) => (
            <NavItem
              url={item.url}
              label={item.label}
              key={index}
              isActive={pathName === item.url}
              newTab={item.newTab}
            />
          ))}
        </ul>
        <ul
          className={`${
            openMenu ? "flex" : "hidden"
          } absolute top-14 left-0 w-full bg-black flex-col items-center gap-4 py-4 md:hidden z-10`}
        >
          {items.map((item, index) => (
            <MobileNavItem
              url={item.url}
              label={item.label}
              key={index}
              isActive={pathName === item.url}
              newTab={item.newTab}
              onItemClick={closeMenu}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
