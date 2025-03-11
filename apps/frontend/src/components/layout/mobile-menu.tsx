"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Menu, Trophy } from "lucide-react";

const MobileMenu: FC<{ navData: Array<{ name: string; path: string }> }> = ({
  navData,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="cursor-pointer text-gray-300 hover:text-primary focus:outline-none"
        >
          {isMenuOpen ? <Trophy /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-15 right-0 md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" id="nav-mobile">
            {navData.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium nav-item-mobile`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
