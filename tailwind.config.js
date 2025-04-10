/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xs": "320px",
        "sm": "375px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1200px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Primary Brand Colors
        "fable-red": "#FF3300",
        "fable-amber": "#FFB800",
        "fable-peach": "#FFEFD9",
        
        // Semantic Colors
        "success": "#2D7D6F",
        "warning": "#F6B64B", 
        "error": "#D64D52",
        "info": "#1E4D78",
        
        // Dark Mode Gradient Colors
        "fable-deep-purple": "#5B267B",
        "fable-deep-blue": "#1A5FB4",
        
        // Light Mode Surface Colors
        "surface-primary": "#FFEFD9",
        "surface-secondary": "#FFF5E6",
        "surface-tertiary": "#FFF9F0",
        
        // Dark Mode Surface Colors
        "dark-surface-primary": "#1A1A1A",
        "dark-surface-secondary": "#2A2A2A",
        "dark-surface-tertiary": "#3A3A3A",
        
        // Light Mode Text Colors
        "text-primary": "#000000",
        "text-secondary": "#404040",
        "text-tertiary": "#666666",
        
        // Dark Mode Text Colors
        "dark-text-primary": "#FFFFFF",
        "dark-text-secondary": "#D9D9D9",
        "dark-text-tertiary": "#ABABAB",
        
        // Light Mode Border Colors
        "border-default": "#FFCA80",
        "border-strong": "#FF8000",
        
        // Dark Mode Border Colors
        "dark-border-default": "#FF6600",
        "dark-border-strong": "#FF9900",
        
        // Light Mode Status Colors
        "status-success": "#2D7D6F",
        "status-warning": "#F6B64B",
        "status-error": "#D64D52",
        "status-info": "#1E4D78",
        
        // Dark Mode Status Colors
        "dark-status-success": "#5ABEAC",
        "dark-status-warning": "#FFD080",
        "dark-status-error": "#FF7A7E",
        "dark-status-info": "#5B94D6",
        
        // UI states
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        none: "0",
        xs: "4px",
        s: "8px",
        m: "16px",
        l: "24px",
        full: "50%"
      },
      spacing: {
        'none': '0',
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      fontFamily: {
        'faro': ['Faro', 'SF Pro', 'Roboto', 'sans-serif'],
        'atkinson': ['Atkinson Hyperlegible Next', 'SF Pro', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': '36px',
        'title-1': '28px',
        'title-2': '22px',
        'headline': '17px',
        'body': '16px',
        'caption': '13px',
        'footnote': '11px',
      },
      lineHeight: {
        'display': '1.1',
        'title-1': '1.2',
        'title-2': '1.2',
        'headline': '1.3',
        'body': '1.5',
        'caption': '1.3',
        'footnote': '1.2',
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'semi-bold': '600',
        'bold': '700',
        'extra-bold': '800',
      },
      boxShadow: {
        'elevation-0': 'none',
        'elevation-1': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        'elevation-2': '0px 2px 4px rgba(0, 0, 0, 0.08)',
        'elevation-3': '0px 4px 8px rgba(0, 0, 0, 0.1)',
        'elevation-4': '0px 8px 16px rgba(0, 0, 0, 0.12)',
        'elevation-5': '0px 16px 24px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        'instant': '0ms',
        'quick': '100ms',
        'standard': '200ms',
        'relaxed': '300ms',
        'elaborate': '500ms',
      },
      transitionTimingFunction: {
        'standard': 'ease-in-out',
        'quick': 'ease-out',
        'elaborate': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      background: {
        'gradient-primary-light': 'linear-gradient(to right, #FF3300, #FFB800)',
        'gradient-primary-dark': 'linear-gradient(to right, #5B267B, #1A5FB4)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}