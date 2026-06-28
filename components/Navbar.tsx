"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Compliance", href: "#compliance" },
  { label: "After-Sales", href: "#after-sales" },
  { label: "Contact", href: "#quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="https://www.sitong-boiler.com/static/image/logo.png"
              alt="Henan Sitong Boiler"
              width={120}
              height={36}
              className="h-9 w-auto object-contain brightness-0 invert"
              unoptimized
            />
            <span className="text-green-400 text-xs font-medium tracking-widest uppercase hidden sm:block">
              Bangladesh Partner
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+8801941646278"
              className="hidden sm:flex items-center gap-1.5 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
            >
              <Phone size={14} />
              +880 1941 646278
            </a>
            <a
              href="#quote"
              className="hidden md:inline-flex items-center px-4 py-2 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-colors"
            >
              Get Free Quote
            </a>
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-brand-navy-dark border-t border-blue-800">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-900 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-blue-800">
              <a
                href="tel:+8801941646278"
                className="flex items-center gap-2 px-3 py-2 text-green-400 font-medium text-sm"
              >
                <Phone size={14} />
                +880 1941 646278
              </a>
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="block mt-2 px-4 py-2.5 bg-brand-green text-white text-sm font-semibold rounded-lg text-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
