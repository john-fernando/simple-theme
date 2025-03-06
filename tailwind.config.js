/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./**/*.html', './**/*.liquid', './**/*.js'], // Liquid ファイル内のクラスも検出
    safelist: [{ pattern: /.*/ }], // すべてのクラスを含める
    theme: {
        extend: {},
    },
    plugins: [],
};
