/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#FAFAF5',
                mist: '#F0F0EA',
                navy: '#0A0F1E',
                electric: '#1A56F0',
                coral: '#FF5C35',
                gold: '#F0A500',
                ink: '#1A1A2E',
            },
            fontFamily: {
                sans: ['var(--font-outfit)', 'sans-serif'],
                display: ['var(--font-cormorant)', 'serif'],
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'marquee-reverse': 'marquee-reverse 30s linear infinite',
                'float': 'float 8s ease-in-out infinite',
                'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}
