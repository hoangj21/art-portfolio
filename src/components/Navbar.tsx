"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/commissions", label: "Commissions" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[clamp(16px,4vw,48px)] h-16 bg-bg/[0.92] backdrop-blur-[20px] border-b border-border-red">
      {/* Gradient accent line under nav */}
      <div className="absolute -bottom-px left-0 right-0 h-[2px] bg-gradient-to-r from-teal/15 via-transparent via-8% via-accent-deep via-accent via-accent-bright via-accent via-accent-deep to-transparent to-92% opacity-50" />

      <Link
        href="/"
        className="font-hero text-[22px] tracking-wider uppercase text-fg no-underline relative hover:text-accent-bright transition-colors before:content-['//'] before:text-accent before:mr-1.5 before:text-[18px]"
      >
        Joanna Hoang
      </Link>

      {/* Hamburger */}
      <button
        className="flex sm:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer group"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        <span className="block w-[22px] h-[2px] bg-fg group-hover:bg-accent-bright transition-colors" />
        <span className="block w-[22px] h-[2px] bg-fg group-hover:bg-accent-bright transition-colors" />
        <span className="block w-[22px] h-[2px] bg-fg group-hover:bg-accent-bright transition-colors" />
      </button>

      {/* Desktop nav links */}
      <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-body text-[13px] font-medium uppercase tracking-wider no-underline relative py-1 transition-colors ${
                pathname === link.href
                  ? "text-accent-bright after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-accent-deep after:via-accent after:to-accent-bright after:shadow-[0_0_8px_rgba(196,32,51,0.4)]"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <ul className="sm:hidden absolute top-16 left-0 right-0 flex flex-col gap-4 bg-bg/[0.96] backdrop-blur-[20px] border-b border-border-red px-[clamp(16px,4vw,48px)] py-4 list-none m-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-[13px] font-medium uppercase tracking-wider no-underline transition-colors ${
                  pathname === link.href ? "text-accent-bright" : "text-fg-muted hover:text-fg"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
