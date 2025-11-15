# GoDoc Design System

This directory contains the global stylesheet and design tokens for the GoDoc application.

## Files

- **`global.css`**: Global CSS stylesheet with CSS custom properties, utility classes, and component styles
- **`theme.ts`**: TypeScript theme configuration for use with Chakra UI and TypeScript components

## Usage

### CSS Classes (from global.css)

#### Buttons

```tsx
// Primary Button
<button className="btn-primary">Click Me</button>

// Secondary Button (Outlined)
<button className="btn-secondary">Click Me</button>

// Tertiary Button (Ghost)
<button className="btn-tertiary">Click Me</button>

// Success Button
<button className="btn-success">Click Me</button>

// Danger Button
<button className="btn-danger">Click Me</button>

// Button Sizes
<button className="btn-primary btn-sm">Small</button>
<button className="btn-primary btn-lg">Large</button>
<button className="btn-primary btn-xl">Extra Large</button>

// Full Width
<button className="btn-primary btn-full">Full Width</button>
```

#### Cards

```tsx
<div className="card">Default Card</div>
<div className="card card-lg">Large Card</div>
<div className="card card-elevated">Elevated Card</div>
<div className="card card-flat">Flat Card</div>
```

#### Inputs

```tsx
<input type="text" className="input" placeholder="Enter text" />
<input type="text" className="input input-error" placeholder="Error state" />
```

#### Badges

```tsx
<span className="badge badge-success">Success</span>
<span className="badge badge-warning">Warning</span>
<span className="badge badge-error">Error</span>
<span className="badge badge-info">Info</span>
```

### Chakra UI with Theme (from theme.ts)

```tsx
import { Button } from '@chakra-ui/react';
import { buttonStyles } from '../styles/theme';

// Primary Button
<Button {...buttonStyles.primary}>Click Me</Button>

// Secondary Button
<Button {...buttonStyles.secondary}>Click Me</Button>

// Tertiary Button
<Button {...buttonStyles.tertiary}>Click Me</Button>

// Success Button
<Button {...buttonStyles.success}>Click Me</Button>

// Danger Button
<Button {...buttonStyles.danger}>Click Me</Button>
```

### CSS Custom Properties

You can use CSS variables directly in your styles:

```css
.my-component {
  background-color: var(--color-primary);
  color: var(--text-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

### Theme Tokens (TypeScript)

```tsx
import { theme } from '../styles/theme';

// Access colors
const primaryColor = theme.colors.primary[500];
const backgroundColor = theme.colors.background.tertiary;

// Access spacing
const padding = theme.spacing.lg;

// Access border radius
const borderRadius = theme.borderRadius.xl;
```

## Design Tokens

### Colors

- **Primary**: `#11d452` (main brand color)
- **Primary Alt**: `#34c759` (for buttons)
- **Background**: White, Gray (#f5f5f5), Mint (#e8f5f0)
- **Text**: Dark gray scale (#1a202c to #a0aec0)
- **Status**: Success (green), Warning (amber), Error (red), Info (blue)

### Spacing

- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px

### Border Radius

- `sm`: 6px
- `md`: 8px
- `lg`: 12px
- `xl`: 16px
- `2xl`: 24px
- `3xl`: 32px
- `full`: 9999px

### Typography

- **Font Family**: Inter
- **Font Sizes**: 12px to 36px
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

## Best Practices

1. **Use button styles consistently**: Always use `buttonStyles.primary`, `buttonStyles.secondary`, etc. for Chakra UI buttons
2. **Use CSS classes for simple HTML elements**: Use `.btn-primary`, `.card`, etc. for standard HTML elements
3. **Leverage CSS variables**: Use `var(--color-primary)` instead of hardcoding colors
4. **Follow spacing scale**: Use predefined spacing values (`var(--spacing-md)`) instead of arbitrary values
5. **Maintain consistency**: Always use the design tokens rather than creating new values

## Examples

### Example: Registration Button

```tsx
import { Button } from '@chakra-ui/react';
import { buttonStyles } from '../styles/theme';

<Button {...buttonStyles.primary} w="100%">
  Register as a Patient
</Button>
```

### Example: Card with Custom Styling

```tsx
import { Box } from '@chakra-ui/react';
import { cardStyles } from '../styles/theme';

<Box {...cardStyles.default}>
  Card Content
</Box>
```

### Example: Using CSS Variables

```tsx
<Box
  bg="var(--bg-tertiary)"
  p="var(--spacing-lg)"
  borderRadius="var(--radius-xl)"
  boxShadow="var(--shadow-md)"
>
  Content
</Box>
```

