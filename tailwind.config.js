/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d59ef',
        secondary: '#22d3ee',
        dark: '#0f172a',
        'text-main': '#1a1a1a',
        'text-muted': '#64748b',
        'text-dim': '#94a3b8',
        'bg-main': '#f8fafc',
        'bg-card': '#ffffff',
        'border-light': '#f1f5f9',
        skill: {
          blue: '#5d59ef',
          cyan: '#22d3ee',
          pink: '#fb7185',
          amber: '#fbbf24',
        }
      },
      borderRadius: {
        pill: '100px',
        card: '24px',
      },
      fontFamily: {
        main: "'Inter', system-ui, -apple-system, sans-serif",
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(#e2e8f0 1px, transparent 1px)',
        'hero-gradient': 'linear-gradient(135deg, #22d3ee 0%, #5d59ef 100%)',
      },
      backgroundSize: {
        'dot-grid': '32px 32px',
      },
      boxShadow: {
        'btn': '0 10px 20px -5px rgba(93, 89, 239, 0.3)',
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}
