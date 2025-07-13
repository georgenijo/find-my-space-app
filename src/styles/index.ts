/**
 * Urban Sophisticated Design System
 * 
 * Central export for all design system utilities
 */

// Core tokens
export * from './tokens';

// Utilities
export * from './spacing';
export * from './typography';
export * from './utils';

// Re-export common utilities for convenience
export { tokens } from './tokens';
export { spacing, spacingPatterns, layout, grid } from './spacing';
export { typography, textColors, applyTypography, fluidType } from './typography';
export { 
  getCSSVariableValue, 
  withOpacity, 
  colorVariant, 
  responsive, 
  focusRing, 
  transition,
  isDarkTheme,
  elevation,
  mediaQuery,
  truncate
} from './utils';

// Design system configuration
export const designSystem = {
  name: 'Urban Sophisticated',
  version: '1.0.0',
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: 475,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  
  // Media queries
  media: {
    xs: '@media (min-width: 475px)',
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    '2xl': '@media (min-width: 1536px)',
    
    // Special queries
    hover: '@media (hover: hover) and (pointer: fine)',
    touch: '@media (hover: none) and (pointer: coarse)',
    motion: '@media (prefers-reduced-motion: no-preference)',
    dark: '@media (prefers-color-scheme: dark)',
    light: '@media (prefers-color-scheme: light)',
  },
  
  // Container queries (for future use)
  container: {
    xs: '@container (min-width: 475px)',
    sm: '@container (min-width: 640px)',
    md: '@container (min-width: 768px)',
    lg: '@container (min-width: 1024px)',
    xl: '@container (min-width: 1280px)',
  },
} as const;

// Utility types
export type DesignToken = keyof typeof designSystem;
export type Breakpoint = keyof typeof designSystem.breakpoints;
export type MediaQuery = keyof typeof designSystem.media;