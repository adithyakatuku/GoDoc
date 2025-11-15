import { createSystem, defaultConfig } from '@chakra-ui/react';
import { theme as godocTheme } from './theme';

/**
 * Custom Chakra UI theme configuration
 * Extends the default system with GoDoc design tokens
 */
export const chakraTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: godocTheme.colors.primary[50] },
          100: { value: godocTheme.colors.primary[100] },
          200: { value: godocTheme.colors.primary[200] },
          300: { value: godocTheme.colors.primary[300] },
          400: { value: godocTheme.colors.primary[400] },
          500: { value: godocTheme.colors.primary[500] },
          600: { value: godocTheme.colors.primary[600] },
          700: { value: godocTheme.colors.primary[700] },
          800: { value: godocTheme.colors.primary[800] },
          900: { value: godocTheme.colors.primary[900] },
        },
      },
    },
  },
});

