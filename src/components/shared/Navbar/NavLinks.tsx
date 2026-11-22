import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinksProps {
  href: string;
  children: React.ReactNode;
}

const NavLinks = ({ href, children }: NavLinksProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${isActive ? "border px-4 py-2 rounded-xl border-[#075144]" : ""} hover:text-primary`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
