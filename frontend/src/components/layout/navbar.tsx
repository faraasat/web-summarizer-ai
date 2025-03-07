import Link from "next/link";

import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import MobileMenu from "./mobile-menu";
import { Github } from "lucide-react";

const navData = [
  { name: "Home", path: "/" },
  { name: "Summarizer", path: "/summarizer" },
];

export default function Navbar() {
  return (
    <header className="bg-[var(--background)]/80 text-[var(--foreground)] backdrop-blur-md border-b border-white/10 sticky top-0 z-50 cyber-blur-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <i className="ri-brain-line text-3xl text-primary mr-2 glow-text"></i>
              <span className="font-heading font-bold text-lg sm:text-xl cyber-text">
                AI Content Summarizer
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8" id="nav">
            {navData.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  className={`font-medium transition-colors nav-item-mobile`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-center gap-2">
            <ThemeSwitcher />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="GitHub Repository"
            >
              <Github />
            </a>
            <MobileMenu navData={navData} />
          </div>
        </div>
      </div>
    </header>
  );
}
