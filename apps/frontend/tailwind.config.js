/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 🎨 Design Tokens - Colors
      colors: {
        // Primary brand colors (merged - using scale from config 2, but keeping config 1's primary value as 500)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0570b1', // From config 1
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        // Secondary color (from config 1)
        secondary: '#8ec164', // Fixed typo: was 'secondry'

        // Neutral grays (from config 2)
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },

        // Success state (merged both configs)
        success: {
          50: '#f0fdf4',
          500: '#22c55e', // From config 2
          600: '#16a34a', // From both configs (same value)
        },

        // Danger/Error state (merged both configs)
        danger: {
          50: '#fef2f2',
          500: '#ef4444', // From config 2
          600: '#dc2626', // From both configs (same value)
        },

        // Warning color (from config 1)
        warning: '#facc15',

        // Info color (from config 1)
        info: '#3b82f6',
      },

      // 🔤 Typography
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Fira Code', 'monospace'],
      },

      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        // Custom heading sizes
        'h1': '2.5rem',     // 40px
        'h2': '2rem',       // 32px
      },

      // 📱 Responsive breakpoints
      screens: {
        'sm': '640px',
        'md': '768px',
        'md2': '900px',    // Custom breakpoint for small tablet
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      // 📏 Spacing tokens
      spacing: {
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
      },

      // 🎯 Layout tokens
      maxWidth: {
        '8xl': '88rem',    // 1408px
        '9xl': '96rem',    // 1536px
      },

      // 🌊 Animation tokens
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
