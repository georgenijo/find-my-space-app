/**
 * Urban Sophisticated Spacing Utilities
 * 
 * Consistent spacing system based on 4px unit
 */

import { tokens } from './tokens';

// Spacing scale in pixels for reference
export const spacingScale = {
  px: 1,
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
} as const;

// Utility function to get spacing value
export function spacing(value: keyof typeof tokens.spacing): string {
  return tokens.spacing[value];
}

// Common spacing patterns
export const spacingPatterns = {
  // Page sections
  sectionY: {
    mobile: spacing(12),  // 48px
    tablet: spacing(16),  // 64px
    desktop: spacing(24), // 96px
  },
  
  // Container padding
  containerX: {
    mobile: spacing(4),   // 16px
    tablet: spacing(6),   // 24px
    desktop: spacing(8),  // 32px
  },
  
  // Component spacing
  componentGap: {
    xs: spacing(2),    // 8px
    sm: spacing(3),    // 12px
    md: spacing(4),    // 16px
    lg: spacing(6),    // 24px
    xl: spacing(8),    // 32px
  },
  
  // Form spacing
  formField: {
    gap: spacing(1.5),     // 6px between label and input
    marginBottom: spacing(4), // 16px between fields
  },
  
  // Card padding
  cardPadding: {
    sm: spacing(4),    // 16px
    md: spacing(6),    // 24px
    lg: spacing(8),    // 32px
  },
  
  // Button padding
  buttonPadding: {
    sm: `${spacing(2)} ${spacing(3)}`,     // 8px 12px
    md: `${spacing(2.5)} ${spacing(4)}`,   // 10px 16px
    lg: `${spacing(3)} ${spacing(6)}`,     // 12px 24px
  },
  
  // Icon spacing
  iconGap: {
    sm: spacing(1.5),  // 6px
    md: spacing(2),    // 8px
    lg: spacing(3),    // 12px
  },
} as const;

// Layout utilities
export const layout = {
  // Maximum content widths
  maxWidth: {
    xs: '20rem',     // 320px
    sm: '24rem',     // 384px
    md: '28rem',     // 448px
    lg: '32rem',     // 512px
    xl: '36rem',     // 576px
    '2xl': '42rem',  // 672px
    '3xl': '48rem',  // 768px
    '4xl': '56rem',  // 896px
    '5xl': '64rem',  // 1024px
    '6xl': '72rem',  // 1152px
    '7xl': '80rem',  // 1280px
    prose: '65ch',
  },
  
  // Common container widths
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Aspect ratios
  aspectRatio: {
    square: '1 / 1',
    video: '16 / 9',
    photo: '4 / 3',
    ultrawide: '21 / 9',
    golden: '1.618 / 1',
  },
} as const;

// Grid utilities
export const grid = {
  // Column counts
  columns: {
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    8: 'repeat(8, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))',
  },
  
  // Common gaps
  gap: {
    xs: spacing(2),   // 8px
    sm: spacing(3),   // 12px
    md: spacing(4),   // 16px
    lg: spacing(6),   // 24px
    xl: spacing(8),   // 32px
    '2xl': spacing(12), // 48px
  },
} as const;

// Responsive spacing helpers
export function responsiveSpacing(
  mobile: keyof typeof tokens.spacing,
  tablet?: keyof typeof tokens.spacing,
  desktop?: keyof typeof tokens.spacing
) {
  return {
    mobile: spacing(mobile),
    tablet: spacing(tablet || mobile),
    desktop: spacing(desktop || tablet || mobile),
  };
}

// CSS-in-JS helper for margin
export function margin(
  top?: keyof typeof tokens.spacing | 'auto',
  right?: keyof typeof tokens.spacing | 'auto',
  bottom?: keyof typeof tokens.spacing | 'auto',
  left?: keyof typeof tokens.spacing | 'auto'
) {
  const values = [top, right, bottom, left]
    .filter(v => v !== undefined)
    .map(v => v === 'auto' ? 'auto' : spacing(v as keyof typeof tokens.spacing))
    .join(' ');
  
  return values;
}

// CSS-in-JS helper for padding
export function padding(
  top?: keyof typeof tokens.spacing,
  right?: keyof typeof tokens.spacing,
  bottom?: keyof typeof tokens.spacing,
  left?: keyof typeof tokens.spacing
) {
  const values = [top, right, bottom, left]
    .filter(v => v !== undefined)
    .map(v => spacing(v as keyof typeof tokens.spacing))
    .join(' ');
  
  return values;
}