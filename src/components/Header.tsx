"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg lg:text-xl">SC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-primary leading-tight">Sancheti</h1>
              <p className="text-xs text-gray-500 leading-tight">Computers</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-secondary rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918050773494"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary border border-secondary/30 rounded-lg hover:bg-secondary hover:text-white transition-all duration-200"
            >
              <Phone size={16} />
              Call Now
            </a>
            <Link
              href="/quote"
              className="px-5 py-2 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-secondary/25"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-secondary hover:bg-blue-50 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="tel:+918050773494"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-secondary border border-secondary/30 rounded-lg hover:bg-secondary hover:text-white transition-all"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <Link
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-3 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-blue-700 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
