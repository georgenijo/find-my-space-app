import axe from 'axe-core';

/**
 * Run accessibility tests on the current document
 * @param options - Axe configuration options
 * @returns Promise with accessibility violations
 */
export const runAccessibilityTests = async (
  options: axe.RunOptions = {}
): Promise<axe.Result[]> => {
  const results = await axe.run(document.body, {
    rules: {
      // WCAG 2.1 Level AA rules
      'color-contrast': { enabled: true },
      'label': { enabled: true },
      'image-alt': { enabled: true },
      'button-name': { enabled: true },
      'link-name': { enabled: true },
      'aria-valid-attr': { enabled: true },
      'aria-valid-attr-value': { enabled: true },
      'aria-roles': { enabled: true },
      'aria-hidden-focus': { enabled: true },
      'focus-order-semantics': { enabled: true },
      'heading-order': { enabled: true },
      'landmark-unique': { enabled: true },
      'page-has-heading-one': { enabled: true },
      'region': { enabled: true },
      'skip-link': { enabled: true },
    },
    ...options,
  });

  return results.violations;
};

/**
 * Format accessibility violations for logging
 */
export const formatA11yViolations = (violations: axe.Result[]): string => {
  if (violations.length === 0) {
    return 'No accessibility violations found!';
  }

  return violations
    .map((violation) => {
      const nodes = violation.nodes
        .map((node) => {
          const selector = node.target.join(', ');
          return `    - ${selector}: ${node.failureSummary}`;
        })
        .join('\n');

      return `
${violation.id}: ${violation.description}
  Impact: ${violation.impact}
  Help: ${violation.help}
  Help URL: ${violation.helpUrl}
  Affected nodes:
${nodes}`;
    })
    .join('\n\n');
};

/**
 * React hook for accessibility testing in development
 */
export const useAccessibilityCheck = (enabled = process.env.NODE_ENV === 'development') => {
  if (enabled && typeof window !== 'undefined') {
    setTimeout(async () => {
      try {
        const violations = await runAccessibilityTests();
        if (violations.length > 0) {
          console.warn('Accessibility violations found:');
          console.warn(formatA11yViolations(violations));
        }
      } catch (error) {
        console.error('Error running accessibility tests:', error);
      }
    }, 1000);
  }
};

/**
 * Utility to check if an element is keyboard accessible
 */
export const isKeyboardAccessible = (element: HTMLElement): boolean => {
  const tabIndex = element.getAttribute('tabindex');
  const isNaturallyFocusable = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(
    element.tagName
  );
  
  return isNaturallyFocusable || (tabIndex !== null && parseInt(tabIndex) >= 0);
};

/**
 * Utility to check if an element has proper ARIA labels
 */
export const hasAriaLabel = (element: HTMLElement): boolean => {
  return !!(
    element.getAttribute('aria-label') ||
    element.getAttribute('aria-labelledby') ||
    element.textContent?.trim()
  );
};

/**
 * Check contrast ratio between two colors
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  // Convert hex to RGB
  const getRGB = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  // Calculate relative luminance
  const getLuminance = (rgb: { r: number; g: number; b: number }) => {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
      const s = val / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const rgb1 = getRGB(color1);
  const rgb2 = getRGB(color2);

  if (!rgb1 || !rgb2) return 0;

  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};

/**
 * Check if contrast meets WCAG standards
 */
export const meetsContrastStandards = (
  ratio: number,
  level: 'AA' | 'AAA' = 'AA',
  largeText = false
): boolean => {
  if (level === 'AA') {
    return largeText ? ratio >= 3 : ratio >= 4.5;
  } else {
    return largeText ? ratio >= 4.5 : ratio >= 7;
  }
};