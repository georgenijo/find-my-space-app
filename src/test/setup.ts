import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Mock web-vitals
vi.mock('web-vitals', () => ({
  getCLS: vi.fn((callback) => callback({ name: 'CLS', value: 0.1 })),
  getFID: vi.fn((callback) => callback({ name: 'FID', value: 100 })),
  getFCP: vi.fn((callback) => callback({ name: 'FCP', value: 1500 })),
  getLCP: vi.fn((callback) => callback({ name: 'LCP', value: 2000 })),
  getTTFB: vi.fn((callback) => callback({ name: 'TTFB', value: 500 })),
}));

// Mock axe-core
vi.mock('axe-core', () => ({
  default: {
    run: vi.fn(() => Promise.resolve({ violations: [] })),
  },
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));