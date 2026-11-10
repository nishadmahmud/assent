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
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(11,19,43,0.08)] border-b border-[#E2E8F0]/80 py-2.5"
          : "bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]/50 py-3.5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-accent via-accent-gold to-accent-dark transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="container-custom mx-auto flex items-center justify-between px-5 md:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.01]">
          <AssentLogo isDark={false} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-[13.5px] font-semibold tracking-wider uppercase transition-all duration-200 relative py-2 ${
                    isActive
                      ? "text-[#0B132B]"
                      : "text-text-muted hover:text-[#0B132B]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-gold to-accent rounded-full shadow-[0_1px_4px_rgba(197,168,128,0.5)]" />
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
            className="btn-primary text-xs uppercase tracking-widest py-2.5 px-6 shadow-md"
          >
            Inquire Now
            <svg
              className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-[#F8F9FA] transition-colors text-[#0B132B]"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block w-5 h-0.5 bg-[#0B132B] rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-3.5 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0B132B] rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen
            ? "max-h-[460px] border-t border-border/80 bg-white/98 backdrop-blur-2xl shadow-2xl"
            : "max-h-0 bg-transparent"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-wider uppercase font-semibold py-3 border-b border-border/40 transition-colors flex items-center justify-between ${
                  isActive
                    ? "text-[#0B132B] font-bold pl-2 border-l-2 border-l-accent"
                    : "text-text-muted hover:text-[#0B132B]"
                }`}
              >
                <span>{link.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isActive ? "text-accent" : "text-border"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            );
          })}
          
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center text-xs py-3.5 tracking-widest shadow-md"
            >
              Inquire Now • Schedule Site Visit
            </Link>
          </div>

          <div className="mt-3 pt-3 border-t border-border/40 text-center">
            <p className="text-[11px] text-text-muted font-medium">
              Direct Hotline: <span className="text-[#0B132B] font-bold">+880 1713-000000</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
