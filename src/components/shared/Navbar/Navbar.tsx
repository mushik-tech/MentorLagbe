"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import NavLinks from "@/components/shared/Navbar/NavLinks";
import Logo from "@/components/shared/Logo/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLinks href="/">Home</NavLinks>
      </li>
      <li>
        <NavLinks href="tuitions">Browse Tuitions</NavLinks>
      </li>
      <li>
        <NavLinks href="pricing">Pricing</NavLinks>
      </li>
      <li>
        <NavLinks href="about">About</NavLinks>
      </li>
      <li>
        <NavLinks href="dashboard">Dashboard</NavLinks>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Logo />
          </div>
        </div>
        <ul className="hidden items-center gap-8 md:flex">{navLinks}</ul>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="signin" className="block py-2">
            <Button variant="outline"> Sign In</Button>
          </Link>
          <Link href="signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="signin" className="block py-2">
                <Button> Sign In</Button>
              </Link>
              <Link href="signup">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
