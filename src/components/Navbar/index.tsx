'use client';
import { NavItem, NavItemProps } from '@/components/NavItem';
import Link from 'next/link';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export function Navbar() {
  const items: NavItemProps[] = [
    {
      url: '/',
      label: 'Home',
    },
    {
      url: '/signin',
      label: 'Entrar',
    },
    {
      url: '/signup',
      label: 'Cadastre-se',
    },
    {
      url: '/about',
      label: 'Sobre',
    },
    {
      url: '/contact',
      label: 'Contato',
      newTab: true,
    },
  ];
  const pathName = usePathname();
  const activeItem = items.find(item => pathName === item.url);
  const activeLabel = activeItem ? activeItem.label : '';
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="text-center">
      <nav
        ref={navRef}
        className="bg-overlay flex h-14 justify-between p-4 no-underline"
      >
        <div onClick={closeMenu}>
          <Link href="/" className="hover:text-accent text-xl font-bold">
            Sirius
          </Link>
        </div>
        <div className="flex gap-4">
          {activeLabel && (
            <span className="flex items-center text-sm md:hidden">
              {activeLabel}
            </span>
          )}
          <button
            className="cursor-pointer border-0 bg-transparent md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        <ul className="mx-16 hidden list-none gap-8 md:flex">
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
            openMenu ? 'flex' : 'hidden'
          } bg-overlay absolute top-14 left-0 z-1 w-full list-none flex-col gap-4 py-4 md:hidden`}
        >
          {items.map((item, index) => (
            <NavItem
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
