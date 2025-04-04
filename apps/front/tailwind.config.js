/** @type {import('tailwindcss').Config} */
import animatePlugin from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  safelist: [
    'bg-success',
    'bg-destructive',
    'bg-warning',
    'text-success',
    'text-destructive',
    'text-warning'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        score: {
          'very-low': 'hsl(var(--score-very-low))',
          low: 'hsl(var(--score-low))',
          'medium-low': 'hsl(var(--score-medium-low))',
          medium: 'hsl(var(--score-medium))',
          high: 'hsl(var(--score-high))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))'
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
          common: 'hsl(var(--card-common))',
          rare: 'hsl(var(--card-rare))',
          unique: 'hsl(var(--card-unique))',
          champion: 'hsl(var(--card-champion))',
          vintage: 'hsl(var(--card-vintage))'
        },
        chart: {
          default: 'hsl(var(--chart-default))',
          skeleton: 'hsl(var(--chart-skeleton))',
          error: 'hsl(var(--chart-error))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        breath: {
          '50%': {
            opacity: '0.4'
          }
        },
        throb: {
          '0%': {
            transform: 'scale(1)'
          },
          '8%': {
            transform: 'scale(0.8)',
            boxShadow: '0 0 0 0 hsl(var(--success))'
          },
          '30%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 7px hsl(var(--background))'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        skeleton: {
          '0%': {
            backgroundPosition: '200% 0'
          },
          '100%': {
            backgroundPosition: '-100% 0'
          }
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' }
        }
      },
      transitionDuration: {
        4000: '4000ms'
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        breath: 'breath 4s ease-in-out infinite',
        throb: 'throb 3s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-in-out forwards',
        skeleton: 'skeleton 2.5s ease-in-out infinite',
        shine: 'shine 5s linear infinite'
      }
    }
  },
  plugins: [animatePlugin, require('tailwindcss-animate')]
};

export default config;
