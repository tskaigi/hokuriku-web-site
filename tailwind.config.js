/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "blue-light-100": "var(--blue-light-100)",
        "blue-light-500": "var(--blue-light-500)", // 他の色も必要なら追加
        "bg-blue-light-100": "var(--blue-light-100)",
      },
    },
  },
  plugins: [],
};
