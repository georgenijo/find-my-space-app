# Urban Sophisticated Design System

## Overview

The Urban Sophisticated design system for Find My Space is built on principles of muted elegance, superior readability, and seamless dark mode support. It provides a comprehensive foundation for building a modern, accessible, and visually sophisticated parking marketplace application.

## Core Principles

1. **Muted Elegance**: Subtle, sophisticated color palette inspired by urban architecture
2. **Superior Readability**: Clean typography with optimal spacing and contrast
3. **Seamless Dark Mode**: Thoughtfully designed dark theme that maintains visual hierarchy
4. **Performance First**: Zero memory leaks, optimized for runtime theming
5. **Accessibility**: AAA compliance with proper contrast ratios and focus states

## Architecture

### Design Tokens (`tokens.ts`)
Central source of truth for all design values:
- Colors (primary, secondary, accent, neutrals, semantic)
- Typography (font families, sizes, weights, line heights)
- Spacing (4px base unit system)
- Shadows (subtle elevation system)
- Animations (duration and easing curves)
- Border radius values
- Gradients and blur effects

### Global Styles (`globals.css`)
CSS custom properties for runtime theming:
- Maps design tokens to CSS variables
- Provides light and dark theme definitions
- Includes base styles and utility classes
- Handles responsive typography and spacing

### Theme Provider (`ThemeProvider.tsx`)
React context for theme management:
- Supports light, dark, and system themes
- Persists theme preference in localStorage
- Syncs across tabs/windows
- Respects system preferences
- Zero memory leaks with proper cleanup

### Utilities
- **Spacing** (`spacing.ts`): Consistent spacing utilities and helpers
- **Typography** (`typography.ts`): Type presets and text utilities

## Color System

### Brand Colors

#### Primary - Charcoal
Deep, sophisticated gray for main UI elements
- Base: `hsl(220, 13%, 18%)`
- Range: 50-900 shades
- Use: Primary buttons, headers, main text

#### Secondary - Forest Green  
Natural, trustworthy accent color
- Base: `hsl(142, 76%, 36%)`
- Range: 50-900 shades
- Use: Success states, available spots, CTAs

#### Accent - Warm Gold
Premium, inviting highlight color
- Base: `hsl(47, 96%, 53%)`
- Range: 50-900 shades
- Use: Premium features, highlights, warnings

### Semantic Colors
- **Success**: Forest green variants
- **Warning**: Warm gold variants
- **Error**: Red variants with proper contrast
- **Info**: Blue variants for informational states

## Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', system-ui, sans-serif;
```

### Type Scale
Based on Major Third ratio (1.25):
- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.25rem (20px)
- `2xl`: 1.5rem (24px)
- `3xl`: 1.875rem (30px)
- `4xl`: 2.25rem (36px)
- `5xl`: 3rem (48px)
- `6xl`: 3.75rem (60px)
- `7xl`: 4.5rem (72px)

### Typography Presets
Pre-configured combinations for common use cases:
- Display headings
- Regular headings (h1-h6)
- Body text (lg, base, sm, xs)
- UI elements (buttons, labels, captions)
- Code/monospace text

## Spacing System

Based on 4px unit:
- `1`: 4px
- `2`: 8px
- `3`: 12px
- `4`: 16px
- `6`: 24px
- `8`: 32px
- `12`: 48px
- `16`: 64px
- `24`: 96px

### Common Patterns
- Section padding: 48px (mobile) → 64px (tablet) → 96px (desktop)
- Container padding: 16px (mobile) → 24px (tablet) → 32px (desktop)
- Component gaps: 8px (xs) → 12px (sm) → 16px (md) → 24px (lg)

## Usage Examples

### Using Design Tokens in TypeScript
```typescript
import { tokens, spacing, typography } from '@/styles';

// Access color values
const primaryColor = tokens.colors.primary.DEFAULT;

// Use spacing utilities
const margin = spacing(4); // Returns '1rem'

// Apply typography presets
const headingStyles = typography.heading.h1;
```

### Using CSS Variables
```css
.my-component {
  color: hsl(var(--color-primary));
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

### Theme Toggle Implementation
```tsx
import { useTheme } from '@/providers/ThemeProvider';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme('dark')}>
      Switch to Dark Mode
    </button>
  );
}
```

### Responsive Typography
```tsx
import { responsiveTypography } from '@/styles/typography';

const styles = responsiveTypography(
  'body.base',    // Mobile
  'body.lg',      // Tablet
  'prose.lg'      // Desktop
);
```

## Dark Mode

The design system includes a carefully crafted dark theme that:
- Maintains visual hierarchy with adjusted color values
- Reduces eye strain with appropriate contrast ratios
- Preserves brand identity across themes
- Automatically adjusts shadows and overlays

### Implementation
Dark mode is applied via the `.dark` class on the root element:
```html
<html class="dark">
```

The ThemeProvider handles this automatically based on user preference.

## Best Practices

1. **Always use design tokens** instead of hardcoded values
2. **Leverage CSS variables** for runtime theming
3. **Use semantic color names** (e.g., `text-primary` not `text-gray-900`)
4. **Apply responsive spacing** using the provided utilities
5. **Maintain consistency** by using predefined typography presets
6. **Test in both themes** to ensure proper contrast and visibility
7. **Use the spacing scale** consistently (avoid arbitrary values)
8. **Implement proper focus states** for accessibility

## Performance Considerations

- CSS variables enable instant theme switching without re-renders
- Design tokens are tree-shakeable for optimal bundle size
- Theme state syncs across tabs without additional API calls
- Minimal JavaScript overhead with CSS-based theming
- Proper cleanup prevents memory leaks

## Accessibility

The design system ensures:
- WCAG AAA contrast ratios for all text
- Clear focus indicators for keyboard navigation
- Semantic HTML structure
- Proper ARIA attributes where needed
- Reduced motion options respected
- Screen reader friendly implementations

## Migration Guide

To adopt the Urban Sophisticated design system:

1. Replace color values with CSS variables
2. Update spacing to use the 4px grid system
3. Apply typography presets instead of custom styles
4. Wrap your app with ThemeProvider
5. Test both light and dark themes
6. Verify accessibility compliance

## Future Enhancements

- Component-specific design tokens
- Additional theme variants (high contrast, etc.)
- Animation presets library
- Advanced grid system utilities
- Design system Figma integration
- Automated visual regression testing