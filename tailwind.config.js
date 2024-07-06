/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Red: "#ef4444",
        darkBlue: "#1f2937",
        Gray: "#e2e8f0",
        colorWhite: "#fff",
        LightGray: "#d4d4d4",
      },
      backgroundImage: {
        notFound: "URL('/src/assets/404NotFound.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
