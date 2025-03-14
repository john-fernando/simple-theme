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
    theme: {
        extend: {},
    },
    plugins: [],
};
