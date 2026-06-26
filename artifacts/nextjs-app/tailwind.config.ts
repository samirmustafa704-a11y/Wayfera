import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        arabic: ['var(--font-noto-kufi-arabic)', 'Noto Kufi Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #2196f3 0%, #00bcd4 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        typewriter: 'typewriter 3.5s steps(40, end), blink 0.75s step-end infinite',
      },
      boxShadow: {
        neomorphism: '8px 8px 16px #cbcbcb, -8px -8px 16px #ffffff',
        'neomorphism-dark': '8px 8px 16px #0a0a0a, -8px -8px 16px #1a1a1a',
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function({ addBase, addUtilities, theme }) {
      // Add CSS variables as base styles
      addBase({
        ':root': {
          '--background': '0 0% 100%',
          '--foreground': '222.2 84% 4.9%',
          '--card': '0 0% 100%',
          '--card-foreground': '222.2 84% 4.9%',
          '--popover': '0 0% 100%',
          '--popover-foreground': '222.2 84% 4.9%',
          '--primary': '221.2 83.2% 53.3%',
          '--primary-foreground': '210 40% 98%',
          '--secondary': '210 40% 96%',
          '--secondary-foreground': '222.2 84% 4.9%',
          '--muted': '210 40% 96%',
          '--muted-foreground': '215.4 16.3% 46.9%',
          '--accent': '210 40% 96%',
          '--accent-foreground': '222.2 84% 4.9%',
          '--destructive': '0 84.2% 60.2%',
          '--destructive-foreground': '210 40% 98%',
          '--border': '214.3 31.8% 91.4%',
          '--input': '214.3 31.8% 91.4%',
          '--ring': '221.2 83.2% 53.3%',
          '--radius': '0.75rem',
          '--chart-1': '12 76% 61%',
          '--chart-2': '173 58% 39%',
          '--chart-3': '197 37% 24%',
          '--chart-4': '43 74% 66%',
          '--chart-5': '27 87% 67%',
        },
        '.dark': {
          '--background': '222.2 84% 4.9%',
          '--foreground': '210 40% 98%',
          '--card': '222.2 84% 4.9%',
          '--card-foreground': '210 40% 98%',
          '--popover': '222.2 84% 4.9%',
          '--popover-foreground': '210 40% 98%',
          '--primary': '217.2 91.2% 59.8%',
          '--primary-foreground': '222.2 84% 4.9%',
          '--secondary': '217.2 32.6% 17.5%',
          '--secondary-foreground': '210 40% 98%',
          '--muted': '217.2 32.6% 17.5%',
          '--muted-foreground': '215 20.2% 65.1%',
          '--accent': '217.2 32.6% 17.5%',
          '--accent-foreground': '210 40% 98%',
          '--destructive': '0 62.8% 30.6%',
          '--destructive-foreground': '210 40% 98%',
          '--border': '217.2 32.6% 17.5%',
          '--input': '217.2 32.6% 17.5%',
          '--ring': '224.3 76.3% 94.1%',
          '--chart-1': '220 70% 50%',
          '--chart-2': '160 60% 45%',
          '--chart-3': '30 80% 55%',
          '--chart-4': '280 65% 60%',
          '--chart-5': '340 75% 55%',
        },
        '*': {
          borderColor: 'hsl(var(--border))',
        },
        'body': {
          backgroundColor: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          fontFamily: 'var(--font-oswald), Oswald, sans-serif',
        },
        'body.font-arabic': {
          fontFamily: 'var(--font-noto-kufi-arabic), Noto Kufi Arabic, sans-serif',
        },
        '[dir="rtl"]': {
          direction: 'rtl',
        },
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.gray.100'),
        },
        '.dark ::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.gray.800'),
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.gray.400'),
          borderRadius: theme('borderRadius.full'),
        },
        '.dark ::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.gray.600'),
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme('colors.gray.500'),
        },
        // Date Input Styling
        'input[type="date"]': {
          position: 'relative',
          colorScheme: 'light dark',
          paddingRight: '2.5rem',
        },
        // Calendar icon positioning - right side
        'input[type="date"]::-webkit-calendar-picker-indicator': {
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          opacity: '0.7',
          transition: 'opacity 0.2s, transform 0.2s',
          width: '1.25rem',
          height: '1.25rem',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
        'input[type="date"]::-webkit-calendar-picker-indicator:hover': {
          opacity: '1',
          transform: 'translateY(-50%) scale(1.1)',
        },
        // Dark mode calendar icon
        '.dark input[type="date"]::-webkit-calendar-picker-indicator': {
          filter: 'invert(1)',
        },
        // Date field styling
        'input[type="date"]::-webkit-datetime-edit': {
          padding: '0',
        },
        'input[type="date"]::-webkit-datetime-edit-fields-wrapper': {
          padding: '0',
        },
        'input[type="date"]::-webkit-datetime-edit-text': {
          color: 'hsl(var(--muted-foreground))',
          padding: '0 0.25rem',
        },
        'input[type="date"]::-webkit-datetime-edit-month-field, input[type="date"]::-webkit-datetime-edit-day-field, input[type="date"]::-webkit-datetime-edit-year-field': {
          padding: '0.25rem 0.5rem',
          borderRadius: '0.375rem',
          transition: 'background-color 0.2s',
        },
        'input[type="date"]::-webkit-datetime-edit-month-field:focus, input[type="date"]::-webkit-datetime-edit-day-field:focus, input[type="date"]::-webkit-datetime-edit-year-field:focus': {
          backgroundColor: 'hsl(var(--primary) / 0.1)',
          outline: 'none',
        },
        // Placeholder for empty date inputs
        'input[type="date"]:not(:focus):invalid': {
          color: 'hsl(var(--muted-foreground))',
        },
        // RTL Support
        '[dir="rtl"] input[type="date"]::-webkit-calendar-picker-indicator': {
          right: 'auto',
          left: '0.75rem',
        },
        '[dir="rtl"] input[type="date"]': {
          paddingRight: '1rem',
          paddingLeft: '2.5rem',
        },
        // Calendar Popup Styling (Limited browser support)
        'input[type="date"]::-webkit-inner-spin-button': {
          display: 'none',
        },
        'input[type="date"]::-webkit-clear-button': {
          display: 'none',
        },
        // Custom Calendar Component Styling
        '.rdp': {
          '--rdp-cell-size': '40px',
          '--rdp-accent-color': '#2563eb',
          '--rdp-background-color': '#2563eb',
          '--rdp-accent-color-dark': '#1d4ed8',
          '--rdp-background-color-dark': '#1d4ed8',
          '--rdp-outline': '2px solid var(--rdp-accent-color)',
          '--rdp-outline-selected': '2px solid var(--rdp-accent-color)',
          margin: '1rem',
        },
        '.rdp-months': {
          display: 'flex',
          gap: '1rem',
        },
        '.rdp-month': {
          width: '100%',
        },
        '.rdp-caption': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          position: 'relative',
        },
        '.rdp-caption_label': {
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'hsl(var(--foreground))',
        },
        '.rdp-nav': {
          display: 'flex',
          gap: '0.25rem',
        },
        '.rdp-nav_button': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2rem',
          height: '2rem',
          borderRadius: '0.375rem',
          border: '1px solid hsl(var(--border))',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          transition: 'all 0.2s',
        },
        '.rdp-nav_button:hover': {
          backgroundColor: 'hsl(var(--accent))',
        },
        '.rdp-table': {
          width: '100%',
          borderCollapse: 'collapse',
        },
        '.rdp-head_cell': {
          width: 'var(--rdp-cell-size)',
          fontSize: '0.875rem',
          fontWeight: '400',
          textAlign: 'center',
          color: 'hsl(var(--muted-foreground))',
          paddingBottom: '0.5rem',
        },
        '.rdp-cell': {
          width: 'var(--rdp-cell-size)',
          height: 'var(--rdp-cell-size)',
          textAlign: 'center',
          padding: '0',
        },
        '.rdp-button': {
          width: '100%',
          height: '100%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          fontWeight: '400',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          transition: 'all 0.2s',
        },
        '.rdp-button:hover:not(.rdp-day_selected)': {
          backgroundColor: 'hsl(var(--accent))',
        },
        '.rdp-day_selected': {
          backgroundColor: '#2563eb',
          color: 'white',
          fontWeight: '500',
        },
        '.rdp-day_selected:hover': {
          backgroundColor: '#1d4ed8',
        },
        '.rdp-day_today:not(.rdp-day_selected)': {
          backgroundColor: 'hsl(var(--accent))',
          fontWeight: '500',
        },
        '.rdp-day_outside': {
          color: 'hsl(var(--muted-foreground))',
          opacity: '0.5',
        },
        '.rdp-day_disabled': {
          color: 'hsl(var(--muted-foreground))',
          opacity: '0.5',
          cursor: 'not-allowed',
        },
        '.dark .rdp-day_selected': {
          backgroundColor: '#3b82f6',
        },
        '.dark .rdp-day_selected:hover': {
          backgroundColor: '#2563eb',
        },
      });
      
      // Add utility classes
      addUtilities({
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          '@media (prefers-color-scheme: dark)': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        },
        '.dark .glass-dark': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.typewriter': {
          overflow: 'hidden',
          borderRight: '2px solid',
          whiteSpace: 'nowrap',
          animation: 'typewriter 3.5s steps(40, end), blink 0.75s step-end infinite',
        },
      });
    }),
  ],
};
export default config;
