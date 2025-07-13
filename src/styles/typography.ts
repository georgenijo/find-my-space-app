/**
 * Urban Sophisticated Typography Utilities
 * 
 * Consistent typography system with superior readability
 */

import { tokens } from './tokens';

// Type scale based on Major Third (1.25) ratio
export const typeScale = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem',  // 72px
} as const;

// Line height scale
export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '1.75',
  article: '1.8', // Optimal for long-form reading
} as const;

// Font weight scale
export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

// Letter spacing scale
export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// Typography presets for common use cases
export const typography = {
  // Display headings
  display: {
    '2xl': {
      fontSize: typeScale['7xl'],
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tighter,
      fontWeight: fontWeights.bold,
    },
    xl: {
      fontSize: typeScale['6xl'],
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tighter,
      fontWeight: fontWeights.bold,
    },
    lg: {
      fontSize: typeScale['5xl'],
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight,
      fontWeight: fontWeights.semibold,
    },
    md: {
      fontSize: typeScale['4xl'],
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.tight,
      fontWeight: fontWeights.semibold,
    },
    sm: {
      fontSize: typeScale['3xl'],
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.semibold,
    },
  },
  
  // Regular headings
  heading: {
    h1: {
      fontSize: typeScale['4xl'],
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight,
      fontWeight: fontWeights.semibold,
    },
    h2: {
      fontSize: typeScale['3xl'],
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.tight,
      fontWeight: fontWeights.semibold,
    },
    h3: {
      fontSize: typeScale['2xl'],
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.semibold,
    },
    h4: {
      fontSize: typeScale.xl,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.semibold,
    },
    h5: {
      fontSize: typeScale.lg,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.medium,
    },
    h6: {
      fontSize: typeScale.base,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.wide,
      fontWeight: fontWeights.medium,
      textTransform: 'uppercase' as const,
    },
  },
  
  // Body text
  body: {
    lg: {
      fontSize: typeScale.lg,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
    },
    base: {
      fontSize: typeScale.base,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
    },
    sm: {
      fontSize: typeScale.sm,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
    },
    xs: {
      fontSize: typeScale.xs,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
    },
  },
  
  // Article/prose text
  prose: {
    lg: {
      fontSize: typeScale.lg,
      lineHeight: lineHeights.article,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
    },
    base: {
      fontSize: typeScale.base,
      lineHeight: lineHeights.article,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
    },
    sm: {
      fontSize: typeScale.sm,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
    },
  },
  
  // UI elements
  ui: {
    button: {
      lg: {
        fontSize: typeScale.base,
        lineHeight: lineHeights.none,
        letterSpacing: letterSpacings.wide,
        fontWeight: fontWeights.medium,
      },
      md: {
        fontSize: typeScale.sm,
        lineHeight: lineHeights.none,
        letterSpacing: letterSpacings.wide,
        fontWeight: fontWeights.medium,
      },
      sm: {
        fontSize: typeScale.xs,
        lineHeight: lineHeights.none,
        letterSpacing: letterSpacings.wide,
        fontWeight: fontWeights.medium,
      },
    },
    
    label: {
      lg: {
        fontSize: typeScale.base,
        lineHeight: lineHeights.none,
        letterSpacing: letterSpacings.normal,
        fontWeight: fontWeights.medium,
      },
      md: {
        fontSize: typeScale.sm,
        lineHeight: lineHeights.none,
        letterSpacing: letterSpacings.normal,
        fontWeight: fontWeights.medium,
      },
      sm: {
        fontSize: typeScale.xs,
        lineHeight: lineHeights.none,
        letterSpacing: letterSpacings.wide,
        fontWeight: fontWeights.medium,
      },
    },
    
    caption: {
      base: {
        fontSize: typeScale.sm,
        lineHeight: lineHeights.normal,
        letterSpacing: letterSpacings.normal,
        fontWeight: fontWeights.normal,
      },
      sm: {
        fontSize: typeScale.xs,
        lineHeight: lineHeights.normal,
        letterSpacing: letterSpacings.wide,
        fontWeight: fontWeights.normal,
      },
    },
    
    overline: {
      base: {
        fontSize: typeScale.xs,
        lineHeight: lineHeights.none,
        letterSpacing: letterSpacings.widest,
        fontWeight: fontWeights.semibold,
        textTransform: 'uppercase' as const,
      },
    },
  },
  
  // Code/mono
  code: {
    lg: {
      fontSize: typeScale.base,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
      fontFamily: tokens.typography.fontFamily.mono.join(', '),
    },
    base: {
      fontSize: typeScale.sm,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
      fontFamily: tokens.typography.fontFamily.mono.join(', '),
    },
    sm: {
      fontSize: typeScale.xs,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontWeight: fontWeights.normal,
      fontFamily: tokens.typography.fontFamily.mono.join(', '),
    },
  },
} as const;

// Text color utilities
export const textColors = {
  primary: 'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  tertiary: 'var(--text-tertiary)',
  disabled: 'var(--text-disabled)',
  
  // Semantic colors
  success: 'hsl(var(--color-success))',
  warning: 'hsl(var(--color-warning))',
  error: 'hsl(var(--color-error))',
  info: 'hsl(var(--color-info))',
  
  // Brand colors
  brand: {
    primary: 'hsl(var(--color-primary))',
    secondary: 'hsl(var(--color-secondary))',
    accent: 'hsl(var(--color-accent))',
  },
} as const;

// Utility function to apply typography preset
export function applyTypography(preset: string) {
  const parts = preset.split('.');
  let current: any = typography;
  
  for (const part of parts) {
    current = current[part];
    if (!current) {
      console.warn(`Typography preset "${preset}" not found`);
      return {};
    }
  }
  
  return current;
}

// Responsive typography helper
export function responsiveTypography(
  mobile: string,
  tablet?: string,
  desktop?: string
) {
  return {
    mobile: applyTypography(mobile),
    tablet: applyTypography(tablet || mobile),
    desktop: applyTypography(desktop || tablet || mobile),
  };
}

// Clamp function for fluid typography
export function fluidType(
  minSize: string,
  maxSize: string,
  minViewport = '320px',
  maxViewport = '1200px'
) {
  return `clamp(${minSize}, calc(${minSize} + (${parseFloat(maxSize)} - ${parseFloat(minSize)}) * ((100vw - ${minViewport}) / (${parseFloat(maxViewport)} - ${parseFloat(minViewport)}))), ${maxSize})`;
}

// Text truncation utilities
export const textTruncate = {
  singleLine: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  
  multiLine: (lines: number) => ({
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical' as const,
    textOverflow: 'ellipsis',
  }),
} as const;

// Text alignment utilities
export const textAlign = {
  left: 'left' as const,
  center: 'center' as const,
  right: 'right' as const,
  justify: 'justify' as const,
} as const;

// Text decoration utilities
export const textDecoration = {
  none: 'none' as const,
  underline: 'underline' as const,
  overline: 'overline' as const,
  lineThrough: 'line-through' as const,
} as const;