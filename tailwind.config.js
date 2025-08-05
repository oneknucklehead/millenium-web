import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                archivo: ['Archivo', ...defaultTheme.fontFamily.sans],
            },
            // colors: {
            //     primary: "#FF6600",
            //     secondary: "#1A2B50"
            // }
        },
    },
    plugins: [],
};