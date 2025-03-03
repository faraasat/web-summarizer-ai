"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 cyber-blur-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <i className="ri-brain-line text-3xl text-primary mr-2 glow-text"></i>
              <span className="font-heading font-bold text-lg sm:text-xl text-white cyber-text">
                AI Content Summarizer
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium ${
                pathname === "/"
                  ? "text-primary glow-text"
                  : "text-gray-300 hover:text-primary"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/summarizer"
              className={`font-medium ${
                pathname === "/summarizer"
                  ? "text-primary glow-text"
                  : "text-gray-300 hover:text-primary"
              } transition-colors`}
            >
              Summarizer
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="GitHub Repository"
            >
              <i className="ri-github-fill text-2xl"></i>
            </a>

            <ThemeSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeSwitcher />

            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-primary focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <i
                className={`${
                  isMenuOpen ? "ri-close-line" : "ri-menu-line"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/"
                  ? "text-primary bg-white/10"
                  : "text-gray-300 hover:bg-white/5 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/summarizer"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/summarizer"
                  ? "text-primary bg-white/10"
                  : "text-gray-300 hover:bg-white/5 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Summarizer
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/5 hover:text-primary"
            >
              <i className="ri-github-fill mr-2"></i> GitHub Repository
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
