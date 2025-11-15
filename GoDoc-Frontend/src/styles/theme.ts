/**
 * GoDoc Design System Theme
 * 
 * This file exports theme tokens that can be used with Chakra UI
 * and throughout the application for consistent styling.
 */

export const theme = {
  colors: {
    primary: {
      50: 'rgba(17, 212, 82, 0.05)',
      100: 'rgba(17, 212, 82, 0.1)',
      200: 'rgba(17, 212, 82, 0.2)',
      300: 'rgba(17, 212, 82, 0.3)',
      400: '#0fc249',
      500: '#11d452',
      600: '#10b981',
      700: '#059669',
      800: '#047857',
      900: '#065f46',
    },
    // Alternative primary for buttons
    primaryAlt: {
      500: '#34c759',
      600: '#29a047',
      700: '#207b37',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      tertiary: '#e8f5f0',
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
      tertiary: '#718096',
      disabled: '#a0aec0',
      inverse: '#ffffff',
    },
    border: {
      light: '#e2e8f0',
      medium: '#cbd5e0',
      dark: '#a0aec0',
    },
    status: {
      success: '#10b981',
      successLight: 'rgba(16, 185, 129, 0.1)',
      warning: '#f59e0b',
      warningLight: 'rgba(245, 158, 11, 0.1)',
      error: '#ef4444',
      errorLight: 'rgba(239, 68, 68, 0.1)',
      info: '#3b82f6',
      infoLight: 'rgba(59, 130, 246, 0.1)',
    },
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },
  borderRadius: {
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem',   // 32px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  transitions: {
    fast: '0.15s ease',
    base: '0.2s ease',
    slow: '0.3s ease',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

/**
 * Button Style Presets
 * Use these for consistent button styling across the app
 */
export const buttonStyles = {
  primary: {
    bg: theme.colors.primaryAlt[500],
    color: theme.colors.text.inverse,
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSize.lg,
    lineHeight: '28px',
    height: '48px',
    borderRadius: theme.borderRadius.md,
    px: 3,
    _hover: {
      bg: theme.colors.primaryAlt[600],
    },
    _active: {
      bg: theme.colors.primaryAlt[700],
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
  secondary: {
    bg: theme.colors.background.primary,
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSize.lg,
    lineHeight: '28px',
    height: '48px',
    borderRadius: theme.borderRadius.md,
    px: 3,
    border: '2px solid',
    borderColor: theme.colors.border.medium,
    _hover: {
      bg: theme.colors.background.secondary,
      borderColor: theme.colors.border.dark,
    },
    _active: {
      bg: '#e2e8f0',
      borderColor: theme.colors.border.dark,
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
  tertiary: {
    bg: 'transparent',
    color: theme.colors.primary[600],
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSize.lg,
    lineHeight: '28px',
    height: '48px',
    borderRadius: theme.borderRadius.md,
    px: 3,
    _hover: {
      bg: theme.colors.primary[50],
    },
    _active: {
      bg: theme.colors.primary[100],
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
  success: {
    bg: theme.colors.status.success,
    color: theme.colors.text.inverse,
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSize.lg,
    lineHeight: '28px',
    height: '48px',
    borderRadius: theme.borderRadius.md,
    px: 3,
    _hover: {
      bg: theme.colors.primary[700],
    },
    _active: {
      bg: theme.colors.primary[800],
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
  danger: {
    bg: theme.colors.status.error,
    color: theme.colors.text.inverse,
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSize.lg,
    lineHeight: '28px',
    height: '48px',
    borderRadius: theme.borderRadius.md,
    px: 3,
    _hover: {
      bg: '#dc2626',
    },
    _active: {
      bg: '#b91c1c',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
} as const;

/**
 * Card Style Presets
 */
export const cardStyles = {
  default: {
    bg: theme.colors.background.primary,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.sm,
    border: '1px solid',
    borderColor: theme.colors.border.light,
    p: theme.spacing.lg,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.md,
    },
  },
  large: {
    bg: theme.colors.background.primary,
    borderRadius: theme.borderRadius['2xl'],
    boxShadow: theme.shadows.md,
    border: '1px solid',
    borderColor: theme.colors.border.light,
    p: theme.spacing.xl,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.lg,
    },
  },
  elevated: {
    bg: theme.colors.background.primary,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.lg,
    border: '1px solid',
    borderColor: theme.colors.border.light,
    p: theme.spacing.lg,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.xl,
    },
  },
  flat: {
    bg: theme.colors.background.primary,
    borderRadius: theme.borderRadius.xl,
    boxShadow: 'none',
    border: '1px solid',
    borderColor: theme.colors.border.light,
    p: theme.spacing.lg,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.sm,
    },
  },
  interactive: {
    bg: theme.colors.background.primary,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.sm,
    border: '1px solid',
    borderColor: theme.colors.border.light,
    p: theme.spacing.lg,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
  },
  static: {
    bg: theme.colors.background.primary,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.sm,
    border: '1px solid',
    borderColor: theme.colors.border.light,
    p: theme.spacing.lg,
  },
} as const;

