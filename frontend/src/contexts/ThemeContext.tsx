import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeType = 'light' | 'dark' | 'modern' | 'classic';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Try to get stored theme from localStorage or default to 'modern'
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('app-theme') as ThemeType;
      return storedTheme || 'modern';
    }
    return 'modern';
  });

  // Apply theme changes and store in localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
    
    // Add additional body classes for each theme
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-modern', 'theme-classic');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}