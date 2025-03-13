import Link from 'next/link';

export interface NavItemProps {
  url: string;
  label: string;
  isActive?: boolean;
  newTab?: boolean;
}

export function NavItem(props: NavItemProps) {
  return (
    <li>
      <Link
        className={`relative ${props.isActive ? 'text-blue-400' : 'hover:text-blue-400'} pb-0.5 no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-300 after:transition-all after:duration-300 after:ease-in-out after:content-[''] ${props.isActive ? 'after:scale-x-100' : 'after:scale-x-0'} `}
        href={props.url}
        target={props.newTab ? '_blank' : '_self'}
      >
        {props.label}
      </Link>
    </li>
  );
}
