"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AssentLogo from "./AssentLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]"
          : "bg-white border-b border-[#E2E8F0]/60"
      }`}
    >
      <nav className="container-custom mx-auto flex items-center justify-between px-5 md:px-8 py-3.5">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <AssentLogo isDark={false} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-[#0B132B]"
                      : "text-text-muted hover:text-[#0B132B]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-primary text-xs uppercase tracking-wider py-2.5 px-6"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 text-[#0B132B]"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#0B132B] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0B132B] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0B132B] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-[380px] border-t border-border bg-white shadow-xl"
            : "max-h-0 bg-transparent"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-3 border-b border-border/50 transition-colors ${
                pathname === link.href
                  ? "text-[#0B132B] font-bold"
                  : "text-text-muted hover:text-[#0B132B]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center mt-3 text-sm py-3"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
