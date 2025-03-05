/** @type {import('tailwindcss').Config} */
export default {
    content: ['./**/*.liquid'], // Liquid ファイル内のクラスも検出
    safelist: [{ pattern: /.*/ }], // すべてのクラスを含める
    theme: {
        extend: {},
    },
    plugins: [],
};
