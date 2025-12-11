/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 10s ease-in-out infinite',
                'text-shimmer': 'text-shimmer 5s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(20px, -20px)' },
                },
                'text-shimmer': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '200% 50%' },
                },
            },
        },
    },
    plugins: [],
}
