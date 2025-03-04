"use client"

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Sun, Moon, Star, Monitor, Check } from 'lucide-react';

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
    { 
      id: 'light', 
      name: 'Light', 
      icon: <Sun className="w-4 h-4" />,
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-gradient-to-r from-purple-500/20 to-blue-500/20'
    },
    { 
      id: 'dark', 
      name: 'Dark', 
      icon: <Moon className="w-4 h-4" />,
      color: 'from-indigo-700 to-blue-700',
      bgColor: 'bg-gradient-to-r from-indigo-700/20 to-blue-700/20' 
    },
    { 
      id: 'modern', 
      name: 'Modern', 
      icon: <Monitor className="w-4 h-4" />,
      color: 'from-purple-600 to-pink-500',
      bgColor: 'bg-gradient-to-r from-purple-600/20 to-pink-500/20'
    },
    { 
      id: 'classic', 
      name: 'Classic', 
      icon: <Star className="w-4 h-4" />,
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-gradient-to-r from-indigo-500/20 to-blue-600/20'
    },
  ];

  // Find the current theme
  const currentTheme = themes.find(t => t.id === theme) || themes[2]; // Default to modern

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button with current theme color */}
      <button
        onClick={toggleDropdown}
        className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-700/30 transition-all text-white cyber-blur p-1 border border-white/10 group`}
        style={{
          boxShadow: isOpen ? `0 0 12px 3px rgba(173, 109, 255, 0.3)` : 'none'
        }}
        aria-label="Change theme"
      >
        <div className={`rounded-full w-full h-full flex items-center justify-center bg-gradient-to-br ${currentTheme.color} group-hover:scale-105 transition-transform`}>
          <Palette className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Dropdown with glass morphism effect */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-3 w-48 rounded-xl z-20 cyber-blur backdrop-blur-lg border border-white/10 overflow-hidden"
          style={{
            boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.5), 
                        0 0 15px -5px rgba(173, 109, 255, 0.3)`
          }}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-xs font-bold uppercase tracking-wider text-white/70">Select Interface</p>
          </div>
          
          {/* Theme options */}
          <div className="py-2">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`cursor-pointer w-full text-left px-4 py-3 flex items-center space-x-3 transition-all ${
                  theme === t.id ? `${t.bgColor} border-l-2 border-primary` : 'hover:bg-white/5 border-l-2 border-transparent'
                }`}
                onClick={() => {
                  setTheme(t.id as any);
                  setIsOpen(false);
                }}
              >
                <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  {t.icon}
                </div>
                <span className={`${theme === t.id ? 'text-white font-medium' : 'text-white/80'}`}>{t.name}</span>
                {theme === t.id && (
                  <span className="ml-auto">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}