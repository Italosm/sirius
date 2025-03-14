import Link from 'next/link';
import { NavItemProps } from '@/components/NavItem';

interface MobileNavItemProps extends NavItemProps {
  onItemClick: () => void;
}

export function MobileNavItem(props: MobileNavItemProps) {
  return (
    <li onClick={props.onItemClick}>
      <Link
        className={`relative ${props.isActive ? 'text-accent' : 'hover:text-accent'} after:bg-red-stellar pb-0.5 no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:content-[''] ${props.isActive ? 'after:scale-x-100' : 'after:scale-x-0'} `}
        href={props.url}
        target={props.newTab ? '_blank' : '_self'}
      >
        {props.label}
      </Link>
    </li>
  );
}
