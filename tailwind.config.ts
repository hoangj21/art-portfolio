import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          surface: '#111111',
          elevated: '#1a1a1a',
          'red-tint': '#0f0a0a',
        },
        fg: {
          DEFAULT: '#e8e4e0',
          muted: '#9a9490',
          dim: '#5a5450',
        },
        accent: {
          DEFAULT: '#c42033',
          bright: '#e63946',
          deep: '#8b1a2b',
          hot: '#ff2d44',
          soft: 'rgba(196, 32, 51, 0.12)',
          glow: 'rgba(196, 32, 51, 0.25)',
        },
        teal: {
          DEFAULT: '#2dd4bf',
          soft: 'rgba(45, 212, 191, 0.10)',
          glow: 'rgba(45, 212, 191, 0.08)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          red: 'rgba(196, 32, 51, 0.25)',
        },
      },
      fontFamily: {
        hero: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        heading: ['var(--font-saira)', 'Arial Narrow', 'sans-serif'],
        body: ['var(--font-space)', 'Arial', 'sans-serif'],
        mono: ['var(--font-share)', 'monospace'],
      },
      animation: {
        'scanline': 'scanline 14s linear infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        'breathe': 'breathe 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 60s linear infinite',
        'marquee': 'marquee 50s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out both',
        'glitch-shift': 'glitch-shift 0.3s ease',
        'border-pulse': 'border-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.35' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.04' },
          '50%': { opacity: '0.09' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glitch-shift': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(196,32,51,0.15)' },
          '50%': { borderColor: 'rgba(196,32,51,0.4)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
