import type { Config } from "tailwindcss";
import { tokens } from "./src/styles/tokens";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: tokens.typography.fontFamily.sans,
				mono: tokens.typography.fontFamily.mono,
			},
			colors: {
				// System colors from CSS variables
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Brand colors
				primary: {
					50: 'hsl(var(--color-primary-50))',
					100: 'hsl(var(--color-primary-100))',
					200: 'hsl(var(--color-primary-200))',
					300: 'hsl(var(--color-primary-300))',
					400: 'hsl(var(--color-primary-400))',
					500: 'hsl(var(--color-primary-500))',
					600: 'hsl(var(--color-primary-600))',
					700: 'hsl(var(--color-primary-700))',
					800: 'hsl(var(--color-primary-800))',
					900: 'hsl(var(--color-primary-900))',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					50: 'hsl(var(--color-secondary-50))',
					100: 'hsl(var(--color-secondary-100))',
					200: 'hsl(var(--color-secondary-200))',
					300: 'hsl(var(--color-secondary-300))',
					400: 'hsl(var(--color-secondary-400))',
					500: 'hsl(var(--color-secondary-500))',
					600: 'hsl(var(--color-secondary-600))',
					700: 'hsl(var(--color-secondary-700))',
					800: 'hsl(var(--color-secondary-800))',
					900: 'hsl(var(--color-secondary-900))',
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					50: 'hsl(var(--color-accent-50))',
					100: 'hsl(var(--color-accent-100))',
					200: 'hsl(var(--color-accent-200))',
					300: 'hsl(var(--color-accent-300))',
					400: 'hsl(var(--color-accent-400))',
					500: 'hsl(var(--color-accent-500))',
					600: 'hsl(var(--color-accent-600))',
					700: 'hsl(var(--color-accent-700))',
					800: 'hsl(var(--color-accent-800))',
					900: 'hsl(var(--color-accent-900))',
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				
				// Semantic colors
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--color-success))',
					light: 'hsl(var(--color-success-light))',
					dark: 'hsl(var(--color-success-dark))',
					foreground: 'hsl(var(--color-success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--color-warning))',
					light: 'hsl(var(--color-warning-light))',
					dark: 'hsl(var(--color-warning-dark))',
					foreground: 'hsl(var(--color-warning-foreground))'
				},
				error: {
					DEFAULT: 'hsl(var(--color-error))',
					light: 'hsl(var(--color-error-light))',
					dark: 'hsl(var(--color-error-dark))',
					foreground: 'hsl(var(--color-error-foreground))'
				},
				info: {
					DEFAULT: 'hsl(var(--color-info))',
					light: 'hsl(var(--color-info-light))',
					dark: 'hsl(var(--color-info-dark))',
					foreground: 'hsl(var(--color-info-foreground))'
				},
				
				// Neutral colors
				neutral: {
					0: 'hsl(var(--color-neutral-0))',
					50: 'hsl(var(--color-neutral-50))',
					100: 'hsl(var(--color-neutral-100))',
					200: 'hsl(var(--color-neutral-200))',
					300: 'hsl(var(--color-neutral-300))',
					400: 'hsl(var(--color-neutral-400))',
					500: 'hsl(var(--color-neutral-500))',
					600: 'hsl(var(--color-neutral-600))',
					700: 'hsl(var(--color-neutral-700))',
					800: 'hsl(var(--color-neutral-800))',
					900: 'hsl(var(--color-neutral-900))',
					950: 'hsl(var(--color-neutral-950))',
				},
				
				// Surface colors
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					secondary: 'hsl(var(--surface-secondary))',
					tertiary: 'hsl(var(--surface-tertiary))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			spacing: tokens.spacing,
			fontSize: tokens.typography.fontSize,
			fontWeight: tokens.typography.fontWeight,
			letterSpacing: tokens.typography.letterSpacing,
			borderRadius: {
				none: tokens.borderRadius.none,
				sm: tokens.borderRadius.sm,
				DEFAULT: tokens.borderRadius.DEFAULT,
				md: tokens.borderRadius.md,
				lg: tokens.borderRadius.lg,
				xl: tokens.borderRadius.xl,
				'2xl': tokens.borderRadius['2xl'],
				'3xl': tokens.borderRadius['3xl'],
				full: tokens.borderRadius.full,
			},
			boxShadow: {
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				DEFAULT: 'var(--shadow)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
				'2xl': 'var(--shadow-2xl)',
				inner: 'var(--shadow-inner)',
				glow: 'var(--shadow-glow)',
				none: 'none',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-surface': 'var(--gradient-surface)',
			},
			blur: tokens.blur,
			transitionDuration: tokens.animation.durations,
			transitionTimingFunction: tokens.animation.easings,
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale(0.3)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
