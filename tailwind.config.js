/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './layout/**/*.liquid',
        './sections/**/*.liquid',
        './templates/**/*.liquid',
        './snippets/**/*.liquid',
        './assets/**/*.liquid',
        './**/*.html',
        './**/*.js',
    ],
    safelist: [
        { pattern: /./ }, // 🔥 Incluye TODAS las clases de Tailwind
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
