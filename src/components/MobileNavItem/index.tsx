import Link from "next/link";
import { NavItemProps } from "@/components/NavItem";

interface MobileNavItemProps extends NavItemProps {
  onItemClick: () => void;
}

export function MobileNavItem(props: MobileNavItemProps) {
  return (
    <li onClick={props.onItemClick}>
      <Link
        className={`
          relative
          
          ${
            props.isActive ? "text-blue-400 " : "text-white hover:text-blue-400"
          }
          no-underline
          after:content-['']
          after:absolute
          after:bottom-0
          after:left-0
          after:w-full
          after:h-0.5
          after:bg-blue-300
          ${props.isActive ? "after:scale-x-100" : "after:scale-x-0"}
        `}
        href={props.url}
        target={props.newTab ? "_blank" : "_self"}
      >
        {props.label}
      </Link>
    </li>
  );
}
