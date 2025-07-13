/**
 * Urban Sophisticated Design System Utilities
 * Additional helper functions for working with the design system
 */

import { tokens } from './tokens';

/**
 * Convert HSL CSS variable to RGB values
 * Useful for libraries that require RGB format
 */
export function hslToRgb(hsl: string): { r: number; g: number; b: number } {
  // Extract HSL values from string like "220 13% 18%"
  const match = hsl.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
  if (!match) {
    console.warn(`Invalid HSL format: ${hsl}`);
    return { r: 0, g: 0, b: 0 };
  }

  const h = parseInt(match[1]) / 360;
  const s = parseInt(match[2]) / 100;
  const l = parseInt(match[3]) / 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Get CSS variable value at runtime
 * Useful for JavaScript calculations
 */
export function getCSSVariableValue(variable: string): string {
  if (typeof window === 'undefined') return '';
  
  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue(variable).trim();
  
  return value;
}

/**
 * Generate color with opacity
 * Converts HSL color to HSLA with specified opacity
 */
export function withOpacity(color: string, opacity: number): string {
  // Handle HSL format like "220 13% 18%"
  if (color.includes('hsl')) {
    return color.replace('hsl', 'hsla').replace(')', `, ${opacity})`);
  }
  
  // Handle space-separated HSL values
  return `hsla(${color}, ${opacity})`;
}

/**
 * Create a color scale variant
 * Useful for generating hover/active states
 */
export function colorVariant(
  baseColor: string,
  variant: 'hover' | 'active' | 'disabled'
): string {
  const variantMap = {
    hover: 0.9,    // Slightly darker
    active: 0.8,   // More pronounced
    disabled: 0.5, // Half opacity
  };
  
  return withOpacity(baseColor, variantMap[variant]);
}

/**
 * Clamp a value between min and max
 * Useful for responsive calculations
 */
export function clamp(min: number, value: number, max: number): number {
  return Math.min(Math.max(min, value), max);
}

/**
 * Convert pixel value to rem
 * Based on 16px root font size
 */
export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

/**
 * Convert rem value to pixels
 * Based on 16px root font size
 */
export function remToPx(rem: string): number {
  const value = parseFloat(rem);
  return value * 16;
}

/**
 * Create a responsive value object
 * For use with CSS-in-JS libraries
 */
export function responsive<T>(
  mobile: T,
  tablet?: T,
  desktop?: T,
  wide?: T
): Record<string, T> {
  return {
    base: mobile,
    sm: tablet ?? mobile,
    md: tablet ?? mobile,
    lg: desktop ?? tablet ?? mobile,
    xl: wide ?? desktop ?? tablet ?? mobile,
    '2xl': wide ?? desktop ?? tablet ?? mobile,
  };
}

/**
 * Generate focus ring styles
 * Consistent focus states across components
 */
export function focusRing(color: string = 'var(--ring)'): Record<string, string> {
  return {
    outline: 'none',
    boxShadow: `0 0 0 2px var(--background), 0 0 0 4px ${color}`,
    transition: 'box-shadow 200ms ease-in-out',
  };
}

/**
 * Generate smooth transition
 * Consistent animation timing
 */
export function transition(
  properties: string | string[] = 'all',
  duration: keyof typeof tokens.animation.duration = 'default',
  easing: keyof typeof tokens.animation.easing = 'inOut'
): string {
  const props = Array.isArray(properties) ? properties.join(', ') : properties;
  return `${props} ${tokens.animation.duration[duration]} ${tokens.animation.easing[easing]}`;
}

/**
 * Check if current theme is dark
 * Useful for conditional rendering
 */
export function isDarkTheme(): boolean {
  if (typeof window === 'undefined') return false;
  
  const root = document.documentElement;
  return root.classList.contains('dark');
}

/**
 * Get contrast color (black or white)
 * Based on background luminance
 */
export function getContrastColor(backgroundColor: string): 'black' | 'white' {
  const rgb = hslToRgb(backgroundColor);
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  
  return luminance > 0.5 ? 'black' : 'white';
}

/**
 * Create elevation shadow
 * Generates appropriate shadow based on elevation level
 */
export function elevation(
  level: 0 | 1 | 2 | 3 | 4 | 5
): string {
  const shadowMap = {
    0: 'none',
    1: tokens.shadows.sm,
    2: tokens.shadows.DEFAULT,
    3: tokens.shadows.md,
    4: tokens.shadows.lg,
    5: tokens.shadows.xl,
  };
  
  return shadowMap[level];
}

/**
 * Media query helper
 * Type-safe media query generation
 */
export function mediaQuery(breakpoint: keyof typeof tokens.breakpoints): string {
  return `@media (min-width: ${tokens.breakpoints[breakpoint]})`;
}

/**
 * Container query helper
 * For future container query support
 */
export function containerQuery(breakpoint: keyof typeof tokens.breakpoints): string {
  return `@container (min-width: ${tokens.breakpoints[breakpoint]})`;
}

/**
 * Truncate text with ellipsis
 * CSS helper for text truncation
 */
export function truncate(lines: number = 1): Record<string, any> {
  if (lines === 1) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  }
  
  return {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
  };
}