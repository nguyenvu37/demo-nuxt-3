# SCSS Quick Reference Cheat Sheet

## 🎨 Common Variables

### Colors

```scss
$primary, $secondary, $accent
$success, $warning, $error, $info
$gray-100, $gray-500, $gray-900
$text-primary, $text-secondary
```

### Spacing

```scss
$spacing-2  // 0.5rem (8px)
$spacing-4  // 1rem (16px)
$spacing-6  // 1.5rem (24px)
$spacing-8  // 2rem (32px)
$spacing-12 // 3rem (48px)
```

### Typography

```scss
$font-size-sm, $font-size-base, $font-size-lg
$font-size-xl, $font-size-2xl, $font-size-3xl
$font-weight-normal, $font-weight-medium, $font-weight-bold
```

### Border & Shadows

```scss
$radius-base, $radius-lg, $radius-xl, $radius-full
$shadow-sm, $shadow-base, $shadow-md, $shadow-lg, $shadow-xl
```

## 🔧 Common Mixins

### Layout

```scss
@include flex-center; // Center items
@include flex-between; // Space between
@include flex-column-center; // Column, centered
@include grid(12); // 12 column grid
@include grid-auto-fit(250px); // Auto-fit grid
```

### Responsive

```scss
@include sm {
} // 640px+
@include md {
} // 768px+
@include lg {
} // 1024px+
@include xl {
} // 1280px+
```

### Components

```scss
@include card; // Card style
@include button-base; // Button base
@include button-variant($primary, $white);
@include heading($font-size-2xl, $font-weight-bold);
```

### Effects

```scss
@include hover-lift; // Lift on hover
@include hover-scale(1.1); // Scale on hover
@include glass(0.1, 10px); // Glass effect
@include backdrop-blur(15px); // Blur effect
```

### Utilities

```scss
@include text-truncate; // Single line ellipsis
@include text-clamp(3); // 3 line clamp
@include size(48px); // Width & height
@include circle(64px); // Circle shape
```

## 📐 Common Functions

```scss
rem(24px)                       // Convert to rem
em(16px)                        // Convert to em
spacing(2)                      // $spacing-4 * 2
alpha($black, 0.5)              // rgba with opacity
text-contrast($primary)         // Auto black/white
```

## 💡 Quick Examples

### Responsive Card

```scss
.card {
  @include card;
  padding: $spacing-4;

  @include md {
    padding: $spacing-6;
  }

  &:hover {
    @include hover-lift;
  }
}
```

### Custom Button

```scss
.btn {
  @include button-variant($primary, $white);
  border-radius: $radius-full;
  padding: $spacing-3 $spacing-6;

  &:hover {
    transform: scale(1.05);
  }
}
```

### Centered Container

```scss
.container {
  @include flex-column-center;
  max-width: $breakpoint-lg;
  padding: $spacing-8;
  gap: $spacing-4;
}
```

### Glass Card

```scss
.glass-card {
  @include glass(0.1, 12px);
  @include card;
  border: 1px solid rgba($white, 0.2);
}
```

### Grid Layout

```scss
.grid {
  @include grid-auto-fit(250px, $spacing-6);

  @include lg {
    @include grid(3, $spacing-8);
  }
}
```

### Gradient Text

```scss
.gradient-text {
  background: linear-gradient(135deg, $primary, $secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Animated Element

```scss
.animated {
  animation: fadeInUp $transition-slow;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-xl;
  }
}
```
