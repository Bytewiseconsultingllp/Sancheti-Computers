"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-scroll">
      {/* Announcement Bar */}
      <div className="announcement-gradient text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8 sm:h-9">
          <p className="hidden sm:block font-medium">
            Trusted IT Partner Since 2012 | SP Road, Bengaluru
          </p>
          <p className="sm:hidden font-medium text-[11px]">
            Trusted IT Partner Since 2012
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+918050773494"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-medium"
            >
              <Phone size={12} />
              <span className="hidden sm:inline">+91 80507 73494</span>
              <span className="sm:hidden">Call Now</span>
            </a>
            <a
              href="https://wa.me/918050773494?text=Hi%20Sancheti%20Computers!%20I%20need%20information%20about%20your%20products/services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-medium"
            >
              <MessageCircle size={12} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm header-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/logo.svg" alt="Sancheti Computers" className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg shadow-md group-hover:shadow-lg transition-shadow" />
              <div className="hidden sm:block">
                <h1 className="text-base lg:text-lg font-bold text-primary leading-tight tracking-tight">
                  Sancheti Computers
                </h1>
                <p className="text-[11px] text-muted leading-tight">
                  IT Solutions Since 2012
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-muted hover:text-primary rounded-lg hover:bg-surface-alt transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="tel:+918050773494"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-primary border border-border rounded-lg hover:bg-surface-alt transition-all duration-200"
              >
                <Phone size={15} />
                Call Now
              </a>
              <a
                href="https://wa.me/918050773494?text=Hi%20Sancheti%20Computers!%20I%20need%20information%20about%20your%20products/services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !py-2.5 !px-5 !text-sm"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-muted hover:text-primary hover:bg-surface-alt rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-muted hover:text-primary hover:bg-surface-alt rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
                <a
                  href="tel:+918050773494"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-primary border border-border rounded-lg hover:bg-surface-alt transition-all"
                >
                  <Phone size={15} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918050773494?text=Hi%20Sancheti%20Computers!%20I%20need%20information%20about%20your%20products/services."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-whatsapp rounded-lg hover:bg-whatsapp-dark transition-all"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
