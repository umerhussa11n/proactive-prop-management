# 🎨 Styling Guide

## 📖 Overview

This project uses **Tailwind CSS** as the primary styling framework with custom component primitives for consistency and maintainability.

---

## 🛠️ Technology Stack

| Technology            | Purpose | Benefits |
|-----------------------|---------|----------|
| **Tailwind CSS**      | Utility-first CSS framework | Rapid UI development with consistent design tokens |
| **Custom Components** | Reusable UI primitives | Full control over appearance and behavior |
| **PostCSS**           | CSS processing | Optimized Tailwind directive handling |

---

## 🏗️ Architecture Decisions

### 🚀 Why Tailwind CSS?

✅ **Utility-first approach**: Faster development with consistent spacing, colors, and typography  
✅ **Design system integration**: Easy to maintain design tokens through Tailwind config  
✅ **Bundle optimization**: Only ships CSS for classes actually used  
✅ **Developer experience**: IntelliSense support and consistent naming conventions  

### 🎯 Why Custom Components over UI Libraries?

✅ **Design flexibility**: Full control over component appearance and behavior  
✅ **Consistency**: Tailwind-native components avoid styling conflicts  
✅ **Bundle size**: No additional UI library overhead  
✅ **Learning curve**: Team familiarity with Tailwind utilities  

---

## 📁 Component Structure

```
src/
├── components/
│   ├── ui/                    # 🧩 Reusable UI primitives
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.test.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.test.tsx
│   │   │   └── index.ts
│   │   └── index.ts           # 📤 Barrel exports
│   └── features/              # 🎯 Feature-specific components
│       ├── dashboard/
│       ├── maintenance/
│       └── tenants/
```

---

## 📋 Styling Conventions

### 🔧 Component Creation

> **Best Practices**

- 📍 **Location**: All UI components should be created in `src/components/ui/`
- 🏷️ **Types**: Use TypeScript interfaces for prop definitions
- 🎨 **Variants**: Include variant support using `clsx` or `cn` utility
- 📤 **Exports**: Export from `src/components/ui/index.ts`

### 🎭 Tailwind Usage

| Principle | Description | Example |
|-----------|-------------|---------|
| **Composition** | Use Tailwind utilities in component definitions | `className="bg-blue-600 hover:bg-blue-700"` |
| **Custom CSS** | Only for complex animations or unique requirements | `.custom-animation { ... }` |
| **Responsive** | Mobile-first approach using Tailwind breakpoints | `sm:text-lg md:text-xl lg:text-2xl` |
| **Dark Mode** | Use `dark:` prefix for dark mode variants | `bg-white dark:bg-gray-800` |

---

## 🎨 Example Component Pattern

### 🔘 Button Component

```tsx
// src/components/ui/Button/Button.tsx
import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children,
  disabled = false,
  ...props 
}) => {
  return (
    <button
      className={clsx(
        // 🎯 Base styles
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        
        // 🎨 Variants
        {
          'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500': 
            variant === 'primary',
          'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500': 
            variant === 'secondary',
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500': 
            variant === 'danger',
        },
        
        // 📏 Sizes
        {
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-base': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
        },
        
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### 📤 Export Pattern

```tsx
// src/components/ui/Button/index.ts
export { default } from './Button';
```

```tsx
// src/components/ui/index.ts
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';
// ... other components
```

---

## 🎨 Design Tokens

### 🎨 Color Palette

```css
/* Primary Colors */
blue-50  → #eff6ff    /* Light backgrounds */
blue-600 → #2563eb    /* Primary actions */
blue-700 → #1d4ed8    /* Hover states */

/* Neutral Colors */
gray-50  → #f9fafb    /* Subtle backgrounds */
gray-600 → #4b5563    /* Secondary text */
gray-900 → #111827    /* Primary text */

/* Status Colors */
green-600 → #059669   /* Success states */
red-600   → #dc2626   /* Error states */
yellow-600 → #d97706  /* Warning states */
```

### 📏 Spacing Scale

```css
px-2  → 8px     /* Tight spacing */
px-4  → 16px    /* Default spacing */
px-6  → 24px    /* Comfortable spacing */
py-2  → 8px     /* Vertical tight */
py-4  → 16px    /* Vertical default */
```

### 🔤 Typography Scale

```css
text-sm   → 14px    /* Small text */
text-base → 16px    /* Body text */
text-lg   → 18px    /* Large text */
text-xl   → 20px    /* Headings */
text-2xl  → 24px    /* Large headings */
```

---

## ✅ Best Practices

### 🎯 DO's

✅ **Use semantic HTML** elements when possible  
✅ **Follow mobile-first** responsive design  
✅ **Include focus states** for accessibility  
✅ **Use consistent spacing** from Tailwind scale  
✅ **Test dark mode** variants  
✅ **Document component APIs** with TypeScript  

### ❌ DON'Ts

❌ **Don't use arbitrary values** unless absolutely necessary  
❌ **Don't mix styling approaches** (Tailwind + CSS-in-JS)  
❌ **Don't forget disabled states**  
❌ **Don't skip responsive breakpoints**  
❌ **Don't hardcode colors** outside design tokens  

---

## 🔍 Resources

- 📚 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 🎨 [Tailwind UI Components](https://tailwindui.com/)
- 🛠️ [Headless UI](https://headlessui.com/) (for complex interactions)
- 🎯 [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🚀 Quick Start

1. **Create a new component**:
   ```bash
   mkdir src/components/ui/MyComponent
   touch src/components/ui/MyComponent/{MyComponent.tsx,index.ts}
   ```

2. **Follow the pattern** shown in the Button example above

3. **Export from barrel**:
   ```tsx
   // src/components/ui/index.ts
   export { default as MyComponent } from './MyComponent';
   ```

4. **Use in your app**:
   ```tsx
   import { MyComponent } from '@components/ui';
   ```

---

> 💡 **Remember**: Consistency is key! Follow these patterns to maintain a cohesive design system across the entire application.