/**
 * Urban Sophisticated Design System Hook
 * Provides easy access to design tokens and utilities
 */

import { useTheme } from '@/providers/ThemeProvider';
import { tokens, spacing, typography, getCSSVariableValue } from '@/styles';

export function useDesignSystem() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  
  // Helper to get current theme-aware color value
  const getColor = (colorPath: string) => {
    // Handle CSS variable format
    if (colorPath.startsWith('var(')) {
      const varName = colorPath.match(/var\((--[^)]+)\)/)?.[1];
      return varName ? getCSSVariableValue(varName) : colorPath;
    }
    
    // Handle direct color values
    return colorPath;
  };
  
  // Helper to check if we're in dark mode
  const isDark = resolvedTheme === 'dark';
  
  // Helper to get spacing value
  const getSpacing = (value: keyof typeof tokens.spacing) => {
    return spacing(value);
  };
  
  // Helper to apply typography preset
  const getTypography = (preset: string) => {
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
  };
  
  return {
    // Theme management
    theme,
    resolvedTheme,
    setTheme,
    isDark,
    
    // Token access
    tokens,
    colors: tokens.colors,
    spacing: tokens.spacing,
    typography: tokens.typography,
    shadows: tokens.shadows,
    borderRadius: tokens.borderRadius,
    
    // Helper functions
    getColor,
    getSpacing,
    getTypography,
    
    // Quick access to common values
    breakpoints: tokens.breakpoints,
    zIndex: tokens.zIndex,
    animation: tokens.animation,
  };
}

// Type export for consumers
export type DesignSystem = ReturnType<typeof useDesignSystem>;