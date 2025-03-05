/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./**/*.liquid", // Shopify の Liquid ファイル内の Tailwind を適用
	],
	theme: {
		extend: {}, // ここにカスタム設定を追加可能
	},
	plugins: [],
};
