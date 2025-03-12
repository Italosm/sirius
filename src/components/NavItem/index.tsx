import Link from "next/link";

export interface NavItemProps {
  url: string;
  label: string;
  isActive?: boolean;
}
export function NavItem(props: NavItemProps) {
  return (
    <li>
      <Link
        className={`
          ${
            props.isActive
              ? "text-blue-400 underline underline-offset-6"
              : `text-white text-base no-underline hover:text-blue-400`
          }
        `}
        href={props.url}
      >
        {props.label}
      </Link>
    </li>
  );
}
