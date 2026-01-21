# SCSS Architecture Guide

This document explains the SCSS structure and how to use it in your Nuxt 3 project.

## 📁 File Structure

```
assets/scss/
├── _functions.scss    # SCSS functions (unit conversion, color manipulation, etc.)
├── _variables.scss    # Design tokens (colors, typography, spacing, etc.)
├── _mixins.scss       # Reusable style patterns
├── _base.scss         # Base styles and CSS reset
├── _utilities.scss    # Utility classes
└── main.scss          # Main entry point (imports all files)
```

## 🎨 Features

### 1. **Variables** (`_variables.scss`)

Pre-defined design tokens for consistent styling:

- **Colors**: Primary, secondary, accent, semantic colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale (4px base)
- **Border Radius**: From `sm` to `full`
- **Shadows**: Multiple shadow levels
- **Transitions**: Predefined timing functions
- **Breakpoints**: Responsive design breakpoints
- **Z-index**: Layering system

### 2. **Mixins** (`_mixins.scss`)

Reusable style patterns:

#### Responsive Breakpoints

```scss
.element {
  padding: $spacing-4;

  @include md {
    padding: $spacing-8;
  }

  @include lg {
    padding: $spacing-12;
  }
}
```

#### Flexbox Utilities

```scss
.container {
  @include flex-center; // Center items
  @include flex-between; // Space between
  @include flex-column-center; // Column layout, centered
}
```

#### Grid Utilities

```scss
.grid-container {
  @include grid(12, $spacing-4); // 12 columns
  @include grid-auto-fit(250px, $spacing-4); // Auto-fit
  @include grid-auto-fill(200px, $spacing-6); // Auto-fill
}
```

#### Typography

```scss
.heading {
  @include heading($font-size-3xl, $font-weight-bold);
  @include text-truncate; // Single line ellipsis
  @include text-clamp(3); // Multi-line clamp
}
```

#### Buttons

```scss
.btn-primary {
  @include button-variant($primary, $white);
}

.btn-custom {
  @include button-base;
  // Add custom styles
}
```

#### Cards & Containers

```scss
.card {
  @include card; // Basic card
  @include card-hover; // Card with hover effect
}

.container {
  @include container($breakpoint-xl);
}
```

#### Effects

```scss
.element {
  @include hover-lift; // Lift on hover
  @include hover-scale(1.1); // Scale on hover
  @include glass(0.1, 10px); // Glassmorphism effect
  @include backdrop-blur(15px); // Backdrop blur
}
```

### 3. **Functions** (`_functions.scss`)

Utility functions for dynamic calculations:

```scss
// Unit conversion
.element {
  padding: rem(24px); // Convert px to rem
  margin: em(16px); // Convert px to em
}

// Spacing
.box {
  padding: spacing(2); // $spacing-4 * 2 = 2rem
}

// Color manipulation
.overlay {
  background: alpha($black, 0.5); // rgba with opacity
}

// Contrast
.button {
  background: $primary;
  color: text-contrast($primary); // Auto black or white
}
```

## 🚀 Usage in Components

### Auto-imported in All Components

Variables, mixins, and functions are automatically available in all `.vue` files!

```vue
<template>
  <div class="my-component">
    <h1>Hello World</h1>
    <button class="custom-btn">Click me</button>
  </div>
</template>

<style lang="scss" scoped>
.my-component {
  padding: $spacing-8; // ✅ Variables auto-imported

  @include md {
    // ✅ Mixins auto-imported
    padding: $spacing-12;
  }

  h1 {
    @include heading($font-size-3xl);
    color: $primary;
  }
}

.custom-btn {
  @include button-variant($secondary, $white);
  border-radius: $radius-full;

  &:hover {
    @include hover-lift;
  }
}
</style>
```

## 📋 Available Variables

### Colors

```scss
// Primary colors
$primary, $primary-dark, $primary-light
$secondary, $secondary-dark, $secondary-light
$accent, $accent-dark, $accent-light

// Semantic colors
$success, $warning, $error, $info

// Neutral colors
$gray-50 through $gray-900
$white, $black

// Text colors
$text-primary, $text-secondary, $text-muted, $text-inverse
```

### Typography

```scss
// Font families
$font-family-base, $font-family-heading, $font-family-mono

// Font sizes
$font-size-xs through $font-size-5xl

// Font weights
$font-weight-light through $font-weight-extrabold

// Line heights
$line-height-tight, $line-height-normal, $line-height-relaxed, $line-height-loose
```

### Spacing

```scss
$spacing-0 through $spacing-24
// Examples: $spacing-4 = 1rem, $spacing-8 = 2rem
```

### Border Radius

```scss
$radius-none through $radius-3xl, $radius-full
```

### Shadows

```scss
$shadow-sm, $shadow-base, $shadow-md, $shadow-lg, $shadow-xl, $shadow-2xl
$shadow-inner, $shadow-none
```

### Transitions

```scss
$transition-fast (150ms)
$transition-base (200ms)
$transition-slow (300ms)
$transition-slower (500ms)
```

### Breakpoints

```scss
$breakpoint-sm: 640px
$breakpoint-md: 768px
$breakpoint-lg: 1024px
$breakpoint-xl: 1280px
$breakpoint-2xl: 1536px
```

## 🎯 Best Practices

### 1. Use Variables for Consistency

```scss
// ❌ Bad
.element {
  color: #3b82f6;
  padding: 16px;
}

// ✅ Good
.element {
  color: $primary;
  padding: $spacing-4;
}
```

### 2. Use Mixins for Reusability

```scss
// ❌ Bad
.card-1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

// ✅ Good
.card-1,
.card-2 {
  @include flex-center;
}
```

### 3. Use Nesting Wisely

```scss
// ❌ Bad - Too deep
.nav {
  .menu {
    .item {
      .link {
        .icon {
          // Too nested!
        }
      }
    }
  }
}

// ✅ Good - Max 3 levels
.nav {
  .menu-item {
    // Styles

    .link {
      // Styles
    }
  }
}
```

### 4. Scope Styles with `scoped`

```vue
<style lang="scss" scoped>
// These styles only apply to this component
.my-component {
  // ...
}
</style>
```

### 5. Combine with Tailwind CSS

You can use both SCSS and Tailwind in the same project:

```vue
<template>
  <!-- Tailwind for utility classes -->
  <div class="flex items-center gap-4">
    <!-- SCSS for custom components -->
    <div class="custom-card">
      <h2>Title</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-card {
  @include card;
  // Custom SCSS styles
}
</style>
```

## 🔧 Customization

### Adding New Variables

Edit `assets/scss/_variables.scss`:

```scss
// Add your custom variables
$brand-color: #ff6b6b;
$custom-spacing: 2.5rem;
```

### Adding New Mixins

Edit `assets/scss/_mixins.scss`:

```scss
@mixin my-custom-mixin($param) {
  // Your mixin code
}
```

### Adding New Functions

Edit `assets/scss/_functions.scss`:

```scss
@function my-function($value) {
  @return $value * 2;
}
```

## 📚 Resources

- [Sass Documentation](https://sass-lang.com/documentation)
- [Nuxt 3 Styling](https://nuxt.com/docs/getting-started/styling)
- [CSS Architecture Best Practices](https://www.smashingmagazine.com/2018/05/guide-css-layout/)

## 🎨 Example Components

Check out `pages/index.vue` for a complete example of SCSS usage with:

- Variables
- Mixins
- Nested selectors
- Responsive design
- Animations
- Custom components

---

**Happy Styling! 🎨**
