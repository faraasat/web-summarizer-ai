import '@testing-library/jest-dom';

// Mock matchMedia for components that rely on it
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {},
    dispatchEvent: function() {
      return true;
    },
  };
};

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  constructor() {}
}

window.IntersectionObserver = MockIntersectionObserver as any;

// Add test utilities to global scope
import { vi } from 'vitest';
(global as any).vi = vi;