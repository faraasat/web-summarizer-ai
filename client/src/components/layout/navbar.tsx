import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <i className="ri-file-search-line text-3xl text-primary mr-2"></i>
              <span className="font-heading font-bold text-lg sm:text-xl text-dark">Website & Web App Summarizer</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium ${
                location === "/" 
                  ? "text-primary" 
                  : "text-gray-600 hover:text-primary"
              } transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/summarizer" 
              className={`font-medium ${
                location === "/summarizer" 
                  ? "text-primary" 
                  : "text-gray-600 hover:text-primary"
              } transition-colors`}
            >
              Summarizer
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors" 
              aria-label="GitHub Repository"
            >
              <i className="ri-github-fill text-2xl"></i>
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <i className={`${isMenuOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location === "/" 
                  ? "text-primary bg-gray-50" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/summarizer" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location === "/summarizer" 
                  ? "text-primary bg-gray-50" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Summarizer
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary"
            >
              <i className="ri-github-fill mr-2"></i> GitHub Repository
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
