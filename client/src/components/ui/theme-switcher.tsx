import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Sun, Moon, Star, Monitor } from 'lucide-react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const themes = [
    { id: 'light', name: 'Light', icon: <Sun className="w-4 h-4" /> },
    { id: 'dark', name: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { id: 'modern', name: 'Modern', icon: <Monitor className="w-4 h-4" /> },
    { id: 'classic', name: 'Classic', icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-700/20 transition-colors text-white cyber-blur p-1 glow-border border border-white/10"
        aria-label="Change theme"
      >
        <Palette className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 rounded-lg shadow-xl z-20 cyber-blur backdrop-blur-lg border border-white/10">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`w-full text-left px-4 py-2 flex items-center space-x-2 transition-colors hover:bg-primary/20 ${
                theme === t.id ? 'text-primary' : 'text-white'
              }`}
              onClick={() => {
                setTheme(t.id as any);
                setIsOpen(false);
              }}
            >
              {t.icon}
              <span>{t.name}</span>
              {theme === t.id && (
                <span className="ml-auto">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.8535 9.8535L3.1465 7.1465C2.9512 6.9512 2.9512 6.6348 3.1465 6.4395C3.3418 6.2441 3.6582 6.2441 3.8535 6.4395L6.0 8.5859L11.1465 3.4395C11.3418 3.2441 11.6582 3.2441 11.8535 3.4395C12.0488 3.6348 12.0488 3.9512 11.8535 4.1465L6.2071 9.7929C6.0118 9.9882 5.6953 9.9882 5.5 9.7929L5.8535 9.8535Z" fill="currentColor" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}