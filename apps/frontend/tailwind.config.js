/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0570b1',
        'secondry': '#8ec164',
        'success': '#16a34a',
        'danger': '#dc2626',
        'warning': '#facc15',
        'info': '#3b82f6',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',  // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem',   // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem',  // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        // non-standard sizes for specific purposes.
        'h1': '2.5rem',
        'h2': '2rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'md2': '900px', // Custom breakpoint for a small tablet size
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

