/**
 * Urban Sophisticated Design Tokens
 * Type-safe design system tokens for Find My Space
 */

// Color values in HSL format for CSS custom properties
export const colors = {
  primary: {
    50: 'hsl(220, 13%, 95%)',
    100: 'hsl(220, 13%, 91%)',
    200: 'hsl(220, 13%, 82%)',
    300: 'hsl(220, 13%, 69%)',
    400: 'hsl(220, 13%, 46%)',
    500: 'hsl(220, 13%, 25%)',
    600: 'hsl(220, 13%, 18%)', // DEFAULT - Charcoal
    700: 'hsl(220, 13%, 12%)',
    800: 'hsl(220, 13%, 8%)',
    900: 'hsl(220, 13%, 4%)',
    DEFAULT: 'hsl(220, 13%, 18%)',
    foreground: 'hsl(0, 0%, 100%)',
  },
  secondary: {
    50: 'hsl(142, 76%, 95%)',
    100: 'hsl(142, 76%, 90%)',
    200: 'hsl(142, 76%, 80%)',
    300: 'hsl(142, 76%, 65%)',
    400: 'hsl(142, 76%, 50%)',
    500: 'hsl(142, 76%, 36%)', // DEFAULT - Forest Green
    600: 'hsl(142, 76%, 30%)',
    700: 'hsl(142, 76%, 24%)',
    800: 'hsl(142, 76%, 18%)',
    900: 'hsl(142, 76%, 12%)',
    DEFAULT: 'hsl(142, 76%, 36%)',
    foreground: 'hsl(0, 0%, 100%)',
  },
  accent: {
    50: 'hsl(47, 96%, 96%)',
    100: 'hsl(47, 96%, 91%)',
    200: 'hsl(47, 96%, 82%)',
    300: 'hsl(47, 96%, 71%)',
    400: 'hsl(47, 96%, 60%)',
    500: 'hsl(47, 96%, 53%)', // DEFAULT - Warm Gold
    600: 'hsl(47, 96%, 45%)',
    700: 'hsl(47, 96%, 36%)',
    800: 'hsl(47, 96%, 28%)',
    900: 'hsl(47, 96%, 20%)',
    DEFAULT: 'hsl(47, 96%, 53%)',
    foreground: 'hsl(220, 13%, 18%)',
  },
  neutral: {
    0: 'hsl(0, 0%, 100%)',
    50: 'hsl(220, 14%, 98%)',
    100: 'hsl(220, 14%, 96%)',
    200: 'hsl(220, 14%, 93%)',
    300: 'hsl(220, 14%, 89%)',
    400: 'hsl(220, 14%, 83%)',
    500: 'hsl(220, 14%, 64%)',
    600: 'hsl(220, 14%, 46%)',
    700: 'hsl(220, 14%, 31%)',
    800: 'hsl(220, 14%, 18%)',
    900: 'hsl(220, 14%, 9%)',
    950: 'hsl(220, 14%, 4%)',
  },
  semantic: {
    success: 'hsl(142, 76%, 36%)',
    successLight: 'hsl(142, 76%, 45%)',
    successDark: 'hsl(142, 76%, 24%)',
    warning: 'hsl(45, 93%, 58%)',
    warningLight: 'hsl(45, 93%, 65%)',
    warningDark: 'hsl(45, 93%, 47%)',
    error: 'hsl(0, 84%, 60%)',
    errorLight: 'hsl(0, 84%, 67%)',
    errorDark: 'hsl(0, 84%, 48%)',
    info: 'hsl(206, 91%, 60%)',
    infoLight: 'hsl(206, 91%, 67%)',
    infoDark: 'hsl(206, 91%, 48%)',
  },
} as const;

// Spacing values
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
  44: '11rem', // 176px
  48: '12rem', // 192px
  52: '13rem', // 208px
  56: '14rem', // 224px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 288px
  80: '20rem', // 320px
  96: '24rem', // 384px
} as const;

// Typography
export const typography = {
  fontFamily: {
    sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Consolas', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
    base: ['1rem', { lineHeight: '1.5rem' }], // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
    '5xl': ['3rem', { lineHeight: '1' }], // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
    '7xl': ['4.5rem', { lineHeight: '1' }], // 72px
    '8xl': ['6rem', { lineHeight: '1' }], // 96px
    '9xl': ['8rem', { lineHeight: '1' }], // 128px
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
} as const;

// Border radius
export const borderRadius = {
  none: '0px',
  sm: '0.125rem', // 2px
  DEFAULT: '0.375rem', // 6px
  md: '0.5rem', // 8px
  lg: '0.75rem', // 12px
  xl: '1rem', // 16px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem', // 32px
  full: '9999px',
} as const;

// Shadows
export const shadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
  sm: '0 2px 4px -1px rgba(0, 0, 0, 0.03), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
  DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
  md: '0 6px 10px -2px rgba(0, 0, 0, 0.05), 0 3px 6px -3px rgba(0, 0, 0, 0.03)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
  none: 'none',
  glow: '0 0 20px rgba(59, 130, 246, 0.35)',
} as const;

// Animation
export const animation = {
  duration: {
    instant: '0ms',
    fast: '150ms',
    default: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// Blur
export const blur = {
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index scale
export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// Export token types for TypeScript
export type ColorToken = keyof typeof colors;
export type SpacingToken = keyof typeof spacing;
export type FontSizeToken = keyof typeof typography.fontSize;
export type FontWeightToken = keyof typeof typography.fontWeight;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ShadowToken = keyof typeof shadows;
export type AnimationDurationToken = keyof typeof animation.duration;
export type AnimationEasingToken = keyof typeof animation.easing;
export type BlurToken = keyof typeof blur;
export type BreakpointToken = keyof typeof breakpoints;
export type ZIndexToken = keyof typeof zIndex;

// Utility function to get CSS variable name
export const getCSSVariable = (category: string, token: string): string => {
  return `var(--${category}-${token})`;
};

// Export all tokens as a single object for easy access
export const tokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  animation,
  blur,
  breakpoints,
  zIndex,
} as const;

export default tokens;